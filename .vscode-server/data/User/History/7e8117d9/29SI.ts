import React from 'react';
import { NextComponentType, NextPageContext } from 'next/dist/shared/lib/utilsb/utils';
import { NextRouter } from 'next/dist/client/routert/client/router';
export declare type WithRouterProps = {
    router: NextRouter;
};
export declare type ExcludeRouterProps<P> = Pick<P, Exclude<keyof P, keyof WithRouterProps>>;
export default function withRouter<P extends WithRouterProps, C = NextPageContext>(ComposedComponent: NextComponentType<C, any, P>): React.ComponentType<ExcludeRouterProps<P>>;
