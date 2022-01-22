import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SignUpPage from 'components/pages/SignUpPage'
import IndexPage from 'components/pages/IndexPage'
import NotFoundPage from 'components/pages/NotFoundPage'
import MainPage from 'components/pages/mainPage/MainPage'
import { Provider } from 'react-redux'
import { store } from 'store'
import makeServer from 'server'

makeServer({ environment: 'development'})

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<IndexPage />}>
            <Route path="main" element={<MainPage />} />
            <Route path="sign-up" element={<SignUpPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
