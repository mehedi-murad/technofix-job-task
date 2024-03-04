import Button from "../../Components/Button/Button";
import Heading from "../../Components/Heading/Heading";
import Paragraph from "../../Components/Paragraph/Paragraph";
import stickerImg from "../../assets/images/sticker.png"

const Collaborate = () => {
    return (
        <div className="my-40 relative">
            <div className="text-center mb-8 md:w-[550px] mx-auto">
                <Heading title="Collaborate without constraints"></Heading>
            </div>
            <div className="flex flex-col md:flex-row gap-10 p-4">
                <div className="space-y-8">
                    <h2 className="text-2xl font-bold text-[#050038]">Free forever</h2>
                    <Paragraph description="Our free plan gives you unlimited team members, 3 boards, and 300+ expert-made templates. Signing up with your work email lets you bring in your team faster. See our pricing plans for more features."></Paragraph>
                </div>
                <div className="space-y-8">
                    <h2 className="text-2xl font-bold text-[#050038]">Easy integrations</h2>
                    <Paragraph description="Miro has 100+ powerful integrations with tools you already use like G Suite, Slack, and Jira, so your workflow is seamless. View the full list in our Marketplace ."></Paragraph>
                </div>
                <div className="space-y-8">
                    <h2 className="text-2xl font-bold text-[#050038]">Security first</h2>
                    <Paragraph description="We treat your data like you would — with the utmost care. We follow industry-leading security standards and give you tools to protect intellectual property. Learn more at our Trust Center ."></Paragraph>
                </div>
            </div>
            <div className="w-64 mx-auto mt-20">
                <Button heading="Sign up free"></Button>
            </div>
            <div className="absolute md:top-[-19%] top-[-8%] right-[24%]">
                <img src={stickerImg} alt="" />
            </div>
        </div>
    );
};

export default Collaborate;