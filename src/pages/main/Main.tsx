import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllCards, selectCards } from "slices/cardSlice";
import { store } from "store";
import Style from "./Main.style";
import KanbanCol from "components/kanbanCol/KanbanCol";

function Main() {
  const cards = selectCards(store.getState());
  const dispatch = useDispatch();
  console.log(cards);

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
