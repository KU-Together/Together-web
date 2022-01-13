import { Card, Participant, User } from 'constants/types'

export const userData: User[] = [
  {
    userId: 'u123',
    name: '신지민',
  },
  {
    userId: 'u456',
    name: '박종민',
  },
  {
    userId: 'u789',
    name: '주권일',
  }
]

export const participantData: Participant[] = [
  {
    participantId: 'pcps1',
    projId: 'p1',
    userId: 'u123',
    color: 'pink',
  },
  {
    participantId: 'pcps2',
    projId: 'p1',
    userId: 'u456',
    color: '#DFBAF5',
  },
  {
    participantId: 'pcps3',
    projId: 'p1',
    userId: 'u789',
    color: '#CAEBCE',
  }
]

export const cardData: Card[] = [
  {
    id: 'c1',
    project_id: 'p1',
    title: '이것은 태스크입니다.\n태스크태스크\n태스크\n',
    deadline: new Date(),
    manager_id: [
      {
        participantId: 'pcps1',
        projId: 'p1',
        userId: 'u123',
        color: 'pink',
        user: {
          userId: 'u123',
          name: '신지민',
        }
      }
    ],
    assigned_users: [
      {
        participantId: 'pcps1',
        projId: 'p1',
        userId: 'u123',
        color: 'pink',
        user: {
          userId: 'u123',
          name: '신지민',
        }
      },
      {
        participantId: 'pcps2',
        projId: 'p1',
        userId: 'u456',
        color: '#DFBAF5',
        user: {
          userId: 'u456',
          name: '박종민',
        }
      },
      {
        participantId: 'pcps3',
        projId: 'p1',
        userId: 'u789',
        color: '#CAEBCE',
        user: {
          userId: 'u789',
          name: '주권일',
        }
      }
    ],
    content: '이것은 디테일입니다.\n디테일디테일디테일디테일디테일디테일\n디테일디테일디테일'
  },
  {
    id: 'c2',
    project_id: 'p1',
    title: '이것은 태스크입니다.\n태스크태스크\n태스크\n',
    deadline: new Date(),
    manager_id: [
      {
        participantId: 'pcps1',
        projId: 'p1',
        userId: 'u123',
        color: 'pink',
        user: {
          userId: 'u123',
          name: '신지민',
        }
      }
    ],
    assigned_users: [
      {
        participantId: 'pcps1',
        projId: 'p1',
        userId: 'u123',
        color: 'pink',
        user: {
          userId: 'u123',
          name: '신지민',
        }
      },
      {
        participantId: 'pcps2',
        projId: 'p1',
        userId: 'u456',
        color: '#DFBAF5',
        user: {
          userId: 'u456',
          name: '박종민',
        }
      },
      {
        participantId: 'pcps3',
        projId: 'p1',
        userId: 'u789',
        color: '#CAEBCE',
        user: {
          userId: 'u789',
          name: '주권일',
        }
      }
    ],
    content: '이것은 디테일입니다.\n디테일디테일디테일디테일디테일디테일\n디테일디테일디테일'
  },
  {
    id: 'c3',
    project_id: 'p1',
    title: '이것은 태스크입니다.\n태스크태스크\n태스크\n',
    deadline: new Date(),
    manager_id: [
      {
        participantId: 'pcps1',
        projId: 'p1',
        userId: 'u123',
        color: 'pink',
        user: {
          userId: 'u123',
          name: '신지민',
        }
      }
    ],
    assigned_users: [
      {
        participantId: 'pcps1',
        projId: 'p1',
        userId: 'u123',
        color: 'pink',
        user: {
          userId: 'u123',
          name: '신지민',
        }
      },
      {
        participantId: 'pcps2',
        projId: 'p1',
        userId: 'u456',
        color: '#DFBAF5',
        user: {
          userId: 'u456',
          name: '박종민',
        }
      },
      {
        participantId: 'pcps3',
        projId: 'p1',
        userId: 'u789',
        color: '#CAEBCE',
        user: {
          userId: 'u789',
          name: '주권일',
        }
      }
    ],
    content: '이것은 디테일입니다.\n디테일디테일디테일디테일디테일디테일\n디테일디테일디테일'
  },
]