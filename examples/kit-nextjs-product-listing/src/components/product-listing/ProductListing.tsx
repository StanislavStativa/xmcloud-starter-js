import type React from 'react';
import { useSitecore } from '@sitecore-content-sdk/nextjs';
import type { ProductListingProps } from './product-listing.props';
import { ProductListingDefault } from './ProductListingDefault.dev';
import { ProductListingThreeUp } from './ProductListingThreeUp.dev';
import { ProductListingSlider } from './ProductListingSlider.dev';

// Data source checks are done in the child components

// Default display of the component
export const Default: React.FC<ProductListingProps> = (props) => {
  const { pageContext } = useSitecore();
  const isPageEditing = pageContext.pageEditing || false;
  return <ProductListingDefault {...props} isPageEditing={isPageEditing} />;
};

// Variants
export const ThreeUp: React.FC<ProductListingProps> = (props) => {
  const { pageContext } = useSitecore();
  const isPageEditing = pageContext.pageEditing || false;
  return <ProductListingThreeUp {...props} isPageEditing={isPageEditing} />;
};

// Variants
export const Slider: React.FC<ProductListingProps> = (props) => {
  const { pageContext } = useSitecore();
  const isPageEditing = pageContext.pageEditing || false;
  return <ProductListingSlider {...props} isPageEditing={isPageEditing} />;
};
