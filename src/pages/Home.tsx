import React from "react";


interface HomeProps {
    title: string;
    description: string;
}

const Home: React.FC<HomeProps> = ({ title, description }) => {
    return (
        <div>
            <h1>{title}</h1>
            <p>{description}</p>
        </div>
    );
};