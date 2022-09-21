import Header from "../components/header/Header";
import Preview from "../components/preview/Preview";
import Special from "../components/special/Special";
import Menu from "../components/menu/Menu";
import About from "../components/about/About";
import WorkTime from "../components/workTime/WorkTime";
import Review from "../components/review/Review";
import Feedback from "../components/feedback/Feedback";
import Footer from "../components/footer/Footer";
import CartModal from "../components/cart/CartModal";
import { Box } from "@mui/material";
import ErrorPage from "./ErrorPage";
import { useGetCategoryQuery, useGetSpecialQuery } from "../store/api/sushiApi";

const Main = () => {
    

    return (
        <Box sx={{position: "relative"}}>
            <Header/>
            <Preview/>
            <Special/>
            <Menu/>
            <About/>
            <WorkTime/>
            <Review/>
            <Feedback/>
            <Footer/>
            <CartModal/>
        </Box>
    )
}
export default Main;