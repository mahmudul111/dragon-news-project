
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";
const SliderNews = () => {
    return (
        <div className="flex my-10">
            <button className="btn btn-secondary">Breaking News</button>
            <Marquee className="bg-slate-200" pauseOnHover={true} speed={100}>
    <Link className="mr-10" to='/'>Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...</Link>
    <Link className="mr-10" to='/'>Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...</Link>
    <Link className="mr-10" to='/'>Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...</Link>
</Marquee>
        </div>
    );
};

export default SliderNews;