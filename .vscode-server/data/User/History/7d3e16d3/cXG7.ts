import type { I18NConfig } from 'next/dist/server/config-shared/config-shared';
import type { NextRequest } from 'next/dist/server/web/spec-extension/requestension/request';
import type { NextFetchEvent } from 'next/dist/server/web/spec-extension/fetch-eventon/fetch-event';
import type { NextResponse } from 'next/dist/server/web/spec-extension/response-extension/response';
export interface NodeHeaders {
    [header: string]: string | string[] | undefined;
}
export interface CookieSerializeOptions {
    domain?: string;
    encode?(val: string): string;
    expires?: Date;
    httpOnly?: boolean;
    maxAge?: number;
    path?: string;
    sameSite?: boolean | 'lax' | 'strict' | 'none';
    secure?: boolean;
}
export interface RequestData {
    geo?: {
        city?: string;
        country?: string;
        region?: string;
        latitude?: string;
        longitude?: string;
    };
    headers: NodeHeaders;
    ip?: string;
    method: string;
    nextConfig?: {
        basePath?: string;
        i18n?: I18NConfig | null;
        trailingSlash?: boolean;
    };
    page?: {
        name?: string;
        params?: {
            [key: string]: string;
        };
    };
    url: string;
    body?: ReadableStream<Uint8Array>;
}
export interface FetchEventResult {
    response: Response;
    waitUntil: Promise<any>;
}
export declare type NextMiddlewareResult = NextResponse | Response | null | undefined;
export declare type NextMiddleware = (request: NextRequest, event: NextFetchEvent) => NextMiddlewareResult | Promise<NextMiddlewareResult>;