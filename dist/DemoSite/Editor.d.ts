import { AnnotatorProps } from '../Annotator';

export declare const examples: Record<string, () => Omit<AnnotatorProps, "onExit">>;
declare const Editor: ({ onOpenAnnotator, lastOutput }: any) => import("react/jsx-runtime").JSX.Element;
export default Editor;
