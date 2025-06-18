import { KeypointDefinition } from '../types/region-tools.ts';

type Parameters = {
    center: {
        x: number;
        y: number;
    };
    scale: number;
    landmarks: {
        [key: string]: KeypointDefinition;
    };
};
declare const _default: ({ center, scale, landmarks }: Parameters) => Record<string, {
    x: number;
    y: number;
}>;
export default _default;
