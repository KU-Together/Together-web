import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllCards, selectCards } from "slices/cardSlice";
import Style from "./Main.style";
import KanbanCol from "components/kanbanCol/KanbanCol";
import { useParams } from "react-router-dom";

function Main() {
  const cards = useSelector(selectCards);
  const dispatch = useDispatch();
  const params = useParams();

  useEffect(() => {
    dispatch(fetchAllCards());
  }, []);

  return (
    <Style.Container>
      <Style.KanbanBoard>
        <KanbanCol status="In Progress" cards={cards} />
      </Style.KanbanBoard>
    </Style.Container>
  );
}

export default Main;
