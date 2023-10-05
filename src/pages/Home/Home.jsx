import { useLoaderData } from "react-router-dom";
import Header from "../Shared/Header/Header";
import LeftNav from "../Shared/LeftNav/LeftNav";
import Navbar from "../Shared/Navbar/Navbar";
import RightNav from "../Shared/RightNav/RightNav";
import SliderNews from "./SliderNews";
import NewsCards from "./NewsCards";


const Home = () => {
    const news = useLoaderData()
    console.log(news)
    return (
        <div className="max-w-5xl mx-auto font-poppins">
            <Header></Header>
            <SliderNews></SliderNews>
            <Navbar></Navbar>
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-5">
                <div>
                    <LeftNav></LeftNav>
                </div>
                <div className="lg:col-span-2 ">
                    {
                        news.map(aNews =><NewsCards
                        key={aNews._id}
                        news ={aNews}
                        ></NewsCards>)
                    }
                </div>
                <div>
                    <RightNav></RightNav>
                </div>
            </div>
        </div>
    );
};

export default Home;