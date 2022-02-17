import { Card, User } from "constants/types";
import { useAppDispatch } from "hooks";
import React, { useState } from "react";
import { update } from "slices/cardSlice";
import { formatDate } from "utils/DateUtils";
import {
  Container,
  Title,
  Property,
  PropertyRow,
  NameTag,
  Detail,
} from "./KanbanCardStyles";

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
    <Container
      className={props.className}
      onClick={() => setIsEditing(true)}
      onBlurCapture={() => {
        console.log("hihi");
        console.log("title", title, "detail", detail);
        saveChange();
      }}
    >
      <Title
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        readOnly={isEditing ? false : true}
      />

      <div>
        <Property>
          {formatDate(new Date(props.cardInfo.deadline))} 까지
        </Property>
      </div>

      <PropertyRow>
        <Property>매니저</Property>

        {props.cardInfo.manager_id.map((user) => {
          if (typeof user !== "number") {
            return (
              <NameTag
                key={"mngr" + user.userId}
                // color={participantUser.color}
                tagName={user.name}
              />
            );
          }
        })}
      </PropertyRow>

      <PropertyRow>
        <Property>수행자</Property>

        {props.cardInfo.assigned_users.map((participantUser) => {
          if (typeof participantUser !== "number") {
            return (
              <NameTag
                key={"asgn" + participantUser}
                // color={participantUser.color}
                tagName={participantUser.name}
              />
            );
          }
        })}
      </PropertyRow>

      <Detail
        value={detail}
        onChange={(e) => setDetail(e.target.value)}
        readOnly={isEditing ? false : true}
      />
    </Container>
  );
}

export default KanbanCard;
