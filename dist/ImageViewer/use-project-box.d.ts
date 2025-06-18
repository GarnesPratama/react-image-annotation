import { Region } from '../types/region-tools.ts';
import { CanvasLayoutParams } from './ModifiedCanvas.tsx';
import { IMatrix } from 'transformation-matrix-js';
import { MutableRefObject } from 'react';

export type ProjectBox = IMatrix & {
    w: number;
    h: number;
};
export type ProjectBoxFn = (r: Region) => ProjectBox;
declare const UseProjectedBox: ({ layoutParams, mat, }: {
    layoutParams: MutableRefObject<CanvasLayoutParams | null>;
    mat: IMatrix;
}) => ProjectBoxFn;
export default UseProjectedBox;
