export function getAssetPath(path: string): string {
  if (!path) return '';
  if (
    path.startsWith('http://') || 
    path.startsWith('https://') || 
    path.startsWith('data:') || 
    path.startsWith('blob:')
  ) {
    return path;
  }
  
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || (process.env.NODE_ENV === 'production' ? '/clapsa' : '');
  if (basePath && path.startsWith('/') && !path.startsWith(basePath)) {
    return `${basePath}${path}`;
  }
  return path;
}
