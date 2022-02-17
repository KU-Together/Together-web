export type UserId = number;

export type ProjId = number;

export type CardId = number;

export type ParticipantId = string;

export interface User {
  userId: UserId;
  name: string;
}

export type Participant = {
  participantId: ParticipantId;
  projId: ProjId;
  userId: UserId;
  color: string;
};

export type ParticipantUser = Participant & { user: User };

export interface Card {
  id: CardId;
  project_id: ProjId;
  title: string;
  manager_id: User[] | number[];
  deadline: string;
  status: string;
  content: string;
  assigned_users: User[] | number[];
}

export type ResponseResult = {
  code: number;
  error?: string;
};
