import KanbanCard from "components/kanbanCard/KanbanCard";
import { IMAGES } from "constants/images";
import { Card, CardStatus, ProjectId } from "constants/types";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { selectCards } from "slices/cardSlice";
import {
  Column,
  StatusRow,
  Status,
  AddBtn,
  CardWrapper,
  Icon,
} from "./KanbanCol.style";

const drag = (
  e: React.DragEvent<HTMLDivElement> & { target: HTMLDivElement }
) => {
  e.dataTransfer.setData("id", e.target.id);
};

const allowDrop = (e: React.DragEvent<HTMLDivElement>) => {
  e.preventDefault();
};

const drop = (
  e: React.DragEvent<HTMLDivElement> & { target: HTMLDivElement }
) => {
  e.preventDefault();
  const id = e.dataTransfer?.getData("id");
  const draggedElem = document.getElementById(id || "");
  if (e.target && draggedElem) {
    e.target.appendChild(draggedElem);
  }
};

function KanbanCol({ title, status }: { title: string; status: CardStatus }) {
  const dispatch = useDispatch();
  const cards = useSelector(selectCards);

  return (
    <Column onDrop={drop} onDragOver={allowDrop}>
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
        <CardWrapper
          draggable="true"
          onDragStart={drag}
          id={"card-" + card.id}
          key={card.id}
        >
          <KanbanCard cardInfo={card} />
        </CardWrapper>
      ))}
    </Column>
  );
}

export default KanbanCol;
