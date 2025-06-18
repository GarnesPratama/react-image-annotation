type Props = {
    currentImage: {
        cls?: string;
        tags?: Array<string>;
    } | null;
    imageClsList?: Array<string>;
    imageTagList?: Array<string>;
    onChangeImage: (image: {
        cls?: string;
        tags?: Array<string>;
    }) => void;
    expandedByDefault?: boolean;
};
export declare const TagsSidebarBox: ({ currentImage, imageClsList, imageTagList, onChangeImage, }: Props) => import("react/jsx-runtime").JSX.Element | null;
declare const _default: import('react').MemoExoticComponent<({ currentImage, imageClsList, imageTagList, onChangeImage, }: Props) => import("react/jsx-runtime").JSX.Element | null>;
export default _default;
