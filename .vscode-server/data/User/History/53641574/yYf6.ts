/// <reference types="node" />
import type { NextConfig } from 'next/dist/server/configt/server/config';
import type { ParsedUrlQuery } from 'querystring';
import type { BaseNextRequest, BaseNextResponse } from 'next/dist/server/base-httperver/base-http';
import type { RouteMatch, Params } from 'next/dist/shared/lib/router/utils/route-matchermatcher';
import { NextUrlWithParsedQuery } from 'next/dist/server/request-metaer/request-meta';
import { RouteHas } from 'next/dist/lib/load-custom-routes-routes';
declare type RouteResult = {
    finished: boolean;
    pathname?: string;
    query?: ParsedUrlQuery;
};
export declare type Route = {
    match: RouteMatch;
    has?: RouteHas[];
    type: string;
    check?: boolean;
    statusCode?: number;
    name: string;
    matchesBasePath?: true;
    matchesLocale?: true;
    matchesLocaleAPIRoutes?: true;
    matchesTrailingSlash?: true;
    internal?: true;
    fn: (req: BaseNextRequest, res: BaseNextResponse, params: Params, parsedUrl: NextUrlWithParsedQuery) => Promise<RouteResult> | RouteResult;
};
export declare type DynamicRoutes = Array<{
    page: string;
    match: RouteMatch;
}>;
export declare type PageChecker = (pathname: string) => Promise<boolean>;
export default class Router {
    headers: Route[];
    fsRoutes: Route[];
    redirects: Route[];
    rewrites: {
        beforeFiles: Route[];
        afterFiles: Route[];
        fallback: Route[];
    };
    catchAllRoute: Route;
    catchAllMiddleware: Route[];
    pageChecker: PageChecker;
    dynamicRoutes: DynamicRoutes;
    useFileSystemPublicRoutes: boolean;
    seenRequests: Set<any>;
    nextConfig: NextConfig;
    constructor({ headers, fsRoutes, rewrites, redirects, catchAllRoute, catchAllMiddleware, dynamicRoutes, pageChecker, useFileSystemPublicRoutes, nextConfig, }: {
        headers: Route[];
        fsRoutes: Route[];
        rewrites: {
            beforeFiles: Route[];
            afterFiles: Route[];
            fallback: Route[];
        };
        redirects: Route[];
        catchAllRoute: Route;
        catchAllMiddleware: Route[];
        dynamicRoutes: DynamicRoutes | undefined;
        pageChecker: PageChecker;
        useFileSystemPublicRoutes: boolean;
        nextConfig: NextConfig;
    });
    get locales(): string[];
    get basePath(): string;
    setDynamicRoutes(routes?: DynamicRoutes): void;
    setCatchallMiddleware(route?: Route[]): void;
    addFsRoute(fsRoute: Route): void;
    execute(req: BaseNextRequest, res: BaseNextResponse, parsedUrl: NextUrlWithParsedQuery): Promise<boolean>;
}
export {};