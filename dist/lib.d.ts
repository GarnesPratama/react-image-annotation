import { default as Annotator } from './Annotator';

export type { AnnotatorProps, AnnotatorRef } from './Annotator';
export type { MainLayoutState, MainLayoutImageAnnotationState, MainLayoutStateBase, AnnotatorToolEnum, } from './MainLayout/types';
export type { Region, BaseRegion, Box, PixelRegion, ExpandingLine, KeypointDefinition, Keypoints, Line, Polygon, Point, KeypointsDefinition, } from './types/region-tools';
export { Annotator };
export default Annotator;
