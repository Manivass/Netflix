import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Browse from "./components/Browse";
import LoginPage from "./components/LoginPage";
const App = () => {
  const AppRouter = createBrowserRouter([
    {
      path: "/",
      element: <LoginPage />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
  ]);
  return (
    <div>
      <RouterProvider router={AppRouter} />
    </div>
  );
};

export default App;
