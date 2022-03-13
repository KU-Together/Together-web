import styled, { css } from "styled-components";
import { bold } from "styles/typography";
import Tag from "components/tag/Tag";

const hoverCursor = css`
  &:hover {
    cursor: grab;
  }
`;

const Container = styled.div`
  ${hoverCursor}
  display: inline-block;
  box-sizing: border-box;
  padding: 15px;
  border-radius: 10px;
  width: 350px;
  box-shadow: 2px 2px 15px rgba(0, 0, 0, 0.29);
`;

interface TitleProps {
  visibleLines?: number;
}

const Title = styled.textarea<TitleProps>`
  ${bold}
  font-size: medium;
  margin: 0;
  padding: 0;
  -webkit-line-clamp: ${(props) => props.visibleLines};
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  white-space: pre-line;
  border: none;
  width: 100%;
`;

const Property = styled.span`
  font-size: small;
`;

interface DetailProps {
  visibleLines?: number;
}

const Detail = styled.textarea<DetailProps>`
  font-size: medium;
  margin: 15px 0 0 0;
  padding: 0;
  -webkit-line-clamp: ${(props) => props.visibleLines};
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  white-space: pre-line;
  border: none;
  width: 100%;
`;

const PropertyRow = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  margin-top: 3px;
  margin-bottom: 3px;
`;

const NameTag = styled(Tag)`
  margin-left: 3px;
  margin-right: 3px;
`;

export default {
  hoverCursor,
  Container,
  Title,
  Property,
  Detail,
  PropertyRow,
  NameTag,
};
