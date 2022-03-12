export type UserId = string;

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

export type CardStatus = string;

export interface Card {
  id: CardId;
  project_id: ProjectId;
  title: string;
  deadline: string;
  status: CardStatus;
  content: string;
  user: User[] | number[];
}

export type ResponseResult = {
  code: number;
  error?: string;
};

export type ProjectId = string;

export interface Project {
  id: string;
  name: string;
  leader_id?: UserId;
  status: string;
  github?: string;
  roadmap: string;
  introduction: string;
  field_id?: ProjectField[];
}
