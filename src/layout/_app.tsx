// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable react/prop-types */
import * as React from 'react';
import Layout from '@app/App';
import { LayoutProvider } from './context/layoutcontext';
import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';
import 'primeicons/primeicons.css';
// import '../../styles/layout/layout.scss';
import '../styles/layout/layout.scss';
// @ts-ignore
export default function MyApp({ Component, pageProps }) {
  if (Component.getLayout) {
    return (
      <LayoutProvider>
        {Component.getLayout(<Component {...pageProps} />)}
      </LayoutProvider>
    );
  }
  return (
    <LayoutProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </LayoutProvider>
  );
}
