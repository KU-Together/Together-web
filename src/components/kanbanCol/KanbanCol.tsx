import { IMAGES } from "constants/images";
import { Card, CardStatus, ProjectId } from "constants/types";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { formatDate } from "utils/DateUtils";
import { useDispatch } from "react-redux";
import {
  createCard,
  fetchAllCards,
  selectCards,
  selectState,
} from "slices/cardSlice";
import {
  Column,
  StatusRow,
  Status,
  AddBtn,
  WrappedCard,
  Icon,
} from "./KanbanCol.style";

function KanbanCol({ title, status }: { title: string; status: CardStatus }) {
  const dispatch = useDispatch();
  const cards = useSelector(selectCards);
  console.log(cards[status]);

  return (
    <Column>
      <StatusRow>
        <Status>{title || ""}</Status>

        <AddBtn
          onClick={() => {
            // dispatch(
            //   createCard({
            //     project_id: "",
            //     title: "제목",
            //     deadline: formatDate(new Date()),
            //     status: status,
            //     content: "컨텐트",
            //   })
            // );
          }}
        >
          <Icon src={IMAGES.add} />
        </AddBtn>
      </StatusRow>

      {cards[status]?.map((card) => (
        <WrappedCard key={card.id} cardInfo={card} />
      ))}
    </Column>
  );
}

export default KanbanCol;
