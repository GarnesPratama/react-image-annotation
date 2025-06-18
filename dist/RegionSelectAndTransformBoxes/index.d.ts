import { MutableRefObject } from 'react';
import { Box, Keypoints, Point, Polygon, Region } from '../types/region-tools.ts';
import { MouseEvents } from '../ImageCanvas/use-mouse.ts';
import { ProjectBoxFn } from '../ImageCanvas/use-project-box.ts';
import { CanvasLayoutParams } from '../ImageCanvas/index.tsx';
import { IMatrix } from 'transformation-matrix-js';

interface RegionSelectAndTransformBoxProps {
    region: Region;
    mouseEvents: MouseEvents;
    projectRegionBox: ProjectBoxFn;
    dragWithPrimary?: boolean;
    createWithPrimary?: boolean;
    zoomWithPrimary?: boolean;
    onBeginMovePoint: (point: Point) => void;
    onSelectRegion: (r: Region) => void;
    layoutParams: MutableRefObject<CanvasLayoutParams | null>;
    mat: IMatrix;
    onBeginBoxTransform: (r: Box, corner: [number, number]) => void;
    onBeginMovePolygonPoint: (r: Polygon, pointIndex: number) => void;
    onBeginMoveKeypoint: (r: Keypoints, keypointId: string) => void;
    onAddPolygonPoint: (r: Polygon, pa: [number, number], i: number) => void;
    showHighlightBox: boolean;
}
export declare const RegionSelectAndTransformBox: import('react').MemoExoticComponent<({ region: r, mouseEvents, projectRegionBox, dragWithPrimary, createWithPrimary, zoomWithPrimary, onBeginMovePoint, onSelectRegion, layoutParams, mat, onBeginBoxTransform, onBeginMovePolygonPoint, onBeginMoveKeypoint, onAddPolygonPoint, showHighlightBox, }: RegionSelectAndTransformBoxProps) => import("react/jsx-runtime").JSX.Element>;
export declare const RegionSelectAndTransformBoxes: import('react').MemoExoticComponent<(props: Omit<RegionSelectAndTransformBoxProps, "region"> & {
    regions: Region[];
}) => import("react/jsx-runtime").JSX.Element[]>;
export default RegionSelectAndTransformBoxes;
