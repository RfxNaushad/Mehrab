import { Outlet, ScrollRestoration } from "react-router-dom";
import MainPage from "../pages/MainPage";
import Footer from "./Footer";


export default function RootLayout() {
  return (
   <>
   <div>
   <ScrollRestoration />
   </div>
    <div>
        <MainPage/>
    </div>
    <div>
        <Outlet/>
    </div>
    <div>
        <Footer/>
    </div>
   </>
  )
}
