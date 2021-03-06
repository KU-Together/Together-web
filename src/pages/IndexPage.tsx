import React from "react";
import { Link, Outlet } from "react-router-dom";

function IndexPage() {
  return (
    <div>
      <Link to="/main/a7b69446-0954-4906-96ee-815627841ce2">
        메인 테스트 페이지
      </Link>
      <br />
      <Link to="/sign-up">회원가입 페이지</Link>
      <Outlet />
    </div>
  );
}

export default IndexPage;
