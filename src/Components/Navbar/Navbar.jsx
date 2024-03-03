import { FaArrowRightLong, FaGlobe } from "react-icons/fa6";
import mainLogo from '../../assets/images/logo.png'
const Navbar = () => {
    return (
        <div className="navbar bg-base-100 border-b-2 border-gray-200 px-4">
            <div className="navbar-start">
                <div className="dropdown">
                <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </div>
                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                    
                    <li>
                    <a>Product</a>
                        <ul className="p-2">
                            <li><a>Submenu 1</a></li>
                            <li><a>Submenu 2</a></li>
                        </ul>
                    </li>
                    <li>
                    <a>Solutions</a>
                        <ul className="p-2">
                            <li><a>Submenu 1</a></li>
                            <li><a>Submenu 2</a></li>
                        </ul>
                    </li>
                    <li>
                    <a>Resources</a>
                        <ul className="p-2">
                            <li><a>Submenu 1</a></li>
                            <li><a>Submenu 2</a></li>
                        </ul>
                    </li>
                    <li><a>Enterprise</a></li>
                    <li><a>Pricing</a></li>
                </ul>
                </div>
            <div className="flex items-center justify-center">
                    <img src={mainLogo} alt="" />
                    <div className="navbar-center hidden lg:flex mt-2">
                        <ul className="menu menu-horizontal px-1 font-semibold">
                        <li>
                            <details>
                            <summary>Product</summary>
                            <ul className="p-2">
                                <li><a>Submenu 1</a></li>
                                <li><a>Submenu 2</a></li>
                            </ul>
                            </details>
                        </li>
                        <li>
                            <details>
                            <summary>Solutions</summary>
                            <ul className="p-2">
                                <li><a>Submenu 1</a></li>
                                <li><a>Submenu 2</a></li>
                            </ul>
                            </details>
                        </li>
                        <li>
                            <details>
                            <summary>Resources</summary>
                            <ul className="p-2">
                                <li><a>Submenu 1</a></li>
                                <li><a>Submenu 2</a></li>
                            </ul>
                            </details>
                        </li>
                        <li><a>Enterprise</a></li>
                        <li><a>Pricing</a></li>
                        </ul>
                    </div>
            </div>
            </div>

            <div className="navbar-end">
                <div className="hidden lg:flex">
                    <ul className='flex gap-6'>
                        <div className="flex gap-2 items-center">
                            <FaGlobe />
                            <li>EN</li>
                        </div>
                        <li>Contact Sales</li>
                        <li>login</li>
                    </ul>
                </div>
                <div className="bg-[#4262FF] text-white flex items-center gap-2 justify-center py-2 px-4 rounded-3xl ml-4">
                    <h2>Sign up free</h2>
                    <FaArrowRightLong />
                </div>
            </div>
        </div>
    );
};

export default Navbar;