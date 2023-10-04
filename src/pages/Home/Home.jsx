import Header from "../Shared/Header/Header";
import LeftNav from "../Shared/LeftNav/LeftNav";
import Navbar from "../Shared/Navbar/Navbar";
import RightNav from "../Shared/RightNav/RightNav";
import SliderNews from "./SliderNews";


const Home = () => {
    return (
        <div className="max-w-5xl mx-auto font-poppins">
            <Header></Header>
            <SliderNews></SliderNews>
            <Navbar></Navbar>
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-5">
                <div className="border">
                    <LeftNav></LeftNav>
                </div>
                <div className="lg:col-span-2 border">
                    <h3 className="text-2xl text-center">News Coming soon...</h3>
                </div>
                <div className="border">
                    <RightNav></RightNav>
                </div>
            </div>
        </div>
    );
};

export default Home;