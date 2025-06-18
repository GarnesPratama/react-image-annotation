import { AutosegConfig } from 'autoseg/webworker';
import { Region } from '../types/region-tools.ts';
import { ImagePosition } from '../types/common.ts';

type ImageMaskProp = {
    regions: Region[];
    regionClsList?: string[];
    imageSrc: string | null;
    imagePosition: ImagePosition;
    zIndex?: number;
    hide?: boolean;
    autoSegmentationOptions?: Omit<AutosegConfig, "classNames">;
};
export declare const ImageMask: ({ regions, regionClsList, imageSrc, imagePosition, zIndex, hide, autoSegmentationOptions, }: ImageMaskProp) => import("react/jsx-runtime").JSX.Element;
export default ImageMask;
