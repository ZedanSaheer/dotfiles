import type { GetStaticPaths } from 'next/types';
import type { NextConfigComplete } from 'next/dist/server/config-shared/config-shared';
import type { UnwrapPromise } from 'next/dist/lib/coalesced-functiontion';
import 'next/dist/server/node-polyfill-fetchpolyfill-fetch';
declare type RuntimeConfig = any;
export declare function loadStaticPaths(distDir: string, pathname: string, serverless: boolean, config: RuntimeConfig, httpAgentOptions: NextConfigComplete['httpAgentOptions'], locales?: string[], defaultLocale?: string): Promise<Omit<UnwrapPromise<ReturnType<GetStaticPaths>>, 'paths'> & {
    paths: string[];
    encodedPaths: string[];
}>;
export {};
