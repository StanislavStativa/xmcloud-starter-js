import React from 'react';
import { useSitecore } from '@sitecore-content-sdk/nextjs';

import { LocationSearchProps } from './location-search.props';
import { LocationSearchDefault } from './LocationSearchDefault.dev';
import { LocationSearchMapRight } from './LocationSearchMapRight.dev';
import { LocationSearchMapTopAllCentered } from './LocationSearchMapTopAllCentered.dev';
import { LocationSearchMapRightTitleZipCentered } from './LocationSearchMapRightTitleZipCentered.dev';
import { LocationSearchTitleZipCentered } from './LocationSearchTitleZipCentered.dev';

// Default display of the component

export const Default: React.FC<LocationSearchProps> = (props) => {
const { pageContext } = useSitecore();
  const isPageEditing = pageContext.pageEditing;
  return <LocationSearchDefault {...props} isPageEditing={isPageEditing} />;
};
export const MapRight: React.FC<LocationSearchProps> = (props) => {
const { pageContext } = useSitecore();
  const isPageEditing = pageContext.pageEditing;
  return <LocationSearchMapRight {...props} isPageEditing={isPageEditing} />;
};
export const MapTopAllCentered: React.FC<LocationSearchProps> = (props) => {
const { pageContext } = useSitecore();
  const isPageEditing = pageContext.pageEditing;
  return <LocationSearchMapTopAllCentered {...props} isPageEditing={isPageEditing} />;
};
export const MapRightTitleZipCentered: React.FC<LocationSearchProps> = (props) => {
const { pageContext } = useSitecore();
  const isPageEditing = pageContext.pageEditing;
  return <LocationSearchMapRightTitleZipCentered {...props} isPageEditing={isPageEditing} />;
};
export const MapLeftTitleZipCentered: React.FC<LocationSearchProps> = (props) => {
const { pageContext } = useSitecore();
  const isPageEditing = pageContext.pageEditing;
  return <LocationSearchTitleZipCentered {...props} isPageEditing={isPageEditing} />;
};
