import type { Header, Redirect, Rewrite, RouteType } from 'next/dist/lib/load-custom-routes-routes';
import type { Route } from 'next/dist/server/routert/server/router';
import type { BaseNextRequest } from 'next/dist/server/base-httperver/base-http';
import type { ParsedUrlQuery } from 'querystring';
export declare function getCustomRoute(params: {
    rule: Header;
    type: RouteType;
    restrictedRedirectPaths: string[];
}): Route & Header;
export declare function getCustomRoute(params: {
    rule: Rewrite;
    type: RouteType;
    restrictedRedirectPaths: string[];
}): Route & Rewrite;
export declare function getCustomRoute(params: {
    rule: Redirect;
    type: RouteType;
    restrictedRedirectPaths: string[];
}): Route & Redirect;
export declare const createHeaderRoute: ({ rule, restrictedRedirectPaths, }: {
    rule: Header;
    restrictedRedirectPaths: string[];
}) => Route;
export declare const createRedirectRoute: ({ rule, restrictedRedirectPaths, }: {
    rule: Redirect;
    restrictedRedirectPaths: string[];
}) => Route;
export declare const stringifyQuery: (req: BaseNextRequest, query: ParsedUrlQuery) => string;
