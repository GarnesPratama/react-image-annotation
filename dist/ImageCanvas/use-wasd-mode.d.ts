import { Dispatch } from 'react';
import { IMatrix } from 'transformation-matrix-js';

declare const _default: ({ getLatestMat, changeMat, }: {
    getLatestMat: () => IMatrix;
    changeMat: Dispatch<IMatrix>;
}) => void;
export default _default;
