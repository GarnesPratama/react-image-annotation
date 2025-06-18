import { ImagePosition } from '../types/common.ts';
import { MouseEvents } from '../ImageCanvas/use-mouse.ts';

interface Props {
    imagePosition: ImagePosition | null;
    mouseEvents: MouseEvents;
    imageSrc: string | null;
    useCrossOrigin?: boolean;
    onLoad?: (props: {
        naturalWidth: number;
        naturalHeight: number;
        duration?: number;
    }) => void;
}
declare const _default: ({ imagePosition, mouseEvents, imageSrc, onLoad, useCrossOrigin, }: Props) => import("react/jsx-runtime").JSX.Element;
export default _default;
