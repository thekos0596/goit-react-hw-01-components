import styled from '@emotion/styled';

const setRandomColor = () => {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

export const Section = styled.section`
  margin-left: auto;
  margin-right: auto;
  width: 300px;
  background-color: var(--color-primary);
`;

export const Title = styled.h2`
  text-align: center;
  padding-top: 25px;
  padding-bottom: 25px;
`;

export const StatList = styled.ul`
  display: grid;
  grid-template-columns: 60px 60px 60px 60px 60px;
`;

export const StatItem = styled.li`
  padding-top: 10px;
  padding-bottom: 10px;
  text-align: center;
  background-color: ${setRandomColor};
`;

export const Label = styled.span`
  font-size: 16px;
  color: var(--color-main-text);
`;

export const Percentage = styled.span`
  color: var(--color-main-text);
`;
