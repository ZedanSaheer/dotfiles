import type { I18NConfig } from 'next/dist/server/config-sharednfig-shared';
import type { RequestData } from 'next/dist/server/web/typest/server/web/types';
import { NextURL } from 'next/dist/server/web/next-urlerver/web/next-url';
import { NextCookies } from 'next/dist/server/web/spec-extension/cookies/server/web/spec-extension/cookies';
export declare const INTERNALS: unique symbol;
export declare class NextRequest extends Request {
    [INTERNALS]: {
        cookies: NextCookies;
        geo: RequestData['geo'];
        ip?: string;
        url: NextURL;
    };
    constructor(input: Request | string, init?: RequestInit);
    get cookies(): NextCookies;
    get geo(): {
        city?: string | undefined;
        country?: string | undefined;
        region?: string | undefined;
        latitude?: string | undefined;
        longitude?: string | undefined;
    } | undefined;
    get ip(): string | undefined;
    get nextUrl(): NextURL;
    get page(): void;
    get ua(): void;
    get url(): string;
}
export interface RequestInit extends globalThis.RequestInit {
    geo?: {
        city?: string;
        country?: string;
        region?: string;
    };
    ip?: string;
    nextConfig?: {
        basePath?: string;
        i18n?: I18NConfig | null;
        trailingSlash?: boolean;
    };
}
