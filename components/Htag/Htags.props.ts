import { ReactNode } from "react";

export interface HtagsProps {
    tag: 'h1' | 'h2' | "h3";
    children: ReactNode
}