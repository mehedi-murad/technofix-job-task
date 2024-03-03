import { FaArrowRightLong } from "react-icons/fa6";
import Heading from "../../Components/Heading/Heading";
import Paragraph from "../../Components/Paragraph/Paragraph";
import hybridImg from "../../assets/images/hybrid.png"
import { Link } from "react-router-dom";

const Together = () => {
    return (
        <div className="mb-20">
            <div className="flex gap-10 items-center">
                <div className="flex-1 space-y-8 pr-20">
                    <Heading title="Work together, wherever you work"></Heading>
                    <Paragraph description="In the office, remote, or a mix of the two, with Miro, your team can connect, collaborate, and co-create in one space no matter where you are."></Paragraph>

                    <div className="flex gap-4 items-center text-blue-500">
                        <Link>
                            <h2>Learn more</h2>
                        </Link>
                        <FaArrowRightLong />
                    </div>
                </div>
                <div className="flex-1">
                    <img src={hybridImg} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Together;