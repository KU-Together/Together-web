import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllCards, selectCards, selectState } from "slices/cardSlice";
import Style from "./Main.style";
import KanbanCol from "components/kanbanCol/KanbanCol";
import { useParams } from "react-router-dom";
import useProject from "pages/main/useProject";
import { ProjectId } from "constants/types";
import useCard, { UseCardReturnType } from "./useCard";

type Params = {
  projectId: ProjectId;
};

type Card = {
  [key: string]: UseCardReturnType;
};

function Main() {
  const params = useParams<Params>();
  const [project, getProject] = useProject();
  const dispatch = useDispatch();
  const allCards = useSelector(selectCards);
  const card: Card = {
    "to-do": useCard(),
    "in-progress": useCard(),
    completed: useCard(),
    terminated: useCard(),
  };

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

  useEffect(() => {
    if (allCards.length > 0) {
      for (const status in card) {
        card[status].filterStatus(status, allCards);
      }
    }
  }, [allCards]);

  return (
    <Style.Container>
      <Style.Project>{project?.name}</Style.Project>
      <Style.KanbanBoard>
        <KanbanCol
          status="In Progress"
          cards={allCards}
          projectId={project?.id}
        />
      </Style.KanbanBoard>
    </Style.Container>
  );
}

export default Main;
