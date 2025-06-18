import { ReactNode } from 'react';

interface HeaderProps {
    leftSideContent?: ReactNode;
    hideHeaderText?: boolean;
    items: Array<{
        name: string;
    }>;
    onClickItem: (item: {
        name: string;
    }) => void;
    customeHeaderItem?: {
        icon: React.ReactNode;
        name: string;
        onClickAction: () => void;
    };
}
export type HeaderRef = {
    clickButtonByName: (name: string) => void;
};
export declare const Header: import('react').ForwardRefExoticComponent<HeaderProps & import('react').RefAttributes<HeaderRef>>;
export default Header;
