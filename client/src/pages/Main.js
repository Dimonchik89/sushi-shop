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
import CartStack from "../components/cart/CartStack";
import useHandleChangeWindow from "../hook/useHandleChangeWindow"; 
import { useNavigate } from "react-router-dom";

const Main = () => {
    const { open, handleOpen, handleClose } = useHandleChangeWindow();

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
            <CartModal handleOpen={handleOpen}/>
            <CartStack open={open} handleClose={handleClose}/>
            {/* <a
                href="http://admin.localhost:3000/login"
                target="_blank"
            >
                Admin
            </a> */}
        </Box>
    )
}
export default Main;