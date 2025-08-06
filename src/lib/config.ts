// Configuration for GitHub Pages deployment
export const isProd = process.env.NODE_ENV === 'production'
export const basePath = isProd ? '/Portfolio' : ''

// Helper function to get asset path
export const getAssetPath = (path: string) => {
  return isProd ? `/Portfolio${path}` : path
}
