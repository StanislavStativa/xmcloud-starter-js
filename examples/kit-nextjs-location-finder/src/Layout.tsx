/**
 * This Layout is needed for Starter Kit.
 */
import React, { type JSX } from 'react';
import Head from 'next/head';
import {
  Placeholder,
  Field,
  DesignLibrary,
  ImageField,
  LayoutServiceData,
  RenderingType,
} from '@sitecore-content-sdk/nextjs';
import Scripts from 'src/Scripts';
import SitecoreStyles from 'components/content-sdk/SitecoreStyles';
import { Roboto, Sora } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider/theme-provider.dev';
import { VideoProvider } from './contexts/VideoContext';

const heading = Sora({
  weight: ['300', '400', '500'],
  variable: '--font-heading',
  subsets: ['latin', 'latin-ext'],
  display: 'swap',
});

const body = Roboto({
  weight: ['400', '500'],
  variable: '--font-body',
  subsets: ['latin', 'latin-ext'],
  display: 'swap',
});
interface LayoutProps {
  layoutData: LayoutServiceData;
}

interface RouteFields {
  [key: string]: unknown;
  Title?: Field;
  metadataTitle?: Field;
  metadataKeywords?: Field;
  pageTitle?: Field;
  metadataDescription?: Field;
  pageSummary?: Field;
  ogTitle?: Field;
  ogDescription?: Field;
  ogImage?: ImageField;
  thumbnailImage?: ImageField;
}

const Layout = ({ layoutData }: LayoutProps): JSX.Element => {
  const { route } = layoutData.sitecore;
  const fields = route?.fields as RouteFields;
  const mainClassPageEditing = layoutData.sitecore.context.pageEditing
    ? 'editing-mode'
    : 'prod-mode';
  const classNamesMain = `${mainClassPageEditing} ${body.variable} ${heading.variable} main-layout`;

  const metaTitle =
    fields?.metadataTitle?.value?.toString() || fields?.pageTitle?.value?.toString() || 'Page';
  const metaDescription =
    fields?.metadataDescription?.value?.toString() || fields?.pageSummary?.value?.toString() || '';
  const metaKeywords = fields?.metadataKeywords?.value?.toString() || '';
  const ogTitle =
    fields?.ogTitle?.value?.toString() ||
    fields?.metadataTitle?.value?.toString() ||
    fields?.pageTitle?.value?.toString() ||
    'Page';
  const ogImage = fields?.ogImage?.value?.src || fields?.thumbnailImage?.value?.src;
  const ogDescription =
    fields?.ogDescription?.value?.toString() ||
    fields?.metadataDescription?.value?.toString() ||
    fields?.pageSummary?.value?.toString() ||
    '';
  return (
    <>
      <Scripts />
      <SitecoreStyles layoutData={layoutData} />
      <Head>
        <link rel="preconnect" href="https://edge-platform.sitecorecloud.io" />
        <title>{metaTitle}</title>
        {metaDescription && <meta name="description" content={metaDescription} />}
        {metaKeywords && <meta name="keywords" content={metaKeywords} />}
        <link rel="icon" href="/favicon.ico" />
        {ogTitle && <meta property="og:title" content={ogTitle} />}
        {ogDescription && <meta property="og:description " content={ogDescription} />}
        {ogImage && <meta property="og:image " content={ogImage} />}
      </Head>
      <VideoProvider>
        {/* root placeholder for the app, which we add components to using route data */}
        <ThemeProvider attribute="class" disableTransitionOnChange>
          <div className={`min-h-screen flex flex-col ${classNamesMain}`}>
            {layoutData.sitecore.context.renderingType === RenderingType.Component ? (
              <DesignLibrary {...layoutData} />
            ) : (
              <>
                <header>
                  <div id="header">
                    {route && <Placeholder name="headless-header" rendering={route} />}
                  </div>
                </header>
                <main>
                  <div id="content">
                    {route && <Placeholder name="headless-main" rendering={route} />}
                  </div>
                </main>
                <footer>
                  <div id="footer">
                    {route && <Placeholder name="headless-footer" rendering={route} />}
                  </div>
                </footer>
              </>
            )}
          </div>
        </ThemeProvider>
      </VideoProvider>
    </>
  );
};

export default Layout;
