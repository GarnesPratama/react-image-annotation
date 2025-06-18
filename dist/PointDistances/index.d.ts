import { ProjectBoxFn } from '../ImageCanvas/use-project-box.ts';
import { Region } from '../types/region-tools.ts';

type PointDistancesProps = {
    projectRegionBox: ProjectBoxFn;
    regions: Region[];
    realSize?: {
        w: number;
        h: number;
        unitName: string;
    };
    pointDistancePrecision?: number;
};
export declare const PointDistances: ({ projectRegionBox, regions, pointDistancePrecision, realSize, }: PointDistancesProps) => import("react/jsx-runtime").JSX.Element;
export default PointDistances;
