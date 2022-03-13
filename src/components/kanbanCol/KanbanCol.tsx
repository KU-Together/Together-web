import { IMAGES } from "constants/images";
import { Card, ProjectId } from "constants/types";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { formatDate } from "utils/DateUtils";
import { useDispatch } from "react-redux";
import { createCard, fetchAllCards, selectState } from "slices/cardSlice";
import {
  Column,
  StatusRow,
  Status,
  AddBtn,
  WrappedCard,
  Icon,
} from "./KanbanStyles";

function KanbanCol({
  status,
  cards,
  projectId,
}: {
  status: string;
  cards: Card[];
  projectId?: ProjectId;
}) {
  const dispatch = useDispatch();
  const cardSliceState = useSelector(selectState);

  useEffect(() => {
    if (cardSliceState === "create-succeeded" && projectId) {
      // dispatch(fetchAllCards(projectId));
    }
  }, [cardSliceState]);

  return (
    <Column>
      <StatusRow>
        <Status>{status || ""}</Status>

        <AddBtn
          onClick={() => {
            dispatch(
              createCard({
                project_id: projectId || "",
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
