import React, { ChangeEvent, useState, useRef } from 'react';
import styled from 'styled-components';
import { Plus } from 'react-feather';
import { nanoid } from '@reduxjs/toolkit';
import { THRESHOLD } from '../../types';

type Props = {
  destinations: Set<string>;
  setDestinations: (value: Set<string>) => void;
};
const Destinations: React.FC<Props> = ({ destinations, setDestinations }) => {
  const [destinationValue, setDestinationValue] = useState<string>('');
  const hasDestinations = destinations.size >= THRESHOLD.MAX_ROW;
  const inputRef = useRef<HTMLInputElement>(null);
  const handleDestinationChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setDestinationValue(e.target.value);
  };

  const handleAddDestination = (): void => {
    const newSet = new Set(destinations);
    if (destinationValue) {
      newSet.add(destinationValue);
      setDestinationValue('');
      setDestinations(newSet);
      if (inputRef) {
        inputRef.current?.focus();
      }
    }
  };

  const handleRemoveDestination = (destination: string): void => {
    const newSet = new Set(destinations);
    if (destinations.has(destination)) {
      newSet.delete(destination);
      setDestinations(newSet);
    }
  };

  return (
    <div>
      <StyledDestinations>
        <label htmlFor="destinations">Destinations: </label>
        <Input
          type="text"
          name="destinations"
          onChange={handleDestinationChange}
          value={destinationValue}
          ref={inputRef}
          disabled={hasDestinations}
        />
        <IconWrapper
          onClick={handleAddDestination}
          data-disabled={hasDestinations}
        >
          <Plus />
        </IconWrapper>
      </StyledDestinations>
      {hasDestinations && <p>You have reached the maximum limit.</p>}
      {destinations.size > 0 &&
        Array.from(destinations.values()).map((destination) => (
          <DesinationRow key={nanoid()}>
            <span>{destination}</span>
            <Link onClick={() => handleRemoveDestination(destination)}>
              remove
            </Link>
          </DesinationRow>
        ))}
    </div>
  );
};
export default Destinations;

const StyledDestinations = styled.div`
  display: grid;
  grid-template-columns: 25% 65% 10%;
  column-gap: 4px;
  justify-content: center;
  align-items: center;
  text-align: left;
`;

const IconWrapper = styled.span`
  border: 1px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 6px 0;
  margin-right: 4px;
  cursor: pointer;

  &[data-disabled='true'] {
    background-color: ${(props) => props.theme.colours.monoLightX};
    border-color: ${(props) => props.theme.colours.bodyBorder};
    cursor: default;
    opacity: 0.3;
    > svg {
      fill: ${(props) => props.theme.colours.bodyBorder};
    }
  }
`;

const Link = styled.span`
  cursor: pointer;
`;

const DesinationRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 1rem;
  border-bottom: 1px solid rgba(57, 59, 61, 0.3);

  > span {
    text-align: left;
  }

  ${Link} {
    text-align: right;
    text-decoration: underline;

    &:hover {
      color: ${(props) => props.theme.colours.brand};
    }
  }
`;

const Input = styled.input`
  border: 1px solid rgba(57, 59, 61, 0.3);
  padding: 0.625rem;
  width: 100%;
`;
