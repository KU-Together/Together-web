import styled from "styled-components";
import KanbanCard from "components/kanbanCard/KanbanCard";

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 25px;
  padding-right: 25px;
`;

export const StatusRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 6px;
  padding-left: 5px;
  padding-right: 5px;
`;

export const Status = styled.span`
  font-size: medium;
  font-weight: bold;
  flex: 1;
`;

export const WrappedCard = styled(KanbanCard)`
  margin-top: 6px;
  margin-bottom: 6px;
`;

export const AddBtn = styled.div`
  width: 20px;
  height: 20px;
  &:hover {
    cursor: grab;
  }
`;

export const Icon = styled.img`
  max-width: 100%;
  max-height: 100%;
`;
