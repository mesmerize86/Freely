import React from 'react';
import styled from 'styled-components';
import InputField from '../inputField';
import { RegisterOptions } from 'react-hook-form';
import { TripField } from 'models/Trip';

type Props = {
  label: string;
  icon?: React.ReactNode;
  onClick?: () => void;
  value?: string;
  defaultValue?: string;
  errors?: any;
  errorMessage?: string;
  name: string;
  inputRef?: React.RefObject<HTMLInputElement>;
  register?: any;
  validationRule?: any;
  onChange?: (e: CustomEvent<HTMLInputElement>) => void;
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
  onChange,
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
        // @ts-ignore
        onChange={onChange}
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
