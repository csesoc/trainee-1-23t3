import React, { ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';

interface BackButtonInterface {
    className?: string;
    children?: ReactNode;
}
const BackButton = ({ className, children }: BackButtonInterface) => {
    const navigate = useNavigate();

    const handleBack = () => {
        navigate(-1);
    };

    return (
        <button onClick={handleBack} className={className}>
            {children || 'Back'}
        </button>
    );
};

export default BackButton;
