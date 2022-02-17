import { Card, User } from "constants/types";
import { useAppDispatch } from "hooks";
import React, { useState } from "react";
import { update } from "slices/cardSlice";
import { formatDate } from "utils/DateUtils";
import Style from "./KanbanCardStyles";

interface Props {
  className?: string;
  cardInfo: Card;
}

function KanbanCard(props: Props) {
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [title, setTitle] = useState(props.cardInfo.title);
  const [detail, setDetail] = useState(props.cardInfo.content);
  const dispatch = useAppDispatch();

  const saveChange = () => {
    setIsEditing(false);
    dispatch(
      update({
        ...props.cardInfo,
        title: title,
        content: detail,
      })
    );
  };

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
            value={formatDate(new Date(props.cardInfo.deadline))}
            onChange={(e) => console.log(e.target.value)}
          />{" "}
          까지
        </Style.Property>
      </div>

      <Style.PropertyRow>
        <Style.Property>매니저</Style.Property>

        {props.cardInfo.manager_id.map((user) => {
          if (typeof user !== "number") {
            return (
              <Style.NameTag
                key={"mngr" + user.userId}
                // color={participantUser.color}
                tagName={user.name}
              />
            );
          }
        })}
      </Style.PropertyRow>

      <Style.PropertyRow>
        <Style.Property>수행자</Style.Property>

        {props.cardInfo.assigned_users.map((participantUser) => {
          if (typeof participantUser !== "number") {
            return (
              <Style.NameTag
                key={"asgn" + participantUser}
                // color={participantUser.color}
                tagName={participantUser.name}
              />
            );
          }
        })}
      </Style.PropertyRow>

      <Style.Detail
        value={detail}
        onChange={(e) => setDetail(e.target.value)}
        readOnly={isEditing ? false : true}
      />
    </Style.Container>
  );
}

export default KanbanCard;
