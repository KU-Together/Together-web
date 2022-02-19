import { css } from "styled-components";

const pretendard =
  "Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, 'Helvetica Neue', 'Segoe UI', 'Apple SD Gothic Neo', 'Noto Sans KR', 'Malgun Gothic', sans-serif";

export const theme = {
  font_title: css`
    font-family: ${pretendard};
    font-weight: 600;
    font-size: 18px;
  `,
  font_content: css`
    font-family: ${pretendard};
    font-weight: 300;
    font-size: 16px;
  `,
  font_additional: css`
    font-family: ${pretendard};
    font-weight: 300;
    font-size: 14px;
  `,
};
