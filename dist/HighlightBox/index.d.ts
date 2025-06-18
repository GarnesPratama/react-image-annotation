import { Point, Region } from '../types/region-tools.ts';
import { MouseEvents } from '../ImageCanvas/use-mouse.ts';

export declare const HighlightBox: ({ mouseEvents, dragWithPrimary, zoomWithPrimary, createWithPrimary, onBeginMovePoint, onSelectRegion, region: r, pbox, }: {
    mouseEvents: MouseEvents;
    dragWithPrimary?: boolean;
    zoomWithPrimary?: boolean;
    createWithPrimary?: boolean;
    onBeginMovePoint: (point: Point) => void;
    onSelectRegion: (r: Region) => void;
    region: Region;
    pbox: {
        x: number;
        y: number;
        w: number;
        h: number;
    };
}) => import("react/jsx-runtime").JSX.Element | null;
export default HighlightBox;
