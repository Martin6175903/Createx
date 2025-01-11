import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.scss'
import App from './App.tsx'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "@/pages/ErrorPage.tsx";
import AboutUs from "@/pages/AboutUs.tsx";
import Homepage from "@/pages/Homepage.tsx";
import Blog from "@/pages/Blog.tsx";
import Contacts from "@/pages/Contacts.tsx";
import Course from "@/pages/Course.tsx";
import Courses from "@/pages/courses/Courses.tsx";
import Event from "@/pages/Event.tsx";
import EventsGridView from "@/pages/EventsGridView.tsx";
import EventsListView from "@/pages/EventsListView.tsx";
import SinglePost from "@/pages/SinglePost.tsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        errorElement: <ErrorPage/>,
        children: [
            {
                path: "/",
                element: <Homepage/>
            },
            {
                path: "about",
                element: <AboutUs/>
            },
            {
                path: "blog",
                element: <Blog/>
            },
            {
                path: "contacts",
                element: <Contacts/>
            },
            {
                path: "course",
                element: <Course/>
            },
            {
                path: "courses",
                element: <Courses/>
            },
            {
                path: "event",
                element: <Event/>
            },
            {
                path: "events-grid-view",
                element: <EventsGridView/>
            },
            {
                path: "events-list-view",
                element: <EventsListView/>
            },
            {
                path: "single-post",
                element: <SinglePost/>
            }
        ]
    }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <RouterProvider router={router}/>
  </StrictMode>
)
