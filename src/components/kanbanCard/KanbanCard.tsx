import { Card, User } from "constants/types";
import { useAppDispatch } from "hooks/reduxHooks";
import React, { useEffect, useState } from "react";
import { modifyCard } from "slices/cardSlice";
import { formatDate } from "utils/DateUtils";
import Style from "./KanbanCard.style";

interface Props {
  className?: string;
  cardInfo: Card;
}

function KanbanCard(props: Props) {
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [title, setTitle] = useState(props.cardInfo.task_title);
  const [detail, setDetail] = useState(props.cardInfo.task_detail);
  const [deadline, setDeadline] = useState(props.cardInfo.deadline);
  const dispatch = useAppDispatch();

  const saveChange = () => {
    setIsEditing(false);
    dispatch(
      modifyCard({
        ...props.cardInfo,
        task_title: title,
        task_detail: detail,
        deadline: deadline,
      })
    );
  };

  useEffect(() => {
    saveChange();
  }, [deadline]);

  return (
    <Style.Container
      className={props.className}
      onClick={() => setIsEditing(true)}
      onBlurCapture={() => saveChange()}
    >
      <Style.Title
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        readOnly={isEditing ? false : true}
      />

      <div>
        <Style.Property>
          <input
            type="date"
            value={formatDate(new Date(deadline))}
            onChange={(e) => setDeadline(e.target.value)}
          />{" "}
          까지
        </Style.Property>
      </div>

      <Style.Detail
        value={detail}
        onChange={(e) => setDetail(e.target.value)}
        readOnly={isEditing ? false : true}
      />
    </Style.Container>
  );
}

export default KanbanCard;
