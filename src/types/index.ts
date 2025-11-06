export interface Product {
  product: string;
  link: string;
  description?: string;
  analysis?: {
    [key: string]: string;
  };
  benefits?: string[];
  applications?: CropApplication[];
  packSizes?: string[];
}

export interface CropApplication {
  name: string;
  rate: string;
  timing: string;
  color: string;
}

export interface MenuItem {
  menu_item: string;
  link: string;
  products?: Product[];
}

export type PageType = 
  | 'home'
  | 'about'
  | 'contact'
  | 'how-to-buy'
  | 'testimonials'
  | 'media'
  | 'regulatory'
  | 'product-guide'
  | 'events'
  | 'phosphite-range'
  | 'foliar-nutrients'
  | 'calcium-range'
  | 'biostimulants'
  | 'seed-treatments'
  | 'water-conditioners'
  | 'organic-range'
  | 'product'
  | string;

export interface NavigationState {
  currentPage: PageType;
  selectedProduct?: Product;
  selectedCategory?: MenuItem;
}