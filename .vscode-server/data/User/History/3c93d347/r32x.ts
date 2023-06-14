/// <reference types="node" />
import type { IncomingMessage, ServerResponse } from 'http';
import type { ParsedUrlQuery } from 'querystring';
import type { DomainLocale } from 'next/dist/server/configt/server/config';
import type { ImageConfigComplete } from 'next/dist/shared/lib/image-config-config';
import type { __ApiPreviewProps } from 'next/dist/server/api-utilserver/api-utils';
import type { FontManifest } from 'next/dist/server/font-utilsrver/font-utils';
import type { LoadComponentsReturnType } from 'next/dist/server/load-componentsload-components';
import type { ServerRuntime } from 'next/dist/server/config-sharedr/config-shared';
import React from 'react';
import { NextParsedUrlQuery } from 'next/dist/server/request-metaer/request-meta';
import RenderResult from 'next/dist/server/render-resultr/render-result';
export declare type RenderOptsPartial = {
    buildId: string;
    canonicalBase: string;
    runtimeConfig?: {
        [key: string]: any;
    };
    assetPrefix?: string;
    err?: Error | null;
    nextExport?: boolean;
    dev?: boolean;
    ampPath?: string;
    ErrorDebug?: React.ComponentType<{
        error: Error;
    }>;
    ampValidator?: (html: string, pathname: string) => Promise<void>;
    ampSkipValidation?: boolean;
    ampOptimizerConfig?: {
        [key: string]: any;
    };
    isDataReq?: boolean;
    params?: ParsedUrlQuery;
    previewProps: __ApiPreviewProps;
    basePath: string;
    unstable_runtimeJS?: false;
    unstable_JsPreload?: false;
    optimizeFonts: boolean;
    fontManifest?: FontManifest;
    optimizeCss: any;
    nextScriptWorkers: any;
    devOnlyCacheBusterQueryString?: string;
    resolvedUrl?: string;
    resolvedAsPath?: string;
    serverComponentManifest?: any;
    distDir?: string;
    locale?: string;
    locales?: string[];
    defaultLocale?: string;
    domainLocales?: DomainLocale[];
    disableOptimizedLoading?: boolean;
    supportsDynamicHTML?: boolean;
    runtime?: ServerRuntime;
    serverComponents?: boolean;
    customServer?: boolean;
    crossOrigin?: string;
    images: ImageConfigComplete;
    largePageDataBytes?: number;
};
export declare type RenderOpts = LoadComponentsReturnType & RenderOptsPartial;
export declare function renderToHTML(req: IncomingMessage, res: ServerResponse, pathname: string, query: NextParsedUrlQuery, renderOpts: RenderOpts): Promise<RenderResult | null>;
