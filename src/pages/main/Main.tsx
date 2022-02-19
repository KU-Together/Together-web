import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllCards, selectCards } from "slices/cardSlice";
import Style from "./Main.style";
import KanbanCol from "components/kanbanCol/KanbanCol";
import { useParams } from "react-router-dom";
import useProject from "hooks/useProject";

function Main() {
  const cards = useSelector(selectCards);
  const dispatch = useDispatch();
  const params = useParams();
  const [project, getProject] = useProject();

  useEffect(() => {
    if (params.projectId) {
      getProject(params.projectId);
    }
  }, [params]);

  useEffect(() => {
    if (project) {
      dispatch(fetchAllCards(project.id));
    }
  }, [project]);

  return (
    <Style.Container>
      <Style.KanbanBoard>
        <KanbanCol status="In Progress" cards={cards} />
      </Style.KanbanBoard>
    </Style.Container>
  );
}

export default Main;
