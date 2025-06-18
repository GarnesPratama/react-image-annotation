import { KeypointsDefinition, Region } from '../types/region-tools.ts';
import { ImagePosition } from '../types/common.ts';

interface WrappedRegionListProps {
    regions: Region[];
    keypointDefinitions?: KeypointsDefinition;
    iw: number;
    ih: number;
}
export declare const WrappedRegionList: import('react').MemoExoticComponent<({ regions, keypointDefinitions, iw, ih }: WrappedRegionListProps) => import("react/jsx-runtime").JSX.Element[]>;
interface RegionShapesProps {
    imagePosition: ImagePosition | null;
    regions: Region[];
    keypointDefinitions?: KeypointsDefinition;
}
export declare const RegionShapes: ({ imagePosition, regions, keypointDefinitions, }: RegionShapesProps) => import("react/jsx-runtime").JSX.Element | null;
export default RegionShapes;
