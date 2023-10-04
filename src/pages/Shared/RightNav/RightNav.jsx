import { FaGoogle, FaGithub, FaFacebook, FaTwitter, FaInstagram} from 'react-icons/fa';
import qZone1 from "../../../assets/qZone1.png"
import qZone2 from "../../../assets/qZone2.png"
import qZone3 from "../../../assets/qZone3.png"

const RightNav = () => {
    return (
        <div>
            <div className='p-3 space-y-3 mb-6'>
            <h2 className="text-3xl font-bold my-5">Login with</h2>
            <button className='btn btn-outline my-2 w-full'>
                <FaGoogle></FaGoogle>
                Login with google</button>
            <button className='btn btn-outline my-2 w-full'>
                <FaGithub></FaGithub>
                Login with github</button>
        </div>
            <div className='p-3 mb-6'>
            <h2 className="text-3xl font-bold mb-4">Find us on</h2>
            <a className='flex p-4 items-center gap-2 border rounded-t-lg text-lg font-semibold' href="www.facebook.com">
                <FaFacebook></FaFacebook>
                Facebook</a>
            <a className='flex p-4 items-center gap-2 border-x text-lg font-semibold' href="www.facebook.com">
                <FaTwitter></FaTwitter>
                Twitter</a>
            <a className='flex p-4 items-center gap-2 border rounded-b-lg text-lg font-semibold' href="www.facebook.com">
                <FaInstagram></FaInstagram>
                Instagram</a>
        </div>
            <div className='p-3 mb-6'>
            <h2 className="text-3xl font-bold mb-4">Q-Zone</h2>
            <img src={qZone1} alt="" />
            <img src={qZone2} alt="" />
            <img src={qZone3} alt="" />
        </div>

        
        </div>
    );
};

export default RightNav;