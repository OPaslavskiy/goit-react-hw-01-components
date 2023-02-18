import styled from 'styled-components';

export const Profile = styled.div`
  border-radius: 5%;
  margin: auto;
  width: 350px;
  background-color: #f1ebf7;
  box-shadow: 0 5px 20px #bfbfc5;
  padding: 20px;
  margin-bottom: 64px;
`;

export const Avatar = styled.img`
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 25px;
  display: block;
  width: 200px;
  height: auto;
  border-radius: 50%;
  box-shadow: 0 5px 20px #5c5e5f;
  background: white;
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  gap: 5px;
  margin-bottom: 25px;
  margin-top: 25px;
  font-size: 20px;
  font-weight: 400;
  color: gray;
`;

export const Name = styled.p`
  color: black;
  text-shadow: 0 2px 6px #000000;
  font-size: 28px;
`;

export const Stats = styled.ul`
  margin-top: 50px;
  display: flex;
  padding: 3px;
  gap: 1px;

  & li {
    border-radius: 11px;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: calc(100% / 3);
  }
`;

export const Label = styled.span`
  font-size: 18px;
  font-weight: 500;
  margin-top: 10px;
  margin-bottom: 10px;
  color: gray;
`;

export const Quantity = styled.span`
  margin-bottom: 10px;
  text-shadow: 1px 3px 12px #000000ab;
  font-size: 20px;
  font-weight: 600;
`;
