import { Action, MainLayoutImageAnnotationState, MainLayoutState } from '../../MainLayout/types';

export declare const saveToHistory: <T extends MainLayoutState>(state: T, name: string) => T;
declare const _default: (reducer: (state: MainLayoutState, action: Action) => MainLayoutState) => (state: MainLayoutState, action: Action) => MainLayoutImageAnnotationState;
export default _default;
