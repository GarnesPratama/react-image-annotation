import { AnnotatorToolEnum, Image, MainLayoutState, RegionAllowedActions } from '../MainLayout/types.ts';
import { ComponentType, FunctionComponent } from 'react';
import { KeypointsDefinition } from '../types/region-tools.ts';
import { AutosegOptions } from 'autoseg/webworker';

export type AnnotatorProps = {
    taskDescription?: string;
    allowedArea?: {
        x: number;
        y: number;
        w: number;
        h: number;
    };
    regionTagList?: Array<string>;
    regionTagSingleSelection?: boolean;
    regionAllowedActions?: Partial<RegionAllowedActions>;
    regionClsList?: Array<string | {
        id: string;
        label: string;
        color: string;
    }>;
    imageTagList?: Array<string>;
    imageClsList?: Array<string>;
    enabledTools?: Array<AnnotatorToolEnum>;
    selectedTool?: String;
    showTags?: boolean;
    selectedCls?: string;
    selectedImage?: string | number;
    images?: Array<Image>;
    showPointDistances?: boolean;
    pointDistancePrecision?: number;
    RegionEditLabel?: ComponentType<any> | FunctionComponent<any> | null;
    onExit: (state: MainLayoutState) => void;
    keypointDefinitions?: KeypointsDefinition;
    fullImageSegmentationMode?: boolean;
    autoSegmentationOptions?: AutosegOptions;
    hideHeader?: boolean;
    hideHeaderText?: boolean;
    hideNext?: boolean;
    hidePrev?: boolean;
    hideClone?: boolean;
    hideSettings?: boolean;
    hideFullScreen?: boolean;
    hideSave?: boolean;
    allowComments?: boolean;
    customeHeaderItem?: {
        icon: React.ReactNode;
        name: string;
        onClickAction: () => void;
    };
    onNextImage?: (state: MainLayoutState) => void;
    onPrevImage?: (state: MainLayoutState) => void;
};
export type AnnotatorRef = {
    clickHeaderButton: (name: string) => void;
};
export declare const Annotator: import('react').ForwardRefExoticComponent<AnnotatorProps & import('react').RefAttributes<AnnotatorRef>>;
export default Annotator;
