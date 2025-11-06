// Utility functions for URL generation and parameter handling

export const generateProductUrl = (category: string, productName: string): string => {
  const categorySlug = category.toLowerCase().replace(/\s+/g, '-');
  const productSlug = productName
    .toLowerCase()
    .replace(/[™®©]/g, '')
    .replace(/\s+/g, '-')
    .replace(/[()]/g, '')
    .replace(/--+/g, '-')
    .replace(/^-|-$/g, '');
  
  return `/products/${categorySlug}/${productSlug}`;
};

export const generateCategoryUrl = (category: string): string => {
  const categorySlug = category.toLowerCase().replace(/\s+/g, '-');
  return `/products/${categorySlug}`;
};

export const parseProductUrl = (category: string, productName: string) => {
  return {
    category: category.replace(/-/g, ' '),
    productName: productName.replace(/-/g, ' ')
  };
};

// Map category links to display names
export const categoryDisplayNames: Record<string, string> = {
  'phosphite-range': 'The Ilex Phosphite Range',
  'foliar-nutrients': 'The Ilex Foliar Nutrient Range', 
  'calcium-range': 'Calcium Supplements',
  'biostimulants': 'Biostimulants',
  'seed-treatments': 'Seed Treatments',
  'organic-range': 'The Ilex Organic Range'
};
