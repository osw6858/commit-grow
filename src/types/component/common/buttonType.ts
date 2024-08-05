import {ReactNode} from "react";

export interface ButtonType {
    type: "submit" | "reset" | "button" | undefined
    children: ReactNode | string;
    onClick?: () => void;
    className?: string;
}