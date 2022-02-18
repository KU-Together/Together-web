import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUpPage from "pages/SignUpPage";
import IndexPage from "pages/IndexPage";
import NotFoundPage from "pages/NotFoundPage";
import Main from "pages/main/Main";
import makeServer from "server";
import { useDispatch, useSelector } from "react-redux";
import { getUser, selectUser } from "slices/userSlice";

// makeServer({ environment: 'development'})

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const testUserId = "842dbd0c-0c50-4329-88ac-8c133ccc13f0";
    dispatch(getUser(testUserId));
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<IndexPage />}>
          <Route path="main" element={<Main />} />
          <Route path="sign-up" element={<SignUpPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
