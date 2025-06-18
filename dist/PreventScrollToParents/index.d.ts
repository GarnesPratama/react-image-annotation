import { ReactNode } from 'react';

interface PreventScrollToParentsProps {
    children: ReactNode;
    [key: string]: any;
}
export declare const PreventScrollToParents: ({ children, ...otherProps }: PreventScrollToParentsProps) => import("react/jsx-runtime").JSX.Element;
export default PreventScrollToParents;
