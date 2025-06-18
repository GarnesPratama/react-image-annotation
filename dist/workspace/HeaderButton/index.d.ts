import { ReactNode } from 'react';

interface HeaderButtonProps {
    name: string;
    icon?: ReactNode;
    disabled?: boolean;
    onClick: () => void;
    hideText?: boolean;
}
export declare const HeaderButton: import('react').ForwardRefExoticComponent<HeaderButtonProps & import('react').RefAttributes<HTMLButtonElement>>;
export default HeaderButton;
