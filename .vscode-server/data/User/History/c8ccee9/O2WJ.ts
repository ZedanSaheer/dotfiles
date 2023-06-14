import type { I18NConfig } from 'next/dist/server/config-sharednfig-shared';
import { NextURL } from 'next/dist/server/web/next-urlerver/web/next-url';
import { NextCookies } from 'next/dist/server/web/spec-extension/cookies/server/web/spec-extension/cookies';
declare const INTERNALS: unique symbol;
export declare class NextResponse extends Response {
    [INTERNALS]: {
        cookies: NextCookies;
        url?: NextURL;
    };
    constructor(body?: BodyInit | null, init?: ResponseInit);
    get cookies(): NextCookies;
    static json(body: any, init?: ResponseInit): NextResponse;
    static redirect(url: string | NextURL | URL, init?: number | ResponseInit): NextResponse;
    static rewrite(destination: string | NextURL | URL, init?: ResponseInit): NextResponse;
    static next(init?: ResponseInit): NextResponse;
}
interface ResponseInit extends globalThis.ResponseInit {
    nextConfig?: {
        basePath?: string;
        i18n?: I18NConfig;
        trailingSlash?: boolean;
    };
    url?: string;
}
export {};
