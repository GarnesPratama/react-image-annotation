import { Region } from '../types/region-tools.ts';

export type RegionLabelProps = {
    region: Region;
    editing?: boolean;
    allowedClasses?: Array<string | {
        id: string;
        label: string;
        color: string;
    }>;
    allowedTags?: Array<string>;
    tagSingleSelection?: boolean;
    cls?: string;
    tags?: Array<string>;
    onDelete: (r: Region) => void;
    onChange: (r: Region) => void;
    onClose?: (r: Region) => void;
    onOpen?: (r: Region) => void;
    onRegionClassAdded?: (v: string) => void;
    allowComments?: boolean;
};
export declare const RegionLabel: ({ region, editing, allowedClasses, allowedTags, tagSingleSelection, onDelete, onChange, onClose, onOpen, onRegionClassAdded, allowComments, }: RegionLabelProps) => import("react/jsx-runtime").JSX.Element;
declare const _default: import('react').MemoExoticComponent<({ region, editing, allowedClasses, allowedTags, tagSingleSelection, onDelete, onChange, onClose, onOpen, onRegionClassAdded, allowComments, }: RegionLabelProps) => import("react/jsx-runtime").JSX.Element>;
export default _default;
