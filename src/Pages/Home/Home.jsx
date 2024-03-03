import Navbar from "../../Components/Navbar/Navbar";
import Banner from "../Banner/Banner";
import Collaborate from "../Collaborate/Collaborate";
import Trusted from "../Trusted/Trusted";


const Home = () => {
    return (
        <div className="max-w-7xl mx-auto font-inter">
            <Navbar></Navbar>
            <div className="max-w-[1140px] mx-auto">
                <Banner></Banner>
                <Trusted></Trusted>
                <Collaborate></Collaborate>
            </div>
            
        </div>
    );
};

export default Home;