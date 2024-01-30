// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable @typescript-eslint/no-unused-expressions */
// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable @typescript-eslint/no-use-before-define */
import * as React from 'react';
// import { useRouter } from 'next/router';
import { useMountEffect } from 'primereact/hooks';
import { classNames } from 'primereact/utils';
import { useContext } from 'react';
import PrimeReact from 'primereact/api';
import AppTopbar from '@app/components/topbar';
import AppSidebar from '@app/components/appsidebar';
import { ChildContainerProps } from './types/types';
import { LayoutContext } from './layout/context/layoutcontext';

const Layout = ({ children }: ChildContainerProps) => {
  // @ts-ignore
  const { layoutConfig, layoutState } = useContext(LayoutContext);
  const sidebarRef = React.useRef<HTMLDivElement>(null);

  useMountEffect(() => {
    PrimeReact.ripple = true;
  });
  const containerClass = classNames('layout-wrapper', {
    'layout-overlay': layoutConfig.menuMode === 'overlay',
    'layout-static': layoutConfig.menuMode === 'static',
    'layout-static-inactive':
      layoutState.staticMenuDesktopInactive &&
      layoutConfig.menuMode === 'static',
    'layout-overlay-active': layoutState.overlayMenuActive,
    'layout-mobile-active': layoutState.staticMenuMobileActive,
    'p-input-filled': layoutConfig.inputStyle === 'filled',
    'p-ripple-disabled': !layoutConfig.ripple,
  });

  const backgroundColorStyle = {
    backgroundColor: '#f8f9fb',
  };

  return (
    <React.Fragment>
      {/* <Head>
                <title>Sakai by PrimeReact | Free Admin Template for NextJS</title>
                <meta charSet="UTF-8" />
                <meta name="description" content="The ultimate collection of design-agnostic, flexible and accessible React UI Components." />
                <meta name="robots" content="index, follow" />
                <meta name="viewport" content="initial-scale=1, width=device-width" />
                <meta property="og:type" content="website"></meta>
                <meta property="og:title" content="Sakai by PrimeReact | Free Admin Template for NextJS"></meta>
                <meta property="og:url" content="https://www.primefaces.org/sakai-react"></meta>
                <meta property="og:description" content="The ultimate collection of design-agnostic, flexible and accessible React UI Components." />
                <meta property="og:image" content="https://www.primefaces.org/static/social/sakai-nextjs.png"></meta>
                <meta property="og:ttl" content="604800"></meta>
                <link rel="icon" href={`/favicon.ico`} type="image/x-icon"></link>
            </Head> */}

      <div className={containerClass} style={backgroundColorStyle}>
        <div
          className="container"
          style={{ width: 'calc(100% - 300px)', float: 'right' }}
        >
          <AppTopbar />
        </div>
        <div ref={sidebarRef} className="layout-sidebar">
          <AppSidebar />
        </div>
        <div className="layout-main-container mt-7 md:mt-0">
          <div className="layout-main">{children}</div>
        </div>
        <div className="layout-mask"></div>
      </div>
    </React.Fragment>
  );
};

export default Layout;
