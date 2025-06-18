import { ComponentType, FunctionComponent } from 'react';
import { Region } from '../types/region-tools.ts';
import { RegionLabelProps } from '../RegionLabel/index.tsx';

type Props = {
    regions: Array<Region>;
    imageSrc: string | null;
    onMouseMove?: (point: {
        x: number;
        y: number;
    }) => any;
    onMouseDown?: (point: {
        x: number;
        y: number;
    }) => any;
    onMouseUp?: (point: {
        x: number;
        y: number;
    }) => any;
    regionClsList?: Array<string | {
        id: string;
        label: string;
        color: string;
    }>;
    regionTagList?: Array<string>;
    allowedArea?: {
        x: number;
        y: number;
        w: number;
        h: number;
    };
    RegionEditLabel?: ComponentType<RegionLabelProps> | FunctionComponent<RegionLabelProps> | null;
    zoomOnAllowedArea?: boolean;
    allowComments?: boolean;
    onChangeRegion: (region: Region) => void;
    onBeginRegionEdit: (region: Region) => void;
    onCloseRegionEdit: (region: Region) => void;
    onDeleteRegion: (region: Region) => void;
    onImageLoaded: (props: {
        naturalWidth: number;
        naturalHeight: number;
        duration?: number;
    }) => void;
    onRegionClassAdded: (cls: string) => void;
};
export type CanvasLayoutParams = {
    iw: number;
    ih: number;
    fitScale: number;
    canvasWidth: number;
    canvasHeight: number;
};
export declare const ModifiedCanvas: ({ regions, imageSrc, onMouseMove, onMouseDown, onMouseUp, regionClsList, regionTagList, allowedArea, RegionEditLabel, onImageLoaded, onChangeRegion, onBeginRegionEdit, onCloseRegionEdit, onDeleteRegion, onRegionClassAdded, zoomOnAllowedArea, allowComments, }: Props) => import("react/jsx-runtime").JSX.Element;
export default ModifiedCanvas;
