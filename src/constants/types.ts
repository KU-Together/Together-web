export type UserId = number;

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

export type CardStatus = "to-do" | "in-progress" | "completed" | "terminated";

export interface Card {
  id: CardId;
  task_title: string;
  deadline: string;
  task_detail: string;
  is_memorable: boolean;
  emoji: string;
  prev_card: number | null;
  user_id: UserId;
  status: CardStatus;
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
