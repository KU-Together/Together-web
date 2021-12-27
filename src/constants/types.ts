export type UserId = string

export type ProjId = string

export type CardId = string

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
  cardID: CardId,
  projId: ProjId,
  title: string,
  endDate: Date,
  manager: ParticipantUser[],
  assign: ParticipantUser[],
  detail: string
}