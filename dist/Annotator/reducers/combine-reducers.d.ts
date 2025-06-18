import { Action, MainLayoutStateBase } from '../../MainLayout/types.ts';

declare const _default: <T extends MainLayoutStateBase>(...reducers: ((state: T, action: Action) => T)[]) => (state: T, action: Action) => T;
export default _default;
