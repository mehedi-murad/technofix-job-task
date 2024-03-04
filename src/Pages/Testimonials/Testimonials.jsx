import { FaArrowRightLong } from "react-icons/fa6";
import Heading from "../../Components/Heading/Heading";
import image1 from "../../assets/images/vmware.png"
import image2 from "../../assets/images/docusign.png"
import image3 from "../../assets/images/frog.png"
import clientimg1 from "../../assets/images/client1.png"
import clientimg2 from "../../assets/images/client2.png"
import clientimg3 from "../../assets/images/client3.png"
import Paragraph from "../../Components/Paragraph/Paragraph";

const Testimonials = () => {
    return (
        <div className="my-20">
            <div className="text-center mb-6">
                <Heading title="Loved by the world's best teams" />
            </div>
            <div className="flex items-center gap-2 justify-center py-2 px-4 rounded-3xl border w-[280px] mx-auto">
                <h2>See all customer stories</h2>
                <FaArrowRightLong />
            </div>

            <div className="flex flex-col lg:flex-row gap-14 mt-12 p-4">
                <div className="space-y-4">
                    <img src={image1} alt="" />
                    <Paragraph description="“When the pandemic hit, those of us who thrive on in-person collaboration were worried that our creativity and productivity would suffer. Miro was the perfect tool to help us with collaboration, whiteboarding, and retrospectives while remote.”" />
                    <div className="flex items-center gap-4 pt-7">
                        <img src={clientimg1} alt="" />
                        <div className="text-gray-400">
                            <h2>Roxanne Mustafa</h2>
                            <p>Design Team Lead at VMware</p>
                        </div>
                    </div>
                </div>
                <div className="space-y-4">
                    <img src={image2} alt="" />
                    <Paragraph description="“Miro helps solve one of the major gaps in product design: how to manage tasks across product designers whose projects are in different tools.”" />
                    <div className="flex items-center gap-4 pt-7">
                        <img src={clientimg2} alt="" />
                        <div className="text-gray-400">
                            <h2>Jane Ashley</h2>
                            <p>Head of Design at DocuSign</p>
                        </div>
                    </div>
                </div>
                <div className="space-y-4">
                    <img src={image3} alt="" />
                    <Paragraph description="“As we used Miro we moved from skepticism to belief to innovation, and now we have a tool that’s at the core of what we do and will continue to extend into the future.”" />
                    <div className="flex items-center gap-4 pt-7">
                        <img src={clientimg3} alt="" />
                        <div className="text-gray-400">
                            <h2>Laura Baird</h2>
                            <p>Associate Design Director at frog</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonials;