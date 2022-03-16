import styled from "styled-components";
import KanbanCard from "components/kanbanCard/KanbanCard";

const Column = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 25px;
  padding-right: 25px;
  min-width: 350px;
`;

const StatusRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 6px;
  padding-left: 5px;
  padding-right: 5px;
`;

const Status = styled.span`
  font-size: medium;
  font-weight: bold;
  flex: 1;
`;

const CardWrapper = styled.div`
  margin-top: 6px;
  margin-bottom: 6px;
`;

const AddBtn = styled.div`
  width: 20px;
  height: 20px;
  &:hover {
    cursor: grab;
  }
`;

const Icon = styled.img`
  max-width: 100%;
  max-height: 100%;
`;

type DividerProps = {
  dragOver: boolean;
};

const divider = styled.div<DividerProps>`
  height: ${(props) => (props.dragOver ? "150px" : "12px")};
  transition: ${(props) => (props.dragOver ? "height 0.5s" : "")};
`;

export default {
  Column,
  StatusRow,
  Status,
  CardWrapper,
  AddBtn,
  Icon,
  divider,
};
