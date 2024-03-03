import { Link } from "react-router-dom";
import Heading from "../../Components/Heading/Heading";
import { FaArrowRightLong } from "react-icons/fa6";
import divImg from "../../assets/images/div.png"
import CourseCategory from "../../Components/CourseCategory/CourseCategory";
import tickIcon from "../../assets/images/tick.png"
import logo from "../../assets/images/logoIcon.png"


const Teams = () => {
    return (
        <div className="my-32">
            <div>
                <Heading title="Built for all kinds of teams" />
            </div>
            <div>
                <CourseCategory></CourseCategory>
            </div>
            <div className="flex gap-10 mt-12">
                <div className="w-[40%] space-y-8 pr-20 mt-5">
                    <div className="space-y-6">
                        <div className="flex items-center gap-3">
                            <img src={tickIcon} alt="" />
                            <p className="text-gray-400">Build low-fi wireframes</p>
                        </div>
                        <div className="flex items-center gap-3">
                            <img src={tickIcon} alt="" />
                            <p className="text-gray-400">Involve stakeholders in the design process</p>
                        </div>
                        <div className="flex items-center gap-3">
                            <img src={tickIcon} alt="" />
                            <p className="text-gray-400">Run engaging design workshops</p>
                        </div>
                    </div>

                    <div className="flex gap-4 items-center text-blue-500">
                        <Link>
                            <h2>Learn more</h2>
                        </Link>
                        <FaArrowRightLong />
                    </div>

                    <div>
                        <p>Integrate your favorite tools</p>
                        <img src={logo} alt="" />
                    </div>
                </div>
                <div className="w-[60%]">
                    <img src={divImg} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Teams;