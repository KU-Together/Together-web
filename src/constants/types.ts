export type UserId = string;

export type ProjectId = string;

export type CardId = number;

export type ParticipantId = string;

export interface User {
  id: UserId;
  email: string;
  password: string;
  name: string;
  nickname: string;
  major: string;
  area: string;
  introduction: string;
  interesting_fields?: Field[];
  project_fields: ProjectField[];
}

export type FieldId = string;

export interface Field {
  id: FieldId;
  name: string;
  user: UserId[];
  project: ProjectId[];
}

export interface ProjectField {
  id?: number;
  numOfPeople: number;
  project_id: ProjectId;
  field_id: FieldId;
  user_id?: number[];
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
