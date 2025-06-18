import { AnnotatorToolEnum } from '../../MainLayout/types.ts';
import { IconSidebarItem } from '../../types/common.ts';

interface IconSidebarProps {
    items?: Array<IconSidebarItem>;
    onClickItem: (item: {
        name: string;
    }) => void;
    selectedTools?: Array<AnnotatorToolEnum>;
}
export declare const IconSidebar: ({ items, onClickItem, selectedTools, }: IconSidebarProps) => import("react/jsx-runtime").JSX.Element;
export default IconSidebar;
