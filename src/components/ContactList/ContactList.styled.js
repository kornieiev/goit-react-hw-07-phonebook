import styled from 'styled-components';

export const ListItem = styled.li`
  margin-top: 15px;
  margin-left: 5px;
  display: flex;
  justify-content: space-between;
`;

export const DeleteButton = styled.button`
  background-color: white;
  border: 1px solid grey;
  border-radius: 3px;
  margin-right: 5px;
  margin-left: 15px;
  &:hover {
    background-color: #d96a6a;
  }
`;

export const EditButton = styled.button`
  background-color: white;
  margin-right: 20px;
  border: 1px solid grey;
  border-radius: 3px;
  margin-left: 15px;
  &:hover {
    background-color: #d9ad6a;
  }
`;
