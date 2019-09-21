import styled from 'styled-components';
import { Container } from 'rendition';
import Img from 'gatsby-image';

export const Wrapper = styled.div`
  margin: 1rem auto 2rem auto;
  width: 100%;
  padding: 0;
  color: ${props => props.theme.colors.white};
`;

export const TitleFrame = styled(Container)`
  text-align: center;
  width: 50%;
  background-color: rgba(25, 19, 33, 0.54);
  border-radius: 10px;
  box-shadow: 0 5px 5px 0 black;
  h2 {
  	font-family: 'Montserrat', Helvetica, sans-serif;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.15em;
  }
  @media (max-width: 1080px) {
    width: 90%;
  }
`;

export const Grid = styled.div`
  padding-top: 3rem;
  display: grid;
  align-items: center;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 8fr;
  gap: 2.5rem 2.5rem;

  @media (max-width: 960px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 680px) {
    grid-template-columns: 1fr;
  }
`;

export const Item = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  box-shadow: 0 3px 7px 0 black;
`;

export const Image = styled(Img)`
  width: 100%;
`;
