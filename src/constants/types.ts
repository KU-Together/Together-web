export type UserId = number

export type ProjId = number

export type CardId = number

export type ParticipantId = string

export type User = {
  userId: UserId,
  name: string,
}

export type Participant = {
  participantId: ParticipantId,
  projId: ProjId,
  userId: UserId,
  color: string
}

export type ParticipantUser = Participant & { user: User }

export type Card = {
  id: CardId,
  project_id: ProjId,
  title: string,
  manager_id: User[],
  deadline: Date,
  status: string,
  content: string,
  assigned_users: User[]
}