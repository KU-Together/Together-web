import { IMAGES } from "constants/images";
import { Card } from "constants/types";
import { useAppDispatch, useAppSelector } from "hooks";
import React from "react";
import { add } from "slices/cardSlice";
import {
  Column,
  StatusRow,
  Status,
  AddBtn,
  WrappedCard,
  Icon,
} from "./KanbanStyles";

interface Props {
  status?: string;
  cards: Card[];
}

function KanbanCol(props: Props) {
  return (
    <Column>
      <StatusRow>
        <Status>{props.status || ""}</Status>

        <AddBtn onClick={() => console.log("click!")}>
          <Icon src={IMAGES.add} />
        </AddBtn>
      </StatusRow>

      {props.cards.map((card) => (
        <WrappedCard key={card.id} cardInfo={card} />
      ))}
    </Column>
  );
}

export default KanbanCol;
