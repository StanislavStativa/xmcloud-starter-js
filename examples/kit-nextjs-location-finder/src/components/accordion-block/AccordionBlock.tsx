import type React from 'react';
import { useSitecore } from '@sitecore-content-sdk/nextjs';
import type { AccordionProps } from './accordion-block.props';
import { AccordionBlockDefault } from './AccordionBlockDefault.dev';
import { AccordionBlockCentered } from './AccordionBlockCentered.dev';
import { Accordion5050TitleAbove } from './Accordion5050TitleAbove.dev';
import { AccordionBlockTwoColumnTitleLeft } from './AccordionBlockTwoColumnTitleLeft.dev';
import { AccordionBlockOneColumnTitleLeft } from './AccordionBlockOneColumnTitleLeft.dev';

// Data source checks are done in the child components

// Default display of the component
export const Default: React.FC<AccordionProps> = (props) => {
  const { pageContext } = useSitecore();
  const isEditing = pageContext.pageEditing;

  return <AccordionBlockDefault {...props} isPageEditing={isEditing} />;
};

// Variants
export const Centered: React.FC<AccordionProps> = (props) => {
  const { pageContext } = useSitecore();
  const isEditing = pageContext.pageEditing;

  return <AccordionBlockCentered {...props} isPageEditing={isEditing} />;
};

export const FiftyFiftyTitleAbove: React.FC<AccordionProps> = (props) => {
  const { pageContext } = useSitecore();
  const isEditing = pageContext.pageEditing;

  return <Accordion5050TitleAbove {...props} isPageEditing={isEditing} />;
};

export const TwoColumnTitleLeft: React.FC<AccordionProps> = (props) => {
  const { pageContext } = useSitecore();
  const isEditing = pageContext.pageEditing;

  return <AccordionBlockTwoColumnTitleLeft {...props} isPageEditing={isEditing} />;
};

export const OneColumnTitleLeft: React.FC<AccordionProps> = (props) => {
  const { pageContext } = useSitecore();
  const isEditing = pageContext.pageEditing;

  return <AccordionBlockOneColumnTitleLeft {...props} isPageEditing={isEditing} />;
};
