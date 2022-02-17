import MainTemplate from "components/templates/mainTemplate/MainTemplate";
import { useEffect } from "react";
import { useAppDispatch } from "hooks";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllCards, selectCards } from "slices/cardSlice";
import { store } from "store";

function MainPage() {
  const cards = selectCards(store.getState());
  const dispatch = useDispatch();
  console.log(cards);

  useEffect(() => {
    dispatch(fetchAllCards());
  }, []);

  return <MainTemplate cardData={cards} />;
}

export default MainPage;
