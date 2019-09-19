import styled from 'styled-components';

export const Wrapper = styled.div`
  padding-bottom: 4rem;
  background-image: url('/illustrations/traits.svg');
  background-size: contain;
  background-position: left top;
  background-repeat: no-repeat;
`;

export const AboutWrapper = styled.div`
  padding: 4rem 0;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

export const Details = styled.div`
  flex: 1;
  text-justify: auto;
  padding-left: 2rem;

  @media (max-width: 960px) {
    padding-left: unset;
    width: 100%;
  }
`;

export const Thumbnail = styled.div`
  flex: 1;

  @media (max-width: 960px) {
    width: 100%;
    margin-bottom: 2rem;
  }

  img {
    alignment: center;
  }
`;
