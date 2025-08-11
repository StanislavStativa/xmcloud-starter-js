import type React from 'react';
import { useSitecore } from '@sitecore-content-sdk/nextjs';
import type { GlobalHeaderProps } from './global-header.props';
import { GlobalHeaderDefault } from './GlobalHeaderDefault.dev';
import { GlobalHeaderCentered } from './GlobalHeaderCentered.dev';
// Data source checks are done in the child components

// Default display of the component
export const Default: React.FC<GlobalHeaderProps> = (props) => {
  const { pageContext } = useSitecore();
  const isEditing = pageContext.pageEditing;

  return <GlobalHeaderDefault {...props} isPageEditing={isEditing || false} />;
};

// Variants
export const Centered: React.FC<GlobalHeaderProps> = (props) => {
  const { pageContext } = useSitecore();
  const isEditing = pageContext.pageEditing;

  return <GlobalHeaderCentered {...props} isPageEditing={isEditing || false} />;
};
