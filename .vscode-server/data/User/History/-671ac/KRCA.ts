/// <reference types="node" />
import 'next/dist/server/node-polyfill-fetch-polyfill-fetch';
import 'next/dist/server/node-polyfill-web-streamsill-web-streams';
import type { Route } from 'next/dist/server/routert/server/router';
import { CacheFs } from 'next/dist/shared/lib/utilsb/utils';
import type { MiddlewareManifest } from 'next/dist/build/webpack/plugins/middleware-plugin-plugin';
import type RenderResult from 'next/dist/server/render-resultr/render-result';
import type { FetchEventResult } from 'next/dist/server/web/typeserver/web/types';
import type { PrerenderManifest } from 'next/dist/buildt/build';
import type { BaseNextRequest, BaseNextResponse } from 'next/dist/server/base-httperver/base-http';
import type { PagesManifest } from 'next/dist/build/webpack/plugins/pages-manifest-plugin-plugin';
import type { PayloadOptions } from 'next/dist/server/send-payloader/send-payload';
import type { NextParsedUrlQuery, NextUrlWithParsedQuery } from 'next/dist/server/request-metaer/request-meta';
import type { Params } from 'next/dist/shared/lib/router/utils/route-matchermatcher';
import { IncomingMessage, ServerResponse } from 'http';
import { UrlWithParsedQuery } from 'url';
import { NodeNextRequest, NodeNextResponse } from 'next/dist/server/base-http/node/base-http/node';
import { ParsedUrlQuery } from 'querystring';
import { RenderOpts } from 'next/dist/server/rendert/server/render';
import { ParsedUrl } from 'next/dist/shared/lib/router/utils/parse-urlrse-url';
import BaseServer, { Options, FindComponentsResult, RoutingItem } from 'next/dist/server/base-serverver/base-server';
import { FontManifest } from 'next/dist/server/font-utilsrver/font-utils';
export * from 'next/dist/server/base-serverver/base-server';
export interface NodeRequestHandler {
    (req: IncomingMessage | BaseNextRequest, res: ServerResponse | BaseNextResponse, parsedUrl?: NextUrlWithParsedQuery | undefined): Promise<void>;
}
export default class NextNodeServer extends BaseServer {
    private imageResponseCache?;
    constructor(options: Options);
    private compression;
    protected loadEnvConfig({ dev }: {
        dev: boolean;
    }): void;
    protected getPublicDir(): string;
    protected getHasStaticDir(): boolean;
    protected getPagesManifest(): PagesManifest | undefined;
    protected getAppPathsManifest(): PagesManifest | undefined;
    protected getBuildId(): string;
    protected generateImageRoutes(): Route[];
    protected generateStaticRoutes(): Route[];
    protected setImmutableAssetCacheControl(res: BaseNextResponse): void;
    protected generateFsStaticRoutes(): Route[];
    protected generatePublicRoutes(): Route[];
    private _validFilesystemPathSet;
    protected getFilesystemPaths(): Set<string>;
    protected sendRenderResult(req: NodeNextRequest, res: NodeNextResponse, options: {
        result: RenderResult;
        type: 'html' | 'json';
        generateEtags: boolean;
        poweredByHeader: boolean;
        options?: PayloadOptions | undefined;
    }): Promise<void>;
    protected sendStatic(req: NodeNextRequest, res: NodeNextResponse, path: string): Promise<void>;
    protected handleCompression(req: NodeNextRequest, res: NodeNextResponse): void;
    protected proxyRequest(req: NodeNextRequest, res: NodeNextResponse, parsedUrl: ParsedUrl): Promise<{
        finished: boolean;
    }>;
    protected runApi(req: BaseNextRequest | NodeNextRequest, res: BaseNextResponse | NodeNextResponse, query: ParsedUrlQuery, params: Params | undefined, page: string, builtPagePath: string): Promise<boolean>;
    protected renderHTML(req: NodeNextRequest, res: NodeNextResponse, pathname: string, query: NextParsedUrlQuery, renderOpts: RenderOpts): Promise<RenderResult | null>;
    protected streamResponseChunk(res: NodeNextResponse, chunk: any): void;
    protected imageOptimizer(req: NodeNextRequest, res: NodeNextResponse, paramsResult: import('next/dist/server/image-optimizerimage-optimizer').ImageParamsResult): Promise<{
        buffer: Buffer;
        contentType: string;
        maxAge: number;
    }>;
    protected getPagePath(pathname: string, locales?: string[]): string;
    protected findPageComponents(pathname: string, query?: NextParsedUrlQuery, params?: Params | null): Promise<FindComponentsResult | null>;
    protected getFontManifest(): FontManifest;
    protected getServerComponentManifest(): any;
    protected getCacheFilesystem(): CacheFs;
    private normalizeReq;
    private normalizeRes;
    getRequestHandler(): NodeRequestHandler;
    render(req: BaseNextRequest | IncomingMessage, res: BaseNextResponse | ServerResponse, pathname: string, query?: NextParsedUrlQuery, parsedUrl?: NextUrlWithParsedQuery, internal?: boolean): Promise<void>;
    renderToHTML(req: BaseNextRequest | IncomingMessage, res: BaseNextResponse | ServerResponse, pathname: string, query?: ParsedUrlQuery): Promise<string | null>;
    renderError(err: Error | null, req: BaseNextRequest | IncomingMessage, res: BaseNextResponse | ServerResponse, pathname: string, query?: NextParsedUrlQuery, setHeaders?: boolean): Promise<void>;
    renderErrorToHTML(err: Error | null, req: BaseNextRequest | IncomingMessage, res: BaseNextResponse | ServerResponse, pathname: string, query?: ParsedUrlQuery): Promise<string | null>;
    render404(req: BaseNextRequest | IncomingMessage, res: BaseNextResponse | ServerResponse, parsedUrl?: NextUrlWithParsedQuery, setHeaders?: boolean): Promise<void>;
    serveStatic(req: BaseNextRequest | IncomingMessage, res: BaseNextResponse | ServerResponse, path: string, parsedUrl?: UrlWithParsedQuery): Promise<void>;
    protected getStaticRoutes(): Route[];
    protected isServeableUrl(untrustedFileUrl: string): boolean;
    protected generateRewrites({ restrictedRedirectPaths, }: {
        restrictedRedirectPaths: string[];
    }): {
        beforeFiles: Route[];
        afterFiles: Route[];
        fallback: Route[];
    };
    protected getMiddlewareManifest(): MiddlewareManifest | null;
    /**
     * Return a list of middleware routing items. This method exists to be later
     * overridden by the development server in order to use a different source
     * to get the list.
     */
    protected getMiddleware(): RoutingItem[];
    protected getEdgeFunctions(): RoutingItem[];
    /**
     * Get information for the edge function located in the provided page
     * folder. If the edge function info can't be found it will throw
     * an error.
     */
    protected getEdgeFunctionInfo(params: {
        page: string;
        /** Whether we should look for a middleware or not */
        middleware: boolean;
    }): {
        name: string;
        paths: string[];
        env: string[];
        wasm: {
            filePath: string;
            name: string;
        }[];
    } | null;
    /**
     * Checks if a middleware exists. This method is useful for the development
     * server where we need to check the filesystem. Here we just check the
     * middleware manifest.
     */
    protected hasMiddleware(pathname: string, _isSSR?: boolean): Promise<boolean>;
    /**
     * A placeholder for a function to be defined in the development server.
     * It will make sure that the middleware has been compiled so that we
     * can run it.
     */
    protected ensureMiddleware(_pathname: string, _isSSR?: boolean): Promise<void>;
    /**
     * This method gets all middleware matchers and execute them when the request
     * matches. It will make sure that each middleware exists and is compiled and
     * ready to be invoked. The development server will decorate it to add warns
     * and errors with rich traces.
     */
    protected runMiddleware(params: {
        request: BaseNextRequest;
        response: BaseNextResponse;
        parsedUrl: ParsedUrl;
        parsed: UrlWithParsedQuery;
        onWarning?: (warning: Error) => void;
    }): Promise<FetchEventResult | {
        finished: boolean;
    }>;
    protected generateCatchAllMiddlewareRoute(devReady?: boolean): Route[];
    private _cachedPreviewManifest;
    protected getPrerenderManifest(): PrerenderManifest;
    protected getRoutesManifest(): any;
    protected runEdgeFunction(params: {
        req: BaseNextRequest | NodeNextRequest;
        res: BaseNextResponse | NodeNextResponse;
        query: ParsedUrlQuery;
        params: Params | undefined;
        page: string;
    }): Promise<FetchEventResult | null>;
}