import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 30px 0;

  @media (max-width: 1080px) {
    padding: 10px 0;
  }
`;

export const ProjectsPageWrapper = styled.article`
  padding: 2rem 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-size: ${props => props.theme.fontSizes[2]}px;

  @media (max-width: 680px) {
    font-size: ${props => props.theme.fontSizes[1]}px;
  }
  @media (min-width: 1080px) {
    padding: 2rem 8rem;
  }
`;

export const Description = styled.div`
  padding-top: ${props => props.theme.space[4]}px;
  padding-bottom: ${props => props.theme.space[2]}px;
  width: 100%;
  p {
    font-size: ${props => props.theme.fontSizes[1]}px;
    margin: ${props => props.theme.space[1]}px 0 0
      ${props => props.theme.space[5]}px;
    color: ${props => props.theme.colors.text.main};
  }
`;

export const PostHead = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ContentSection = styled.section`
  text-align: justify;
  a {
    color: ${props => props.theme.colors.secondary.dark};
  }
  hr {
    background-color: ${props => props.theme.colors.text.light};
  }
  pre {
    background-color: ${props => props.theme.colors.quartenary.dark};
  }
  table {
    border-color: ${props => props.theme.colors.text.light};
  }
  figcaption {
  text-align: center;
  font-style: italic;
  }
  .gatsby-resp-image-wrapper {
    box-shadow: 0 5px 10px -3px ${props => props.theme.colors.text.main};
    margin-top: ${props => props.theme.space[2]}px;
    margin-bottom: ${props => props.theme.space[2]}px;
  }
  .gatsby-resp-image-link {
    pointer-events: none;
    user-select: none;
  }
`;
