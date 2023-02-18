import styled from 'styled-components';

export const FriendsUl = styled.ul`
  margin: auto;
  background-color: #f1ebf7;
  width: 350px;
  padding: 50px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  border-radius: 5%;
  box-shadow: 0 5px 20px #bfbfc5;
  margin-bottom: 64px;
`;

export const FriendsItem = styled.li`
  display: flex;
  align-items: center;
  border: 1px solid #d8d8f873;
  padding: 18px;
  box-shadow: 0 5px 20px #bfbfc5;
  background-color: #f1ebf7;
  border-radius: 5%;
`;

export const Avatar = styled.img`
  border-radius: 10px;
  margin-left: 25px;
  width: 60px;
`;

export const Name = styled.p`
  margin-left: 25px;
  font-size: 24px;
  font-weight: 600;
  text-shadow: 0 1px 10px #0000005a;
`;

export const OnLine = styled.span`
  height: 24px;
  ::before {
    content: '';
    display: inline-block;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    text-align: center;
    background-color: ${props => {
      if (!props.isOnline) {
        return '#f76d6d';
      } else {
        return '#34cc34';
      }
    }};
  }
`;
