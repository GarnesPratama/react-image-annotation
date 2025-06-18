interface ClassSelectionMenuProps {
    selectedCls?: string;
    regionClsList: (string | {
        id: string;
        label: string;
        color: string;
    })[];
    onSelectCls: (value: string) => void;
}
export declare const ClassSelectionMenu: ({ selectedCls, regionClsList, onSelectCls, }: ClassSelectionMenuProps) => import("react/jsx-runtime").JSX.Element;
export default ClassSelectionMenu;
