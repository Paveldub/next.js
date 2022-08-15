import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

export interface TagsProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    children: ReactNode
    background?: 'ghost' | 'green' | 'red' | 'primary' | 'grey'
    href?: string
    size?: 's' | 'm',
    color?: string
}
