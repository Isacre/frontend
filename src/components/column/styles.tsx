import styled from "styled-components";

export const Component = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #5490fc;
  color: white;
  width: 300px;
  height: fit-content;
  border-radius: 8px;
  gap: 5px;
  padding: 10px;

  ::-webkit-scrollbar {
    width: 5px;
  }
  ::-webkit-scrollbar-thumb {
    background: #ccc;
    border-radius: 5px;
  }
  ::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 25px;
  }
  ::-webkit-scrollbar-corner {
    background: transparent;
  }
`;
export const ColumnName = styled.b`
  font-family: Arial;
  font-weight: bold;
`;
export const CardsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  max-height: calc(100vh - 120px);
  overflow-y: auto;
  padding-right: 5px;
`;
export const AddCardButton = styled.div`
  color: white;
  display: flex;
  align-items: center;
  gap: 5px;
  padding-top: 5px;
  cursor: pointer;
`;
