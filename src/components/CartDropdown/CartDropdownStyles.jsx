import styled from "styled-components";

export const CartContainerStyles = styled.div`
  position: absolute;
  width: 240px;
  height: 340px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid black;
  background-color: white;
  top: 90px;
  right: 60px;
  z-index: 5;
`;

export const CartItemsStyles = styled.div`
  height: 240px;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  overflow-x: none;
`;

export const EmptyStyles = styled.span`
  font-size: 1rem;
  margin: 50px auto;
`;
