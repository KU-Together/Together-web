export type UserId = number;

export type ProjectId = string;

export type CardId = number;

export type ParticipantId = string;

export interface User {
  userId: UserId;
  name: string;
}

export type Participant = {
  participantId: ParticipantId;
  projId: ProjectId;
  userId: UserId;
  color: string;
};

export type ParticipantUser = Participant & { user: User };

export interface Card {
  id: CardId;
  project_id: ProjectId;
  title: string;
  deadline: string;
  status: string;
  content: string;
  user: User[] | number[];
}

export type ResponseResult = {
  code: number;
  error?: string;
};
