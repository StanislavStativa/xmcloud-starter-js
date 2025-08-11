import React from 'react';
import { useSitecore } from '@sitecore-content-sdk/nextjs';
import { SubmissionFormProps } from './submission-form.props';
import { SubmissionFormDefault } from './SubmissionFormDefault.dev';
import { SubmissionFormCentered } from './SubmissionFormCentered.dev';

// Data source checks are done in the child components
// Default display of the component

export const Default: React.FC<SubmissionFormProps> = (props) => {
  const { pageContext } = useSitecore();
  const isPageEditing = pageContext.mode === 'editing';

  return <SubmissionFormDefault {...props} isPageEditing={isPageEditing} />;
};

// Variants
export const Centered: React.FC<SubmissionFormProps> = (props) => {
  const { pageContext } = useSitecore();
  const isPageEditing = pageContext.mode === 'editing';

  return <SubmissionFormCentered {...props} isPageEditing={isPageEditing} />;
};
