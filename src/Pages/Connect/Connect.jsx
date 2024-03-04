import { Link } from "react-router-dom";
import Heading from "../../Components/Heading/Heading";
import Paragraph from "../../Components/Paragraph/Paragraph";
import { FaArrowRightLong } from "react-icons/fa6";
import m3Img from "../../assets/images/m3.png"

const Connect = () => {
    return (
        <div className="mb-20">
            <div className="flex flex-col-reverse md:flex-row gap-20 items-center p-4">
                <div className="flex-1">
                    <img src={m3Img} alt="" />
                </div>
                <div className="flex-1 space-y-8">
                    <Heading title="Connect your tools, close your tabs"></Heading>
                    <Paragraph description="Whether you want to edit your Google Docs, resolve Jira issues, or collaborate over Zoom, Miro has 100+ integrations with tools you already use and love."></Paragraph>

                    <div className="flex gap-4 items-center text-blue-500">
                        <Link>
                            <h2>Learn more</h2>
                        </Link>
                        <FaArrowRightLong />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Connect;