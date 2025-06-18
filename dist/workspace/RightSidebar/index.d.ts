import { ReactNode } from 'react';

interface RightSidebarProps {
    children: ReactNode;
    initiallyExpanded?: boolean;
    height?: number;
}
export declare const RightSidebar: ({ children, initiallyExpanded, height, }: RightSidebarProps) => import("react/jsx-runtime").JSX.Element;
export default RightSidebar;
