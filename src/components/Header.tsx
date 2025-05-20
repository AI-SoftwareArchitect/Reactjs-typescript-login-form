import React, { type JSX } from 'react';
import '../App.css';
import type { HeaderTypes } from './header-types';
interface HeaderProps {
    title: string;
    description: string | null;
    size: HeaderTypes;
}

export const Header: React.FC<HeaderProps> = ({ title, description , size }) => {

    const headerTagMap = {
            1: 'h1',
            2: 'h2',
            3: 'h3',
            4: 'h4',
    } as const;

    const Tag = headerTagMap[size] || "h1";
    const HeaderTag = Tag as keyof JSX.IntrinsicElements;
    
    return (
        <>  
            <HeaderTag>{title}
            </HeaderTag>
            {description && <p>{description}</p>}
        </>
    );
};