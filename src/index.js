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
import { BookForm } from './components/book/CreateBook';
import { MainPage } from './components/mainPage/MainPage';
import { UserForm } from './components/user/CreateNewUser';
import { LibraryForm } from './components/library/CreateNewLibrary';
import { ReadingForm } from './components/reading/CreateNewReading';
import { ReviewBookTable } from './components/review/SelectBookForReview';
import { ReviewForm } from './components/review/CreateNewReview';
import { BookProgressBookTable } from './components/bookProgresses/BookProgressBookTable';
import { ManageBooks } from './components/library/ManageBooksTable';
import { AddBook } from './components/library/AddBookTable';
import { createTheme, MantineProvider, virtualColor } from '@mantine/core';
import '@mantine/core/styles.css';


const myColor = [
  [
    '#f6f8fa'
  ]
]

const theme = createTheme({
  colors: {
    myColor
  },
});


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage/>
  },
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
  },
  {
    path: "/book/create",
    element: <BookForm/>
  },
  {
    path: "/user/create",
    element: <UserForm/>
  },
  {
    path: "/user/:userId/library/create",
    element: <LibraryForm/>
  },
  {
    path: "/bookProgress/:bookProgressId/read/create",
    element: <ReadingForm/>
  },
  {
    path: "/user/:userId/books/review",
    element: <ReviewBookTable/>
  },
  {
    path: "/user/:userId/book/:bookId/review/create",
    element: <ReviewForm/>
  },
  {
    path: "/user/:userId/books/bookProgress",
    element: <BookProgressBookTable/>
  },
  {
    path: "/library/:libraryId/manageBooks",
    element: <ManageBooks/>
  },
  {
    path: "/library/:libraryId/addBooks",
    element: <AddBook/>
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
      <MantineProvider theme={theme}>
        <RouterProvider router={router}/>
      </MantineProvider>
    </React.StrictMode>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
