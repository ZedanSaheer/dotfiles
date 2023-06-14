import { NextConfigComplete } from 'next/dist/server/config-sharedr/config-shared';
export { DomainLocale, NextConfig, normalizeConfig } from 'next/dist/server/config-sharedr/config-shared';
export default function loadConfig(phase: string, dir: string, customConfig?: object | null): Promise<NextConfigComplete>;
export declare function setHttpAgentOptions(options: NextConfigComplete['httpAgentOptions']): void;