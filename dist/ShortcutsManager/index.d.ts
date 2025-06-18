import { ReactNode } from 'react';
import { Action } from '../MainLayout/types.ts';

export declare const defaultHotkeys: ({
    id: string;
    description: string;
    binding: string;
} | {
    id: string;
    description: string;
    binding?: undefined;
})[];
export declare const defaultKeyMap: Record<string, any>;
export declare const useDispatchHotkeyHandlers: ({ dispatch, }: {
    dispatch: (action: Action) => void;
}) => {
    select_tool: () => void;
    zoom_tool: () => void;
    create_point: () => void;
    create_bounding_box: () => void;
    pan_tool: () => void;
    create_polygon: () => void;
    create_pixel: () => void;
    save_and_previous_sample: () => void;
    save_and_next_sample: () => void;
    save_and_exit_sample: () => void;
    delete_region: () => void;
    undo: () => void;
};
declare const _default: ({ children, dispatch, }: {
    children: ReactNode;
    dispatch: (action: Action) => void;
}) => import("react/jsx-runtime").JSX.Element;
export default _default;
