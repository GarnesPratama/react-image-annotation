import { Action, MainLayoutState } from './types.ts';
import { ComponentType, FunctionComponent } from 'react';
import { RegionLabelProps } from '../RegionLabel/index.tsx';

type Props = {
    state: MainLayoutState;
    RegionEditLabel?: ComponentType<RegionLabelProps> | FunctionComponent<RegionLabelProps> | null;
    dispatch: (action: Action) => void;
    alwaysShowNextButton?: boolean;
    alwaysShowPrevButton?: boolean;
    onRegionClassAdded: (cls: string) => void;
    hideHeader?: boolean;
    hideHeaderText?: boolean;
    hideNext?: boolean;
    hidePrev?: boolean;
    hideClone?: boolean;
    hideSettings?: boolean;
    hideFullScreen?: boolean;
    hideSave?: boolean;
    customeHeaderItem?: {
        icon: React.ReactNode;
        name: string;
        onClickAction: () => void;
    };
};
export interface MainLayoutRef {
    clickHeaderButton: (name: string) => void;
}
export declare const MainLayout: import('react').ForwardRefExoticComponent<Props & import('react').RefAttributes<MainLayoutRef>>;
export default MainLayout;
