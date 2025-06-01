// --- Cloudflare Worker Code ---
// This part should remain as is in your Cloudflare Worker script.

addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

const ALLOWED_ORIGINS = [
  'https://your-frontend-domain.com', // <-- Replace with your actual allowed origins
  // Add more allowed origins as needed
];
// IMPORTANT: Make sure this URL is the correct one for your deployed Google Apps Script
const GOOGLE_APPS_SCRIPT_URL = 'https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec' // <-- Placeholder for open source

async function handleRequest(request) {
  const origin = request.headers.get('Origin')

  // Validate Origin only if it's present (e.g., browser requests)
  // Allow requests without an Origin header (e.g. Postman, server-to-server) for easier testing if needed,
  // but for production, you might want to be stricter.
  if (origin && !ALLOWED_ORIGINS.includes(origin)) {
    return new Response('Forbidden: Invalid Origin', { status: 403 })
  }

  const corsHeaders = {
    'Access-Control-Allow-Origin': origin || '*', // Be more specific in production if possible
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
  }

  if (request.method === 'OPTIONS') {
    // Handle preflight request
    return new Response(null, {
      status: 204,
      headers: {
        ...corsHeaders,
        'Access-Control-Max-Age': '86400' // Cache preflight response for 1 day
      },
    })
  }

  // Only allow POST requests
  if (request.method !== 'POST') {
    return new Response('Method Not Allowed', { status: 405 })
  }

  try {
    // Forward the request to Google Apps Script
    const appScriptResponse = await fetch(GOOGLE_APPS_SCRIPT_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json' // Let Apps Script know to expect JSON
      },
      body: await request.text() // Forward the raw body
    })

    // Clone the response to modify headers
    const responseBody = await appScriptResponse.arrayBuffer(); // Read body once
    const response = new Response(responseBody, {
        status: appScriptResponse.status,
        statusText: appScriptResponse.statusText,
        headers: appScriptResponse.headers // Copy original headers
    });

    // Set/Override CORS headers on the actual response
    for (const key in corsHeaders) {
        response.headers.set(key, corsHeaders[key]);
    }
    
    // Ensure Content-Type from Apps Script is preserved or set if missing
    if (!response.headers.has('Content-Type')) {
        response.headers.set('Content-Type', 'application/json');
    }

    return response
  } catch (error) {
    console.error('Error forwarding request to Google Apps Script:', error.toString(), error.stack)
    const errorResponse = new Response('Internal Server Error: Unable to process the request.', { 
        status: 500,
        headers: corsHeaders // Also apply CORS headers to error responses
    })
    // Ensure Content-Type for error response
    errorResponse.headers.set('Content-Type', 'application/json');
    return errorResponse;
  }
}
