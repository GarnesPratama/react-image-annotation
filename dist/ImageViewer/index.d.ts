import { AnnotatorToolEnum, Image } from '../MainLayout/types';

export type IImageViewerType = {
    allowedArea?: {
        x: number;
        y: number;
        w: number;
        h: number;
    };
    regionClsList?: (string | {
        id: string;
        label: string;
        color: string;
    })[];
    regionTagList?: Array<string>;
    imageSrc: Image['src'];
    imageRegions: Image['regions'];
    selectedTool?: AnnotatorToolEnum;
};
export declare const ImageViewer: ({ allowedArea, regionClsList, regionTagList, imageSrc, imageRegions }: IImageViewerType) => import("react/jsx-runtime").JSX.Element;
export default ImageViewer;
