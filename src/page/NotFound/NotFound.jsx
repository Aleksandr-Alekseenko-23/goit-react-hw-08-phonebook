import React from 'react';
import { StyledImage, Div, StyledLink } from './NotFound.styled';

import { ChevronLeftIcon } from '@heroicons/react/24/solid';

const PageNotFound = () => {
  return (
    <>
      <StyledImage>
        <Div>
          <StyledLink to={`/contacts`}>
            <ChevronLeftIcon className=" w-14 h-14 " aria-hidden="true" />
            Back
          </StyledLink>
        </Div>
      </StyledImage>
    </>
  );
};

export default PageNotFound;
