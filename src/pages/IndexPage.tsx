import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function IndexPage() {
  return (
    <div>
      <Link to="/main">메인 페이지</Link>
      <br />
      <Link to="/sign-up">회원가입 페이지</Link>
      <Outlet />
    </div>
  )
}

export default IndexPage
