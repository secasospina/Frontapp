import { HomePage } from "./pages/home.page"
import {
  createBrowserRouter,
  RouterProvider,
  Navigate
} from "react-router-dom";
import { MosDisLikedPage } from "./pages/mosDisLiked.page";
import { LastEvaluatedPage } from "./pages/lastEvaluades.page";
import { MosLikedPage } from "./pages/mosLiked.page";
const router = createBrowserRouter([
  {
    path: "/home",
    element: <HomePage/>
  },
  {
    path:'/mos-liked',
    element: <MosLikedPage />
  },
  {
    path:'/mos-disliked',
    element: <MosDisLikedPage />
  },
  {
    path:'/last-evaluated',
    element: <LastEvaluatedPage />
  },
  {
    path:'*',
    element:<Navigate to={'/home'} />
  }
]);
function App() {
  return (
      <>
        <RouterProvider router={router} />
      </> 
  )
}

export default App
