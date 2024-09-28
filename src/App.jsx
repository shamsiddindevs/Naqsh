import { createBrowserRouter,createRoutesFromElements,Route,RouterProvider } from "react-router-dom";
import HomeLayout from "./layout/HomeLayout";
// import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import Team from "./pages/Team";
import Info from "./pages/Info";
import NoPage from "./pages/NoPage";


function App() {
  const routes = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<HomeLayout/>} >     
        <Route index element={<Portfolio/>}/>
        <Route path="team" element={<Team/>}/>
        <Route path="info" element={<Info/>}/>
        <Route path="*" element={<NoPage/>}/>
      </Route>
    )
  )


  return (
    <>
      <RouterProvider router={routes}/>
    </>
  );
}

export default App;
