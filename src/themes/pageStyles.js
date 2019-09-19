import styled from 'styled-components';
import { Container } from 'Components/common';

export const GalleryWrapper = styled.div`
  background-image: url(${props => props.bgImage});
  background-position: top;
  position: relative;
  background-repeat: repeat;
  background-color: ${props => props.bgColor};
  box-shadow: 0 5px 10px -3px black;
  z-index: ${props => props.zIndex};
`;

export const ContentWrapper = styled(Container)`
  padding: 2rem 0;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

export const PaddedWrapper = styled.div`
  z-index: 5;
  box-shadow: 0 3px 5px -3px black;
  padding: 0 25%;

  @media (max-width: 1080px) {
    padding: 0 30px;
  }
`;

export const Details = styled.div`
  flex: 1;

  @media (max-width: 960px) {
    width: 100%;
    margin-bottom: 2rem;
  }
`;

export const CenteredWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Thumbnail = styled.div`
  flex: 1;

  @media (max-width: 960px) {
    width: 100%;
  }

  img {
    width: 100%;
  }
`;
