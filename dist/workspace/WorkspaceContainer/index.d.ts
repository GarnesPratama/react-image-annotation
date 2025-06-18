import { ReactNode } from 'react';

type IWorkspaceContainerProps = {
    children: ReactNode;
    onNext: () => void;
    onPrev: () => void;
    currentSampleIndex?: number;
    numberOfSamples?: number;
    globalSampleIndex?: number;
    titleContent?: string;
    onClickHeaderItem: () => void;
};
export declare const WorkspaceContainer: ({ children, onNext, onPrev, currentSampleIndex, numberOfSamples, globalSampleIndex, titleContent, onClickHeaderItem, }: IWorkspaceContainerProps) => import("react/jsx-runtime").JSX.Element;
export default WorkspaceContainer;
