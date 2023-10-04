import logo from '../../../assets/logo.png'
import moment from 'moment';


const Header = () => {
    return (
        <div>
        <img className='mx-auto mt-10 mb-6' src={logo} alt="" />
        <p className='text-xl text-center text-gray-600 mb-3'>Journalism Without Fear or Favour</p>
        <p className='text-xl text-center text-gray-600'>{moment().format("dddd, MMMM D, YYYY")}</p>
        </div>
    );
};

export default Header;