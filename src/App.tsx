import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUpPage from "pages/SignUpPage";
import IndexPage from "pages/IndexPage";
import NotFoundPage from "pages/NotFoundPage";
import Main from "pages/main/Main";
import { Provider } from "react-redux";
import { store } from "store";
import makeServer from "server";

// makeServer({ environment: 'development'})

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<IndexPage />}>
            <Route path="main" element={<Main />} />
            <Route path="sign-up" element={<SignUpPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
