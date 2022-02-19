import { URLS } from "constants/urls";
import { createServer } from "miragejs";
import { Card } from "constants/types";

export default function makeServer({ environment = "test" }) {
  return createServer({
    environment,
    routes() {
      const now = new Date();
      const cards: Card[] = [
        {
          id: 1,
          project_id: "1",
          title: "테스트중입니다",
          deadline: now.toString(),
          status: "진행중",
          content: "컨텐트 타입",
          user: [
            {
              id: "2",
              email: "email@email.com",
              password: "asdf",
              name: "주권일",
              nickname: "주권일",
              major: "컴퓨터정보학",
              area: "백엔드",
              introduction: "안녕하세요",
              project_fields: [],
            },
          ],
        },
      ];

      this.get(URLS.together + "/cards", () => {
        return cards;
      });

      let newCardId = 2;
      this.post(URLS.together + "/cards", (schema, request) => {
        let attrs: Card = JSON.parse(request.requestBody);
        attrs.id = newCardId++;
        cards.push(attrs);
        return { code: 201 };
      });
    },
  });
}
