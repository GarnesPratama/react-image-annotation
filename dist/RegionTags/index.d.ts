import { RegionLabelProps } from '../RegionLabel/index.tsx';
import { Region } from '../types/region-tools.ts';
import { ProjectBoxFn } from '../ImageCanvas/use-project-box.ts';
import { MouseEvents } from '../ImageCanvas/use-mouse.ts';
import { ComponentType, FunctionComponent } from 'react';

type RegionTagsProps = {
    regions: Region[];
    projectRegionBox: ProjectBoxFn;
    mouseEvents: MouseEvents;
    regionClsList?: Array<string | {
        id: string;
        label: string;
        color: string;
    }>;
    regionTagList?: string[];
    regionTagSingleSelection?: boolean;
    onBeginRegionEdit: (r: Region) => void;
    onChangeRegion: (r: Region) => void;
    onCloseRegionEdit: (r: Region) => void;
    onDeleteRegion: (r: Region) => void;
    RegionEditLabel: ComponentType<RegionLabelProps> | FunctionComponent<RegionLabelProps> | null;
    onRegionClassAdded: (cls: string) => void;
    allowComments?: boolean;
};
export declare const RegionTags: ({ regions, projectRegionBox, mouseEvents, regionClsList, regionTagList, regionTagSingleSelection, onBeginRegionEdit, onChangeRegion, onCloseRegionEdit, onDeleteRegion, RegionEditLabel, onRegionClassAdded, allowComments, }: RegionTagsProps) => import("react/jsx-runtime").JSX.Element[];
export default RegionTags;
