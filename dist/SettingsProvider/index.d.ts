import { ReactNode } from 'react';

interface SettingsValue {
    showCrosshairs: boolean;
    showHighlightBox: boolean;
    wasdMode: boolean;
    videoPlaybackSpeed?: string;
    changeSetting: (setting: keyof Omit<SettingsValue, "changeSetting">, value: any) => void;
}
export declare const SettingsContext: import('react').Context<Partial<SettingsValue>>;
export declare const useSettings: () => Partial<SettingsValue>;
export declare const SettingsProvider: ({ children }: {
    children: ReactNode;
}) => import("react/jsx-runtime").JSX.Element;
export default SettingsProvider;
