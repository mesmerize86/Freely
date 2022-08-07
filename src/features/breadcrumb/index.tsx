import React from 'react';
import styled from 'styled-components';
import { ArrowLeft } from 'react-feather';
import { useNavigate } from 'react-router-dom';

const Breadcrumb: React.FC = () => {
  const navigate = useNavigate();
  return (
    <StyledBreadcrumb>
      <StyledArrowLeft onClick={() => navigate(-1)} />
    </StyledBreadcrumb>
  );
};
export default Breadcrumb;

const StyledBreadcrumb = styled.div`
  height: 40px;
  justify-content: center;
  align-items: center;
  padding: 1rem 2rem;
`;

const StyledArrowLeft = styled(ArrowLeft)`
  &:hover {
    cursor: pointer;
  }
`;
