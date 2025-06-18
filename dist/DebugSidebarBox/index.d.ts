import { Action, MainLayoutState } from '../MainLayout/types.ts';

interface DebugSidebarBoxProps {
    state: MainLayoutState;
    lastAction: Action | undefined;
}
export declare const DebugSidebarBox: ({ state, lastAction, }: DebugSidebarBoxProps) => import("react/jsx-runtime").JSX.Element;
export default DebugSidebarBox;
