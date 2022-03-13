import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllCards, selectCards } from "slices/cardSlice";
import Style from "./Main.style";
import KanbanCol from "components/kanbanCol/KanbanCol";
import useCard, { UseCardReturnType } from "./useCard";
import { selectUser } from "slices/userSlice";

// type Card = {
//   [key: string]: UseCardReturnType;
// };

function Main() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const allCards = useSelector(selectCards);
  // const card: Card = {
  //   "to-do": useCard(),
  //   "in-progress": useCard(),
  //   completed: useCard(),
  //   terminated: useCard(),
  // };

  useEffect(() => {
    if (user) {
      dispatch(fetchAllCards(user.id));
    }
  }, [user]);

  return (
    <Style.Container>
      <Style.KanbanBoard>
        <KanbanCol status="In Progress" />
      </Style.KanbanBoard>
    </Style.Container>
  );
}

export default Main;
