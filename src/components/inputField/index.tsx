import React, { ChangeEvent } from 'react';
import styled from 'styled-components';
import { TripField } from 'models/Trip';
import { RegisterOptions } from 'react-hook-form';
import { ValidationInputField } from 'features/trip/types';

type Props = {
  type?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  name: string;
  icon?: React.ReactNode;
  disabled?: boolean;
  defaultValue?: string;
  value?: string;
  onClick?: () => void;
  inputRef?: React.RefObject<HTMLInputElement>;
  register?: any;
  validationRule?: any;
};
const InputField: React.FC<Props> = ({
  type = 'text',
  placeholder,
  name,
  icon,
  disabled = false,
  defaultValue,
  value,
  onClick,
  inputRef,
  register,
  validationRule,
  onChange,
}) => (
  <StyledInputField onClick={onClick}>
    <StyledInput
      type={type}
      onChange={(e: ChangeEvent<HTMLInputElement>) => onChange?.(e)}
      placeholder={placeholder}
      name={name}
      disabled={disabled}
      defaultValue={defaultValue}
      value={value}
      ref={inputRef}
      {...register(name, validationRule)}
    />
    {icon && <StyledIcon>{icon}</StyledIcon>}
  </StyledInputField>
);

export default InputField;

const StyledInputField = styled.span`
  position: relative;
`;

export const StyledInput = styled.input`
  border: 1px solid rgba(57, 59, 61, 0.3);
  padding: 0.625rem;
  width: 100%;
  font-size: 1rem;
`;

const StyledIcon = styled.span`
  position: absolute;
  right: 4%;
  top: 15%;
`;
