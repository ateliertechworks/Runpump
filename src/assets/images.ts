/**
 * ============================================================
 *  RAN Pump — Central Image Registry
 * ============================================================
 *  Replace any URL below with your local import or a new URL.
 *
 *  HOW TO USE LOCAL FILES:
 *  1. Drop your image into src/assets/  (e.g. src/assets/hero.jpg)
 *  2. Replace the string with an import:
 *       import heroImg from './hero.jpg';
 *       export const IMAGES = { hero: heroImg, ... };
 *
 *  All components import from this file, so changing one value
 *  here updates it everywhere on the site.
 * ============================================================
 */

// ── Logo ──────────────────────────────────────────────────────
import supportFactoryImg from './support_factory_img.png';

export const LOGO_URL =
  'https://media.base44.com/images/public/user_69e7851742160d5097ef0b9a/b4da21ebb_logo.png';

// ── Hero Section ──────────────────────────────────────────────
export const HERO_BG_URL =
  'https://media.base44.com/images/public/user_69e7851742160d5097ef0b9a/7a267b487_Gemini_Generated_Image_m86tkhm86tkhm86t1.png';

// ── Contact Section (left panel background image, optional) ───
export const CONTACT_PANEL_IMG_URL = supportFactoryImg;
// ^ replace with your own factory / field photo

// ── Products In Action Gallery ────────────────────────────────
// Keys match the `location` field in ProductsInAction component
export const IN_ACTION_IMAGES: Record<string, string> = {
  'Paddy Fields, Tamil Nadu':
    'https://images.unsplash.com/photo-1589983098935-56f9d7e0e6f4?w=600&q=80',
  'Sugarcane Farm, Maharashtra':
    'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=600&q=80',
  'Industrial Unit, Gujarat':
    'https://images.unsplash.com/photo-1581092335397-9583eb92d232?w=600&q=80',
  'Solar Project, Rajasthan':
    'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=600&q=80',
  'Construction Site, Karnataka':
    'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80',
  'Banana Plantation, Kerala':
    'https://images.unsplash.com/photo-1571771026420-d27c78dffa80?w=600&q=80',
};

// ── Product Images ─────────────────────────────────────────────
// Keys match product IDs (1–15) defined in data/products.js
// Replace values with local imports or your own hosted URLs.
export const PRODUCT_IMAGES: Record<number, string> = {
  1:  'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=600&q=80',
  2:  'https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?w=600&q=80',
  3:  'https://images.unsplash.com/photo-1563208362-c8b1f75c3f6c?w=600&q=80',
  4:  'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=600&q=80',
  5:  'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=600&q=80',
  6:  'https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=600&q=80',
  7:  'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80',
  8:  'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80',
  9:  'https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=600&q=80',
  10: 'https://images.unsplash.com/photo-1563208723-04ad6bd7074e?w=600&q=80',
  11: 'https://images.unsplash.com/photo-1600132806370-bf17e65e942f?w=600&q=80',
  12: 'https://images.unsplash.com/photo-1614935151651-0bea6508db6b?w=600&q=80',
  13: 'https://images.unsplash.com/photo-1565087248626-1f8ce4d6e9c5?w=600&q=80',
  14: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&q=80',
  15: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=600&q=80',
};