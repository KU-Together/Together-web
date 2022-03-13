import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllCards, selectCards } from "slices/cardSlice";
import Style from "./Main.style";
import KanbanCol from "components/kanbanCol/KanbanCol";
import { selectUser } from "slices/userSlice";

function Main() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  useEffect(() => {
    if (user) {
      dispatch(fetchAllCards(user.id));
    }
  }, [user]);

  return (
    <Style.Container>
      <Style.KanbanBoard>
        <KanbanCol title="To Do" status="to-do" />
        <KanbanCol title="In Progress" status="in-progress" />
        <KanbanCol title="Completed" status="completed" />
      </Style.KanbanBoard>
    </Style.Container>
  );
}

export default Main;
