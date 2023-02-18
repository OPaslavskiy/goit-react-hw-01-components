import styled from 'styled-components';

export const StatisticsSection = styled.section`
  width: 600px;
  display: flex;
  flex-direction: column;
  margin: auto;
  padding-top: 20px;
  background-color: #f1ebf7;
  box-shadow: 0 5px 20px #bfbfc5;
  margin-bottom: 64px;
  border-radius: 5%;
`;

export const TitelStat = styled.h2`
  color: #111111ce;
  text-align: center;
  font-weight: 600;
  font-size: 28px;
  margin-bottom: 20px;
`;

export const StatList = styled.ul`
  display: flex;
  margin-top: 10px;
`;

export const Item = styled.li`
  text-shadow: 0 2px 6px #000000;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: calc(100% / 5);
  color: #bfbfc5;
`;

export const Percentage = styled.span`
  font-weight: 600;
  font-size: 28px;
  text-shadow: 0 2px 6px #000000;
`;
