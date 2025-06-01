'use client'

/**
 * Utility function to get the correct base path for assets
 * In development, basePath is empty
 * In production with static export, basePath is '/builtit-template'
 */
export const getBasePath = () => {
  const isDev = process.env.NODE_ENV === 'development'
  return isDev ? '' : '/builtit-template'
}
