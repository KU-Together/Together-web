import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllCards, selectCards } from "slices/cardSlice";
import Style from "./Main.style";
import KanbanCol from "components/kanbanCol/KanbanCol";
import useCard, { UseCardReturnType } from "./useCard";
import { selectUser } from "slices/userSlice";

type Card = {
  [key: string]: UseCardReturnType;
};

export const cardStatus = ["to-do", "in-progress", "completed", "terminated"];

function Main() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const allCards = useSelector(selectCards);
  const card: Card = {
    "to-do": useCard(),
    "in-progress": useCard(),
    completed: useCard(),
    terminated: useCard(),
  };

  useEffect(() => {
    if (user) {
      dispatch(fetchAllCards(user.id));
    }
  }, []);

  useEffect(() => {
    if (allCards.length > 0) {
      for (const status in card) {
        card[status].filterStatus(status, allCards);
      }
    }
  }, [allCards]);

  return (
    <Style.Container>
      <Style.KanbanBoard>
        <KanbanCol status="In Progress" cards={allCards} />
      </Style.KanbanBoard>
    </Style.Container>
  );
}

export default Main;
