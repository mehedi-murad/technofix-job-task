import Navbar from "../../Components/Navbar/Navbar";
import Banner from "../Banner/Banner";
import Built from "../Built/Built";
import Collaborate from "../Collaborate/Collaborate";
import Connect from "../Connect/Connect";
import Section from "../Section/Section";
import Teams from "../Teams/Teams";
import Testimonials from "../Testimonials/Testimonials";
import Together from "../Together/Together";
import Trusted from "../Trusted/Trusted";


const Home = () => {
    return (
        <div className="max-w-7xl mx-auto font-inter">
            <Navbar></Navbar>
            <div className="max-w-[1140px] mx-auto">
                <Banner></Banner>
                <Trusted></Trusted>
                <Collaborate></Collaborate>
                <Together></Together>
                <Connect></Connect>
                <Section></Section>
                <Built></Built>
                <Teams></Teams>
                <Testimonials></Testimonials>
            </div>
            
        </div>
    );
};

export default Home;