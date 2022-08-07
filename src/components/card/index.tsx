import React, { ReactNode } from 'react';
import styled from 'styled-components';

type Props = {
  children: ReactNode;
};
const Card: React.FC<Props> = ({ children }) => {
  return <StyledCard>{children}</StyledCard>;
};
export default Card;

export const StyledCard = styled.div`
  border-radius: 6px;
  padding: 10px;
  border: 1px solid ${(props) => props.theme.colours.bodyBorder};
  &:hover {
    border-color: rgba(0, 241, 229, 0.1);
    background-color: rgba(0, 241, 229, 0.1);
  }
`;
