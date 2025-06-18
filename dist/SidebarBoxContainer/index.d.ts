import { ReactNode } from 'react';

interface SidebarBoxContainerProps {
    icon?: ReactNode;
    title: string;
    children: ReactNode;
    noScroll?: boolean;
    expandedByDefault?: boolean;
}
export declare const SidebarBoxContainer: ({ icon, title, children, }: SidebarBoxContainerProps) => import("react/jsx-runtime").JSX.Element;
declare const _default: import('react').MemoExoticComponent<({ icon, title, children, }: SidebarBoxContainerProps) => import("react/jsx-runtime").JSX.Element>;
export default _default;
