/**
 * Utility function to generate a dot grid pattern as PNG
 * This can be used to create a downloadable PNG version of the dot grid
 */
export const generateDotGridPNG = (size: number = 400): string => {
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');
  
  if (!ctx) return '';
  
  // Set canvas size
  canvas.width = size;
  canvas.height = size;
  
  // Fill background with white
  ctx.fillStyle = '#FFFFFF';
  ctx.fillRect(0, 0, size, size);
  
  // Set dot properties
  ctx.fillStyle = '#F5F5F5';
  ctx.globalAlpha = 0.18;
  
  // Draw dots in 20px grid
  const spacing = 20;
  const dotRadius = 1;
  
  for (let x = 10; x < size; x += spacing) {
    for (let y = 10; y < size; y += spacing) {
      ctx.beginPath();
      ctx.arc(x, y, dotRadius, 0, 2 * Math.PI);
      ctx.fill();
    }
  }
  
  // Return as data URL
  return canvas.toDataURL('image/png');
};

/**
 * Download the dot grid pattern as PNG
 */
export const downloadDotGridPNG = (filename: string = 'dot-grid-pattern.png') => {
  const dataUrl = generateDotGridPNG(400);
  const link = document.createElement('a');
  link.download = filename;
  link.href = dataUrl;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};