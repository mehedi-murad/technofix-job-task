import { Link } from "react-router-dom";
import Paragraph from "../../Components/Paragraph/Paragraph";
import { FaArrowRightLong } from "react-icons/fa6";
import brainstormImg from "../../assets/images/brainstorm.png"
import Heading from "../../Components/Heading/Heading";
import Category from "../../Components/Category/Category";

const Built = () => {
    return (
        <div className="my-32">
            <div>
                <Heading title="Built for the way you work" />
            </div>
            <div>
                <Category></Category>
            </div>
            <div className="flex flex-col md:flex-row gap-10 mt-12">
                <div className="md:w-[40%] space-y-8 pr-20 mt-5">
                    <h2 className="text-[22px] font-medium">Brainstorm</h2>
                    <Paragraph description="Unleash creative ideas and build on them with the help of sticky notes, images, mind maps, videos, drawing capabilities — the list goes on."></Paragraph>

                    <div className="flex gap-4 items-center text-blue-500">
                        <Link>
                            <h2>Learn more</h2>
                        </Link>
                        <FaArrowRightLong />
                    </div>
                </div>
                <div className="md:w-[60%]">
                    <img src={brainstormImg} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Built;