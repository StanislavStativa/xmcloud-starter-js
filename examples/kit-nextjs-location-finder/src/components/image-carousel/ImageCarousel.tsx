import type React from 'react';
import { useSitecore } from '@sitecore-content-sdk/nextjs';
import type { ImageCarouselProps } from './image-carousel.props';
import { ImageCarouselDefault } from './ImageCarouselDefault.dev';
import { ImageCarouselLeftRightPreview } from './ImageCarouselLeftRightPreview.dev';
import { ImageCarouselFullBleed } from './ImageCarouselFullBleed.dev';
import { ImageCarouselPreviewBelow } from './ImageCarouselPreviewBelow.dev';
import { ImageCarouselFeaturedImageLeft } from './ImageCarouselFeaturedImageLeft.dev';

// Data source checks are done in the child components

// Default display of the component
export const Default: React.FC<ImageCarouselProps> = (props) => {
  const { pageContext } = useSitecore();
  const isEditing = pageContext.pageEditing || false;
  return <ImageCarouselDefault {...props} isPageEditing={isEditing} />;
};

// Variants
export const LeftRightPreview: React.FC<ImageCarouselProps> = (props) => {
  const { pageContext } = useSitecore();
  const isEditing = pageContext.pageEditing || false;
  return <ImageCarouselLeftRightPreview {...props} isPageEditing={isEditing} />;
};

export const FullBleed: React.FC<ImageCarouselProps> = (props) => {
  const { pageContext } = useSitecore();
  const isEditing = pageContext.pageEditing || false;
  return <ImageCarouselFullBleed {...props} isPageEditing={isEditing} />;
};

export const PreviewBelow: React.FC<ImageCarouselProps> = (props) => {
  const { pageContext } = useSitecore();
  const isEditing = pageContext.pageEditing || false;
  return <ImageCarouselPreviewBelow {...props} isPageEditing={isEditing} />;
};

export const FeaturedImageLeft: React.FC<ImageCarouselProps> = (props) => {
  const { pageContext } = useSitecore();
  const isEditing = pageContext.pageEditing || false;
  return <ImageCarouselFeaturedImageLeft {...props} isPageEditing={isEditing} />;
};
