import React from 'react';
import { SEO } from 'Common';
import { LayoutEn } from 'Layout';

export default props => (
  <LayoutEn location={props.location}>
    <SEO title="404: Not found" location="/404" />
    <h1>NOT FOUND</h1>
    <p>The page you are looking for doesn't exist... sorry :(</p>
  </LayoutEn>
);
