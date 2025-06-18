export type BaseRegion = {
    id: string | number;
    cls?: string;
    locked?: boolean;
    visible?: boolean;
    color: string;
    editingLabels?: boolean;
    highlighted?: boolean;
    tags?: Array<string>;
    comment?: string;
};
export type Point = BaseRegion & {
    type: "point";
    x: number;
    y: number;
};
export type PixelRegion = (BaseRegion & {
    type: "pixel";
    sx: number;
    sy: number;
    w: number;
    h: number;
    src: string;
}) | (BaseRegion & {
    type: "pixel";
    points: Array<[number, number]>;
});
export type Box = BaseRegion & {
    type: "box";
    x: number;
    y: number;
    w: number;
    h: number;
};
export type Polygon = BaseRegion & {
    type: "polygon";
    open?: boolean;
    points: Array<[number, number]>;
};
export type Line = BaseRegion & {
    type: "line";
    x1: number;
    y1: number;
    x2: number;
    y2: number;
};
export type ExpandingLine = BaseRegion & {
    type: "expanding-line";
    points: Array<{
        x: number;
        y: number;
        angle: number | null;
        width: number | null;
    }>;
    expandingWidth?: number;
    candidatePoint?: {
        x: number;
        y: number;
    };
    unfinished?: boolean;
};
export type KeypointDefinition = BaseRegion & {
    label: string;
    color: string;
    defaultPosition: [number, number];
};
export type KeypointId = string;
export type KeypointsDefinition = {
    [id: string]: {
        connections: Array<[KeypointId, KeypointId]>;
        landmarks: {
            [key: KeypointId]: KeypointDefinition;
        };
    };
};
export type Keypoints = BaseRegion & {
    type: "keypoints";
    keypointsDefinitionId: string;
    points: {
        [key: string]: {
            x: number;
            y: number;
        };
    };
    open?: boolean;
};
export type Region = Point | PixelRegion | Box | Polygon | ExpandingLine | Keypoints;
export declare const getEnclosingBox: (region: Region | Line) => {
    x: number;
    y: number;
    w: number;
    h: number;
};
export declare const moveRegion: (region: Region, x: number, y: number) => (BaseRegion & {
    type: "pixel";
    sx: number;
    sy: number;
    w: number;
    h: number;
    src: string;
}) | (BaseRegion & {
    type: "pixel";
    points: Array<[number, number]>;
}) | Polygon | ExpandingLine | Keypoints | {
    x: number;
    y: number;
    id: string | number;
    cls?: string;
    locked?: boolean;
    visible?: boolean;
    color: string;
    editingLabels?: boolean;
    highlighted?: boolean;
    tags?: Array<string>;
    comment?: string;
    type: "point";
} | {
    x: number;
    y: number;
    id: string | number;
    cls?: string;
    locked?: boolean;
    visible?: boolean;
    color: string;
    editingLabels?: boolean;
    highlighted?: boolean;
    tags?: Array<string>;
    comment?: string;
    type: "box";
    w: number;
    h: number;
};
