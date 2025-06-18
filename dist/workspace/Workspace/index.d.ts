import { CSSProperties, ReactElement } from 'react';
import { AnnotatorToolEnum } from '../../MainLayout/types.ts';
import { SvgIconTypeMap } from '@mui/material';
import { OverridableComponent } from '@mui/material/OverridableComponent';

export interface WorkspaceRef {
    clickHeaderButton: (name: string) => void;
}
export interface WorkspaceProps {
    style?: CSSProperties;
    allowFullscreen?: boolean;
    hideHeader?: boolean;
    hideHeaderText?: boolean;
    headerItems?: Array<{
        name: string;
    }>;
    iconDictionary?: Record<string, OverridableComponent<SvgIconTypeMap>>;
    headerLeftSide?: Array<ReactElement> | null;
    rightSidebarItems: Array<ReactElement>;
    onClickHeaderItem: (item: {
        name: string;
    }) => void;
    onClickIconSidebarItem: (item: {
        name: string;
    }) => void;
    selectedTools?: Array<AnnotatorToolEnum>;
    iconSidebarItems?: Array<{
        name: string;
        helperText: string;
        alwaysShowing?: boolean;
    }>;
    rightSidebarExpanded?: boolean;
    children: ReactElement;
    customeHeaderItem?: {
        icon: React.ReactNode;
        name: string;
        onClickAction: () => void;
    };
}
export declare const Workspace: import('react').ForwardRefExoticComponent<WorkspaceProps & import('react').RefAttributes<WorkspaceRef>>;
export default Workspace;
