import styled from "styled-components";

const Container = styled.div`
  padding: 55px 80px;
`;

const KanbanBoard = styled.div`
  display: flex;
  flex-direction: row;
`;

const Project = styled.div`
  ${(props) => props.theme.font_title}
`;

export default {
  Container,
  KanbanBoard,
  Project,
};
