import React, { useState, useEffect } from 'react';
import TextField from 'components/textField';
import Button from 'components/button';
import styled from 'styled-components';
import Destinations from './destinations';
import CalendarTextField from 'components/calendarTextField';
import { useForm } from 'react-hook-form';
import { requiredValidation } from '../../validationRule';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

import { FieldTypes } from 'models/Field';
import { useDispatch } from 'react-redux';
import { addTrip } from '../../slice';
import { TripField } from 'models/Trip';
import { nanoid } from '@reduxjs/toolkit';
import { formatDate } from '../../../../helper';

const TripForm = () => {
  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState,
    formState: { errors },
  } = useForm<TripField>();
  const [destinations, setDestinations] = useState<Set<string>>(new Set());
  const dispatch = useDispatch();

  useEffect(() => {
    if (formState.isSubmitSuccessful) {
      reset();
      setDestinations(new Set());
    }
  }, [formState, reset]);

  const onSubmit = (formData: TripField) => {
    if (destinations.size === 0) return;
    const newData: TripField = {
      id: nanoid(),
      title: formData.title,
      startDate: formData.startDate,
      endDate: formData.endDate,
      status: FieldTypes.NotStarted,
      destinations: Array.from(destinations.values()),
    };
    dispatch(addTrip(newData));
    toast('Form Submitted.');
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)} noValidate>
      {errors.title && errors.title.type === 'required' && (
        <ErrorMessage>Please enter title.</ErrorMessage>
      )}
      <TextField
        label="Title"
        name="title"
        register={register}
        validationRule={requiredValidation}
      />
      {errors && errors.startDate && errors.startDate.type === 'required' && (
        <ErrorMessage>Please select start date.</ErrorMessage>
      )}
      <CalendarTextField
        label="Start Date"
        name="startDate"
        register={register}
        validationRule={requiredValidation}
        // @ts-ignore
        setValue={setValue}
      />
      {errors.endDate && errors.endDate.type === 'required' && (
        <ErrorMessage>Please select end date.</ErrorMessage>
      )}
      <CalendarTextField
        label="End Date"
        name="endDate"
        register={register}
        validationRule={requiredValidation}
        // @ts-ignore
        setValue={setValue}
      />
      <Destinations
        destinations={destinations}
        setDestinations={setDestinations}
      />
      <ButtonWrapper>
        <Button name="Submit" />
      </ButtonWrapper>
    </Form>
  );
};
export default TripForm;

const Form = styled.form`
  max-width: 490px;
  margin: 0 auto;
`;

const ButtonWrapper = styled.div`
  margin-top: 1.5rem;
  display: flex;
  justify-content: flex-end;
`;
const ErrorMessage = styled.p`
  color: indianred;
  text-align: right;
  margin-top: 0;
`;
