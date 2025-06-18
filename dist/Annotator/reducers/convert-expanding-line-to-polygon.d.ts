import { ExpandingLine } from '../../types/region-tools.ts';

declare const _default: (expandingLine: ExpandingLine) => {
    type: string;
    open: boolean;
    points: number[][];
    unfinished: undefined;
    candidatePoint: undefined;
    id: string | number;
    cls?: string;
    locked?: boolean;
    visible?: boolean;
    color: string;
    editingLabels?: boolean;
    highlighted?: boolean;
    tags?: Array<string>;
    comment?: string;
    expandingWidth?: number;
};
export default _default;
