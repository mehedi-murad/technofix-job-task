import Button from "../../Components/Button/Button";
import sectionImg from "../../assets/images/section.png"

const Section = () => {
    return (
        <div className="md:max-w-[1020px] mx-auto relative p-4">
            <div>
                <img src={sectionImg} alt="" />
            </div>
            <div className="text-center space-y-3 absolute md:top-[40%] md:left-[60%]">
                <h2 className="text-[22px] font-bold">The Ways We Work</h2>
                <p>How has our relationship with work changed?</p>
                <div className="w-[170px] mx-auto">
                    <Button heading="View the report"></Button>
                </div>
            </div>
        </div>
    );
};

export default Section;