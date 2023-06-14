/// <reference types="node" />
import type { __ApiPreviewProps } from 'next/dist/server/api-utilsrver/api-utils';
import type { CustomRoutes } from 'next/dist/lib/load-custom-routesutes';
import type { FindComponentsResult } from 'next/dist/server/next-serverer/next-server';
import type { LoadComponentsReturnType } from 'next/dist/server/load-componentsoad-components';
import type { Options as ServerOptions } from 'next/dist/server/next-serverer/next-server';
import type { Params } from 'next/dist/shared/lib/router/utils/route-matchercher';
import type { ParsedUrl } from 'next/dist/shared/lib/router/utils/parse-url-url';
import type { ParsedUrlQuery } from 'querystring';
import type { Server as HTTPServer } from 'http';
import type { UrlWithParsedQuery } from 'url';
import type { BaseNextRequest, BaseNextResponse } from 'next/dist/server/base-httprver/base-http';
import type { RoutingItem } from 'next/dist/server/base-serverer/base-server';
import Server from 'next/dist/server/next-serverer/next-server';
import { NodeNextResponse, NodeNextRequest } from 'next/dist/server/base-http/nodebase-http/node';
export interface Options extends ServerOptions {
    /**
     * The HTTP Server that Next.js is running behind
     */
    httpServer?: HTTPServer;
    /**
     * Tells of Next.js is running from the `next dev` command
     */
    isNextDevCommand?: boolean;
}
export default class DevServer extends Server {
    private devReady;
    private setDevReady?;
    private webpackWatcher?;
    private hotReloader?;
    private isCustomServer;
    protected sortedRoutes?: string[];
    private addedUpgradeListener;
    private pagesDir;
    private appDir?;
    private actualMiddlewareFile?;
    /**
     * Since the dev server is stateful and middleware routes can be added and
     * removed over time, we need to keep a list of all of the middleware
     * routing items to be returned in `getMiddleware()`
     */
    private middleware?;
    private edgeFunctions?;
    protected staticPathsWorker?: {
        [key: string]: any;
    } & {
        loadStaticPaths: typeof import('next/dist/server/dev/static-paths-workerstatic-paths-worker').loadStaticPaths;
    };
    private getStaticPathsWorker;
    constructor(options: Options);
    protected getBuildId(): string;
    addExportPathMapRoutes(): Promise<void>;
    startWatcher(): Promise<void>;
    stopWatcher(): Promise<void>;
    prepare(): Promise<void>;
    protected close(): Promise<void>;
    protected hasPage(pathname: string): Promise<boolean>;
    protected _beforeCatchAllRender(req: BaseNextRequest, res: BaseNextResponse, params: Params, parsedUrl: UrlWithParsedQuery): Promise<boolean>;
    private setupWebSocketHandler;
    runMiddleware(params: {
        request: BaseNextRequest;
        response: BaseNextResponse;
        parsedUrl: ParsedUrl;
        parsed: UrlWithParsedQuery;
    }): Promise<import("next/dist/server/web/typesrver/web/types").FetchEventResult | {
        finished: boolean;
    }>;
    runEdgeFunction(params: {
        req: BaseNextRequest;
        res: BaseNextResponse;
        query: ParsedUrlQuery;
        params: Params | undefined;
        page: string;
    }): Promise<import("next/dist/server/web/typesrver/web/types").FetchEventResult | null>;
    run(req: NodeNextRequest, res: NodeNextResponse, parsedUrl: UrlWithParsedQuery): Promise<void>;
    private logErrorWithOriginalStack;
    protected getCustomRoutes(): CustomRoutes;
    private _devCachedPreviewProps;
    protected getPreviewProps(): __ApiPreviewProps;
    protected getPagesManifest(): undefined;
    protected getAppPathsManifest(): undefined;
    protected getMiddleware(): RoutingItem[];
    protected getEdgeFunctions(): RoutingItem[];
    protected getServerComponentManifest(): undefined;
    protected hasMiddleware(pathname: string, isSSR?: boolean): Promise<boolean>;
    protected ensureMiddleware(pathname: string, isSSR?: boolean): Promise<any>;
    generateRoutes(): {
        headers: import("next/dist/server/router/server/router").Route[];
        rewrites: {
            beforeFiles: import("next/dist/server/router/server/router").Route[];
            afterFiles: import("next/dist/server/router/server/router").Route[];
            fallback: import("next/dist/server/router/server/router").Route[];
        };
        redirects: import("next/dist/server/router/server/router").Route[];
        catchAllRoute: import("next/dist/server/router/server/router").Route;
        catchAllMiddleware: import("next/dist/server/router/server/router").Route[];
        pageChecker: import("next/dist/server/router/server/router").PageChecker;
        useFileSystemPublicRoutes: boolean;
        dynamicRoutes: import("next/dist/server/router/server/router").DynamicRoutes | undefined;
        nextConfig: import("next/dist/server/config-shared/config-shared").NextConfig;
        fsRoutes: import("next/dist/server/router/server/router").Route[];
    };
    protected generatePublicRoutes(): never[];
    protected getDynamicRoutes(): never[];
    _filterAmpDevelopmentScript(html: string, event: {
        line: number;
        col: number;
        code: string;
    }): boolean;
    protected getStaticPaths(pathname: string): Promise<{
        staticPaths: string[] | undefined;
        fallbackMode: false | 'static' | 'blocking';
    }>;
    protected ensureApiPage(pathname: string): Promise<any>;
    protected findPageComponents(pathname: string, query?: ParsedUrlQuery, params?: Params | null): Promise<FindComponentsResult | null>;
    protected getFallbackErrorComponents(): Promise<LoadComponentsReturnType | null>;
    protected setImmutableAssetCacheControl(res: BaseNextResponse): void;
    private servePublic;
    hasPublicFile(path: string): Promise<boolean>;
    getCompilationError(page: string): Promise<any>;
    protected isServeableUrl(untrustedFileUrl: string): boolean;
}