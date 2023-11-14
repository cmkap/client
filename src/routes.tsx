import { createBrowserRouter } from "react-router-dom";

import Layout from "./pages/Layout";
import HomePage from "./pages/HomePage";
import ErrorPage from "./pages/ErrorPage";
import ChatPage from "./pages/ChatPage";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage />,
    element: <Layout />,
    children: [
        { index: true, element: <HomePage />},
        // { path: 'chat/:slug', element: <ChatPage />},
        { path: 'chat/', element: <ChatPage />},
    
    ]
  },
]);

export default router;