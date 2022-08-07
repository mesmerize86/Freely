import React, { useState } from 'react';
import TextField from 'components/textField';
import { Calendar as IconCalendar } from 'react-feather';
import Calendar from 'react-calendar';
import styled from 'styled-components';
import dayjs from 'dayjs';
import { UseFormSetValue } from 'react-hook-form';
import { Inputs, ValidationInputField } from 'features/trip/types';
import { StyledInput } from 'components/inputField';

type Props = {
  label: string;
  name: string;
  register?: any;
  validationRule?: ValidationInputField;
  setValue: UseFormSetValue<Inputs>;
};

const CalendarTextField: React.FC<Props> = ({
  label,
  name,
  register,
  validationRule,
  setValue,
}) => {
  const [toggleCalendar, setToggleCalendar] = useState<boolean>(false);

  const handleToggleCalendar = () => {
    setToggleCalendar(!toggleCalendar);
  };

  const handleCalendarChange = (value: Date) => {
    const formattedDate = dayjs(value).format('DD/MM/YYYY');
    // @ts-ignore
    setValue(`${name}`, formattedDate, { shouldValidate: true });
    setToggleCalendar(false);
  };

  return (
    <StyledCalendarTextField>
      <TextField
        label={label}
        icon={<IconCalendar />}
        onClick={handleToggleCalendar}
        name={name}
        register={register}
        validationRule={validationRule}
      />
      {toggleCalendar && (
        <StyledCalendar onChange={handleCalendarChange} minDate={new Date()} />
      )}
    </StyledCalendarTextField>
  );
};
export default CalendarTextField;

const StyledCalendarTextField = styled.div`
  position: relative;
  ${StyledInput} {
    cursor: pointer;
  }
`;

const StyledCalendar = styled(Calendar)`
  border: 1px solid ${(props) => props.theme.colours.bodyBorder};
  border-top: none;
  position: absolute;
  top: 100%;
  width: 75%;
  right: 0;
  z-index: 2;
  background-color: ${(props) => props.theme.colours.white};
`;
