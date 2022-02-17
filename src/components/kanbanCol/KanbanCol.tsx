import { IMAGES } from "constants/images";
import { Card } from "constants/types";
import React from "react";
import { formatDate } from "utils/DateUtils";
import { useDispatch } from "react-redux";
import { createCard } from "slices/cardSlice";
import {
  Column,
  StatusRow,
  Status,
  AddBtn,
  WrappedCard,
  Icon,
} from "./KanbanStyles";

const projectId = "a7b69446-0954-4906-96ee-815627841ce2";

function KanbanCol({ status, cards }: { status: string; cards: Card[] }) {
  const dispatch = useDispatch();

  return (
    <Column>
      <StatusRow>
        <Status>{status || ""}</Status>

        <AddBtn
          onClick={() => {
            dispatch(
              createCard({
                project_id: projectId,
                title: "제목",
                deadline: formatDate(new Date()),
                status: status,
                content: "컨텐트",
              })
            );
          }}
        >
          <Icon src={IMAGES.add} />
        </AddBtn>
      </StatusRow>

      {cards.map((card) => (
        <WrappedCard key={card.id} cardInfo={card} />
      ))}
    </Column>
  );
}

export default KanbanCol;
