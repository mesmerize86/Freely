import React from 'react';
import styled from 'styled-components';

type Props = {
  name: string;
};

const Button: React.FC<Props> = ({ name }) => (
  <StyledButton type="submit" name={name} value={name} />
);

export default Button;

const StyledButton = styled.input<Props>`
  cursor: pointer;
  transition: background-color 350ms ease;
  border: none;
  font-size: 1rem;
  padding: 0.674rem 2.5rem;
  background-color: ${(props) => props.theme.colours.brand};
  color: ${(props) => props.theme.colours.primary};

  &:hover {
    background-color: ${(props) => props.theme.colours.primary};
    color: ${(props) => props.theme.colours.white};
  }
`;
