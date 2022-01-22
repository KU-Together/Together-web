import { URLS } from 'constants/urls'
import { createServer } from 'miragejs'
import { Card } from 'constants/types'

export default function makeServer({ environment = 'test' }) {
  return createServer({
    environment,
    routes() {
      this.get(URLS.together + 'cards', () => {
        const res: Card[] = [
          {
            id: 1,
            project_id: 1,
            title: '테스트중입니다',
            manager_id: [
              {
                userId: 1,
                name: '신지민',
              }
            ],
            deadline: new Date(),
            status: '진행중',
            content: '컨텐트 타입',
            assigned_users: [
              {
                userId: 2,
                name: '주권일',
              }
            ]
          }
        ]
        return res
      })
    }
  })
}