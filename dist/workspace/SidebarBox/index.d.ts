import { ReactNode } from 'react';

interface SidebarBoxProps {
    icon?: ReactNode;
    title: string;
    subTitle?: string;
    children: ReactNode;
    noScroll?: boolean;
    expandedByDefault?: boolean;
}
export declare const SidebarBox: ({ icon, title, subTitle, children, noScroll, expandedByDefault, }: SidebarBoxProps) => import("react/jsx-runtime").JSX.Element;
declare const _default: import('react').MemoExoticComponent<({ icon, title, subTitle, children, noScroll, expandedByDefault, }: SidebarBoxProps) => import("react/jsx-runtime").JSX.Element>;
export default _default;
