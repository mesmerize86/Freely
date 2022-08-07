import React from 'react';
import styled from 'styled-components';
import InputField from '../inputField';
import { ValidationInputField } from 'features/trip/types';

type Props = {
  label: string;
  icon?: React.ReactNode;
  onClick?: () => void;
  value?: string;
  name: string;
  inputRef?: React.RefObject<HTMLInputElement>;
  register?: any;
  validationRule?: ValidationInputField;
};

const TextField: React.FC<Props> = ({
  label,
  icon,
  onClick,
  value,
  name,
  inputRef,
  register,
  validationRule,
}) => {
  return (
    <StyledTextField>
      <StyledLabel htmlFor={name}>{label} : </StyledLabel>
      <InputField
        name={name}
        icon={icon}
        onClick={onClick}
        value={value}
        inputRef={inputRef}
        register={register}
        validationRule={validationRule}
      />
    </StyledTextField>
  );
};
export default TextField;

export const StyledTextField = styled.div`
  display: grid;
  grid-template-columns: 25% 75%;
  margin-bottom: 1.5rem;
`;

const StyledLabel = styled.label`
  font-size: ${(props) => props.theme.fontSizes.fontX};
  text-align: left;
`;
