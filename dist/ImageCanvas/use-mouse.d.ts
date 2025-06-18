import { MouseEvent, MutableRefObject, WheelEvent } from 'react';
import { IMatrix } from 'transformation-matrix-js';

type UseMouseProps = {
    canvasEl: MutableRefObject<HTMLCanvasElement | null>;
    changeMat: (mat: IMatrix) => void;
    changeDragging: (dragging: boolean) => void;
    zoomStart: {
        x: number;
        y: number;
    } | null;
    zoomEnd: {
        x: number;
        y: number;
    } | null;
    changeZoomStart: (point: {
        x: number;
        y: number;
    } | null) => void;
    changeZoomEnd: (point: {
        x: number;
        y: number;
    } | null) => void;
    layoutParams: MutableRefObject<{
        iw: number;
        ih: number;
    } | null>;
    zoomWithPrimary: boolean;
    dragWithPrimary: boolean;
    mat: IMatrix;
    onMouseMove: (point: {
        x: number;
        y: number;
    }) => void;
    onMouseUp: (point: {
        x: number;
        y: number;
    }) => void;
    onMouseDown: (point: {
        x: number;
        y: number;
    }) => void;
    dragging: boolean;
};
export type MouseEvents = {
    onMouseMove: (e: MouseEvent) => void;
    onMouseDown: (e: MouseEvent, specialEvent?: {
        type?: string;
    }) => void;
    onMouseUp: (e: MouseEvent) => void;
    onWheel: (e: WheelEvent) => void;
    onContextMenu: (e: MouseEvent) => void;
};
export type MenuPosition = {
    x: number;
    y: number;
};
export type UseMouseReturn = {
    mouseEvents: MouseEvents;
    mousePosition: MutableRefObject<MenuPosition>;
};
declare const _default: ({ canvasEl, changeMat, changeDragging, zoomStart, changeZoomStart, changeZoomEnd, layoutParams, zoomWithPrimary, dragWithPrimary, mat, onMouseMove, onMouseUp, onMouseDown, dragging, }: UseMouseProps) => UseMouseReturn;
export default _default;
