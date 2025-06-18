import { Region } from '../types/region-tools.ts';
import { RegionAllowedActions } from '../MainLayout/types.ts';

interface RegionSelectorSidebarBoxProps {
    regions?: Region[];
    regionClsList?: Array<{
        id: string;
        label: string;
    }> | string[];
    regionAllowedActions: RegionAllowedActions;
    onDeleteRegion: (r: Region) => void;
    onChangeRegion: (r: Region) => void;
    onSelectRegion: (r: Region) => void;
}
export declare const RegionSelectorSidebarBox: ({ regions, regionClsList, onDeleteRegion, onChangeRegion, onSelectRegion, regionAllowedActions, }: RegionSelectorSidebarBoxProps) => import("react/jsx-runtime").JSX.Element;
declare const _default: import('react').MemoExoticComponent<({ regions, regionClsList, onDeleteRegion, onChangeRegion, onSelectRegion, regionAllowedActions, }: RegionSelectorSidebarBoxProps) => import("react/jsx-runtime").JSX.Element>;
export default _default;
