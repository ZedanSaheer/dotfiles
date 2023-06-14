/// <reference types="node" />
import type { ServerResponse } from 'http';
import type { BaseNextResponse } from 'next/dist/server/base-httprver/base-http';
import type { PayloadOptions } from 'next/dist/server/send-payloadst/server/send-payload';
export declare function setRevalidateHeaders(res: ServerResponse | BaseNextResponse, options: PayloadOptions): void;
