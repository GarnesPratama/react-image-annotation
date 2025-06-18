import { Component, ErrorInfo, ReactNode } from 'react';

interface ErrorBoundaryDialogProps {
    children: ReactNode;
    onClose: () => void;
}
export default class ErrorBoundaryDialog extends Component<ErrorBoundaryDialogProps> {
    state: {
        hasError: boolean;
        err: string;
    };
    componentDidCatch(err: Error, info: ErrorInfo): void;
    render(): string | number | boolean | Iterable<ReactNode> | import("react/jsx-runtime").JSX.Element | null | undefined;
}
export {};
