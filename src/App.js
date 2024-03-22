import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
// import Body from "./components/Body";
import Browse from "./components/Browse";
import LoginContainer from "./components/LoginContainer";





function App() {

  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <LoginContainer />,
     
    },
    {
      path: "/browse",
      element: <Browse />,
    },
    // {
    //   path: "/signin",
    //   element: <LoginContainer />,
    // },
    {
      path: "/signup",
      element: <LoginContainer />,
    },
 
  ]);

  return (
    <div className="App">
    
      <RouterProvider router={appRouter} />
    </div>
  );
}

export default App;
