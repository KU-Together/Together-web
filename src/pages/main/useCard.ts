import { Card, CardStatus } from "constants/types";
import React, { useState } from "react";

export type UseCardReturnType = {
  card: Card[];
  filterStatus: (status: CardStatus, cards: Card[]) => void;
};

function useCard() {
  const [card, setCard] = useState<Card[]>([]);

  const filterStatus = (status: CardStatus, cards: Card[]) => {
    setCard(cards.filter((elem) => elem.status === status));
  };

  return { card, filterStatus };
}

export default useCard;
