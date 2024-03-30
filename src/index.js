import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter, 
  RouterProvider
} from 'react-router-dom';
import { UserTable } from './components/user/UserTable';
import { BookTable } from './components/book/BookTable';
import { UserDetails } from './components/user/UserDetails';
import { UserReviews } from './components/review/UserReviewsTable';
import { Review } from './components/review/ReviewById';
import { UserLibraries } from './components/library/LibraryTable';
import { Library } from './components/library/LibraryById';
import { UserBookProgresses } from './components/bookProgresses/BookProgressTable';
import { BookProgress } from './components/bookProgresses/BookProgressId';
import { BookProgressReadings } from './components/reading/ReadingTable';
import { Reading } from './components/reading/ReadingById';

const router = createBrowserRouter([
  {
    path: "/users",
    element: <UserTable/>
  },
  {
    path: "/books",
    element: <BookTable/>
  },
  {
    path: "/user/:userId",
    element: <UserDetails/>
  },
  {
    path: "/user/:userId/reviews",
    element: <UserReviews/>
  },
  {
    path: "/review/:reviewId",
    element: <Review/>
  },
  {
    path: "/user/:userId/libraries",
    element: <UserLibraries/>
  },
  {
    path: "/library/:libraryId",
    element: <Library/>
  },
  {
    path: "/user/:userId/bookProgresses",
    element: <UserBookProgresses/>
  },
  {
    path: "/bookProgress/:bookProgressId",
    element: <BookProgress/>
  },
  {
    path: "/bookProgress/:bookProgressId/readings",
    element: <BookProgressReadings/>
  },
  {
    path: "/reading/:readingId",
    element: <Reading/>
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
