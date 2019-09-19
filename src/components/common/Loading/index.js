import React from 'react';
import { CubeGrid } from 'styled-loaders-react';
import styled from 'styled-components';

const SplashLoader = styled.div`
  margin-top: 30vh;
`;
export const Loading = () => (
  <SplashLoader>
    <CubeGrid size="60px" color="#1496E1" />
  </SplashLoader>
);
