import KanbanCard from "components/kanbanCard/KanbanCard";
import { IMAGES } from "constants/images";
import { Card, CardStatus, ProjectId } from "constants/types";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { selectCards } from "slices/cardSlice";
import Style from "./KanbanCol.style";

const drag = (
  e: React.DragEvent<HTMLDivElement> & { target: HTMLDivElement }
) => {
  e.dataTransfer.setData("id", e.target.id);
};

const Divider = () => {
  const [dragOver, setDragOver] = useState(false);

  const allowDrop = (
    e: React.DragEvent<HTMLDivElement> & { target: HTMLDivElement }
  ) => {
    setDragOver(true);
    e.preventDefault();
  };

  const leaveDropZone = (
    e: React.DragEvent<HTMLDivElement> & { target: HTMLDivElement }
  ) => {
    setDragOver(false);
  };

  const drop = (
    e: React.DragEvent<HTMLDivElement> & { target: HTMLDivElement }
  ) => {
    setDragOver(false);
    e.preventDefault();
    const id = e.dataTransfer?.getData("id");
    const curElem = e.target;
    const dropElem = document.getElementById(id || "");
    if (curElem && dropElem) {
      curElem.parentNode?.insertBefore(dropElem, curElem.nextSibling);
    }
  };

  return (
    <Style.divider
      dragOver={dragOver}
      onDrop={drop}
      onDragOver={allowDrop}
      onDragLeave={leaveDropZone}
    />
  );
};

function KanbanCol({ title, status }: { title: string; status: CardStatus }) {
  const dispatch = useDispatch();
  const cards = useSelector(selectCards);

  return (
    <Style.Column>
      <Style.StatusRow>
        <Style.Status>{title || ""}</Style.Status>

        <Style.AddBtn
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
          <Style.Icon src={IMAGES.add} />
        </Style.AddBtn>
      </Style.StatusRow>

      <Divider />

      {cards[status]?.map((card) => (
        // <Style.CardWrapper
        //   draggable="true"
        //   onDragStart={drag}
        //   id={"card-" + card.id}
        //   key={card.id}
        // >
        <div
          draggable="true"
          onDragStart={drag}
          id={"card-" + card.id}
          key={card.id}
        >
          <KanbanCard cardInfo={card} />
          <Divider />
        </div>
        // </Style.CardWrapper>
      ))}
    </Style.Column>
  );
}

export default KanbanCol;
