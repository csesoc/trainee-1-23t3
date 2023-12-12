import React, { ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';

interface StateProps {
  title?: string;
}

interface BackButtonInterface {
  className?: string;
  children?: ReactNode;
  path: string;
  state ?: StateProps;
}
const BackButton = ({ className, children, path, state }: BackButtonInterface) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(path, { state });
  };

  return (
    <span className={className} onClick={handleClick}>
      {children}
    </span>
  );
};

export default BackButton;
