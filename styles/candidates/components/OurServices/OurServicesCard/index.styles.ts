import styled from 'styled-components';
import { theme } from '@styles/theme';
import { variables } from '@/styles/global-variables';

export const Container = styled.div`
  width: 100%;
  max-width: 400px;
  min-width: 255px;
  display: flex;
  flex-direction: column;
  outline: 2px solid lightgray;
  border-radius: 8px;
  text-align: center;
  color: ${theme.colors.blue700};
  overflow: hidden;
  transition: all 450ms;
  min-height: 660px;
  max-height: 660px;

  &:hover {
    transform: scale(1.05);
    outline: 7px solid ${theme.colors.blue400};
  }

  .card-image {
    width: 100%;
    height: 295px;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }
`;

export const CardContainer = styled.div`
  min-height: 100%;
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  gap: 1.5rem;
  padding: 1.5rem 1rem;
`;

export const CardHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  font-size: 1.5rem;
  h2 {
    font-weight: 700;
  }
  h3 {
    font-size: 1rem;
    font-weight: 600;
  }
`;
export const CardDescriptions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  font-size: 0.75rem;
  line-height: 1rem;
  text-align: left;
  font-weight: 500;
  flex-grow: 1;

  > div {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  .star {
    flex-shrink: 0;
    color: yellow;
    width: 1.25rem;
    height: 1.25rem;
    color: ${theme.colors.yellow400};
  }
`;

export const PostText = styled.p`
  text-transform: capitalize;
  color: ${theme.colors.blue700};
`;

export const Button = styled.button`
  background: ${theme.colors.blue400};
  color: white;
  font-weight: 700;
  font-size: 1rem;
  padding: 16px 24px;
  border-radius: 8px;
  cursor: pointer;
  margin-top: auto;

  &:hover {
    opacity: 0.9;
    transform: scale(1.02);
  }
`;
