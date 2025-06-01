// --- MODIFIED SCRIPT - V5 (Anonymized for Open Source) ---
// This script handles POST requests from your contact form, writes to a Google Sheet, and sends a notification email.
// BEFORE USING: Replace the placeholder values below with your own Spreadsheet ID, Sheet Name, and Email address.

/**
 * === OPEN SOURCE PLACEHOLDERS ===
 * Replace these with your actual values before deploying:
 * - SPREADSHEET_ID: Your Google Sheet's ID (from the URL)
 * - SHEET_NAME: The name of your sheet/tab
 * - EMAIL_RECIPIENT: Your email address for notifications
 */
const SPREADSHEET_ID = 'YOUR_SPREADSHEET_ID_HERE'; // <-- Replace with your Google Sheet ID
const SHEET_NAME = 'YOUR_SHEET_NAME_HERE'; // <-- Replace with your Sheet name
const EMAIL_RECIPIENT = 'your@email.com'; // <-- Replace with your email address

function doPost(e) {
  var appsScriptTimestamp = new Date().toISOString();
  console.log('MODIFIED_V5 - doPost CALLED at: ' + appsScriptTimestamp);

  // --- 1. Receive and Log Raw Data ---
  if (!e || !e.postData || typeof e.postData.contents === 'undefined') {
    console.error('MODIFIED_V5 - Initial check failed: e, e.postData, or e.postData.contents is missing.');
    return ContentService
      .createTextOutput(JSON.stringify({ status: 'error', message: 'Apps Script Error: Critical data missing in request.' }))
      .setMimeType(ContentService.MimeType.JSON);
  }
  var rawData = e.postData.contents;
  console.log('MODIFIED_V5 - Received raw e.postData.contents: ' + rawData);

  // --- 2. Parse JSON Data ---
  var data;
  try {
    data = JSON.parse(rawData);
    console.log('MODIFIED_V5 - Successfully parsed JSON data:', JSON.stringify(data));
  } catch (jsonError) {
    console.error('MODIFIED_V5 - Error parsing JSON: ' + jsonError.toString());
    console.error('MODIFIED_V5 - Raw data that failed parsing: ' + rawData);
    return ContentService
      .createTextOutput(JSON.stringify({ status: 'error', message: 'Apps Script Error: Could not parse incoming JSON data. ' + jsonError.toString(), received_raw_data: rawData }))
      .setMimeType(ContentService.MimeType.JSON);
  }

  // --- 3. Destructure and Validate Required Fields ---
  var name = data.name;
  var email = data.email;
  var company = data.company;
  var budget = data.budget;
  var message = data.message;
  var source = data.source;
  var formTimestamp = data.timestamp; // Timestamp from the form

  if (!name || !email || !budget || !message) {
    console.error('MODIFIED_V5 - Missing required fields. Name: ' + name + ', Email: ' + email + ', Budget: ' + budget + ', Message: ' + message);
    return ContentService
      .createTextOutput(JSON.stringify({ status: 'error', message: 'Missing required fields: name, email, budget, or message.' }))
      .setMimeType(ContentService.MimeType.JSON);
  }
  console.log('MODIFIED_V5 - All required fields are present.');

  // --- 4. SPREADSHEET WRITING ---
  var sheetError;
  try {
    console.log('MODIFIED_V5 - Attempting to open Spreadsheet by ID: ' + SPREADSHEET_ID);
    var ss = SpreadsheetApp.openById(SPREADSHEET_ID);
    console.log('MODIFIED_V5 - Spreadsheet opened. Attempting to get sheet by name: ' + SHEET_NAME);
    var sheet = ss.getSheetByName(SHEET_NAME);

    if (!sheet) {
      console.log('MODIFIED_V5 - Sheet "' + SHEET_NAME + '" not found. Creating it.');
      sheet = ss.insertSheet(SHEET_NAME);
      sheet.appendRow(['Timestamp', 'Name', 'Email', 'Company', 'Budget', 'Message', 'Source', 'Form_Timestamp']);
      console.log('MODIFIED_V5 - New sheet created and headers added.');
    } else {
      console.log('MODIFIED_V5 - Sheet "' + SHEET_NAME + '" found.');
    }

    var rowData = [
      appsScriptTimestamp,
      name,
      email,
      company || 'N/A',
      budget,
      message,
      source || 'contact-page',
      formTimestamp || appsScriptTimestamp
    ];
    console.log('MODIFIED_V5 - Appending row: ' + JSON.stringify(rowData));
    sheet.appendRow(rowData);
    console.log('MODIFIED_V5 - Row appended to sheet successfully.');

  } catch (err) {
    sheetError = err;
    console.error('MODIFIED_V5 - Error during spreadsheet operation: ' + err.toString() + " Stack: " + err.stack);
    // Will continue to email sending, but final response will indicate partial success if needed.
  }

  // --- 5. SEND NOTIFICATION EMAIL ---
  var emailSentSuccessfully = false;
  try {
    var subject = `New Contact Form Submission from ${name}`;
    var htmlBody = `
      <h3>New Contact Form Submission</h3>
      <p><strong>Form Timestamp:</strong> ${formTimestamp || 'Not provided by form, script time: ' + appsScriptTimestamp}</p>
      <p><strong>Name:</strong> ${name || 'N/A'}</p>
      <p><strong>Email:</strong> ${email || 'N/A'}</p>
      <p><strong>Company:</strong> ${company || 'N/A'}</p>
      <p><strong>Budget:</strong> ${budget || 'N/A'}</p>
      <p><strong>Message:</strong><br>${message ? message.replace(/\n/g, '<br>') : 'N/A'}</p>
      <p><strong>Source:</strong> ${source || 'N/A'}</p>
    `;
    console.log('MODIFIED_V5 - Attempting to send email to: ' + EMAIL_RECIPIENT);
    MailApp.sendEmail({
      to: EMAIL_RECIPIENT,
      subject: subject,
      htmlBody: htmlBody
    });
    emailSentSuccessfully = true;
    console.log('MODIFIED_V5 - Email sent successfully.');

  } catch (emailError) {
    console.error('MODIFIED_V5 - Error sending email: ' + emailError.toString() + " Stack: " + emailError.stack);
    // emailSentSuccessfully remains false
  }

  // --- 6. RESPOND WITH SUCCESS/PARTIAL SUCCESS/FAILURE ---
  var finalStatus = 'success';
  var finalMessage = 'MODIFIED_V5: Form data processed. Sheet updated. Email sent.';

  if (typeof sheetError !== 'undefined' && !emailSentSuccessfully) {
    finalStatus = 'error';
    finalMessage = 'MODIFIED_V5: FAILED to write to sheet AND FAILED to send email.';
  } else if (typeof sheetError !== 'undefined') {
    finalStatus = 'partial_success';
    finalMessage = 'MODIFIED_V5: FAILED to write to sheet, but email sent (if attempted).';
  } else if (!emailSentSuccessfully) {
    finalStatus = 'partial_success';
    finalMessage = 'MODIFIED_V5: Data written to sheet, but FAILED to send email.';
  }

  console.log('MODIFIED_V5 - Final response: status=' + finalStatus + ', message=' + finalMessage);
  return ContentService
    .createTextOutput(JSON.stringify({ status: finalStatus, message: finalMessage, name_processed: name }))
    .setMimeType(ContentService.MimeType.JSON);
}

function doGet(e) {
  console.log('MODIFIED_V5 - doGet CALLED at: ' + new Date().toISOString());
  return ContentService
    .createTextOutput('MODIFIED_V5 Endpoint is ALIVE. Use POST to submit data.')
    .setMimeType(ContentService.MimeType.TEXT);
}
// --- End of MODIFIED SCRIPT - V5 (Anonymized for Open Source) ---
