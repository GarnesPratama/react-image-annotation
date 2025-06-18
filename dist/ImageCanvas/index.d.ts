import { ComponentType, FunctionComponent } from 'react';
import { Box, Keypoints, KeypointsDefinition, Point, Polygon, Region } from '../types/region-tools.ts';
import { RegionLabelProps } from '../RegionLabel/index.tsx';
import { AutosegOptions } from 'autoseg/webworker';

type Props = {
    regions: Array<Region>;
    imageSrc: string | null;
    keypointDefinitions?: KeypointsDefinition;
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
    dragWithPrimary?: boolean;
    zoomWithPrimary?: boolean;
    createWithPrimary?: boolean;
    showTags?: boolean;
    realSize?: {
        w: number;
        h: number;
        unitName: string;
    };
    showCrosshairs?: boolean;
    showMask?: boolean;
    showHighlightBox?: boolean;
    showPointDistances?: boolean;
    pointDistancePrecision?: number;
    regionClsList?: Array<string | {
        id: string;
        label: string;
        color: string;
    }>;
    regionTagList?: Array<string>;
    regionTagSingleSelection?: boolean;
    allowedArea?: {
        x: number;
        y: number;
        w: number;
        h: number;
    };
    RegionEditLabel?: ComponentType<RegionLabelProps> | FunctionComponent<RegionLabelProps> | null;
    zoomOnAllowedArea?: boolean;
    fullImageSegmentationMode?: boolean;
    autoSegmentationOptions?: AutosegOptions;
    modifyingAllowedArea?: boolean;
    allowComments?: boolean;
    onChangeRegion: (region: Region) => void;
    onBeginRegionEdit: (region: Region) => void;
    onCloseRegionEdit: (region: Region) => void;
    onDeleteRegion: (region: Region) => void;
    onBeginBoxTransform: (region: Box, point: [number, number]) => void;
    onBeginMovePolygonPoint: (region: Polygon, index: number) => void;
    onBeginMoveKeypoint: (region: Keypoints, keypointId: string) => void;
    onAddPolygonPoint: (polygon: Polygon, point: [number, number], index: number) => void;
    onSelectRegion: (region: Region) => void;
    onBeginMovePoint: (point: Point) => void;
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
export declare const ImageCanvas: ({ regions, imageSrc, realSize, showTags, onMouseMove, onMouseDown, onMouseUp, dragWithPrimary, zoomWithPrimary, createWithPrimary, pointDistancePrecision, regionClsList, regionTagList, regionTagSingleSelection, showCrosshairs, showHighlightBox, showPointDistances, allowedArea, RegionEditLabel, showMask, fullImageSegmentationMode, autoSegmentationOptions, onImageLoaded, onChangeRegion, onBeginRegionEdit, onCloseRegionEdit, onBeginBoxTransform, onBeginMovePolygonPoint, onAddPolygonPoint, onBeginMoveKeypoint, onSelectRegion, onBeginMovePoint, onDeleteRegion, onRegionClassAdded, zoomOnAllowedArea, modifyingAllowedArea, keypointDefinitions, allowComments, }: Props) => import("react/jsx-runtime").JSX.Element;
export default ImageCanvas;
