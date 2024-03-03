import starIcon from "../../assets/images/star.png";
import Icon from "../../assets/images/icon logo.png";
import BannerImg from "../../assets/images/bannerImg.png";
import Button from "../../Components/Button/Button";

const Banner = () => {
  return (
    <div className="max-w-[1140px] mx-auto m-20">
      <div className="flex flex-col lg:flex-row gap-10">
        <div className="flex-1 space-y-6">
          <h1 className="font-bold text-5xl w-[376px]">
            Take ideas from better to best
          </h1>
          <p className="text-lg w-[428px]">
            Miro is your team's visual platform to connect, collaborate, and
            create — together.
          </p>

          <div className="space-y-2 w-[440px]">
            <input
              type="text"
              placeholder="Enter your work email"
              className="input input-bordered w-full rounded-full"
            />
            <Button heading="Sign up free"></Button>
            <p className="text-sm text-gray-400">Collaborate with your team within minutes</p>
          </div>

          <div className="flex bg-[#F5F5F7] items-center justify-center w-[350px] h-[60px] rounded-lg">
            <div>
              <img src={starIcon} alt="" />
              <p className="text-[11px]">Based on 5149+ reviews:</p>
            </div>
            <div>
              <img src={Icon} alt="" />
            </div>
          </div>
        </div>

        <div className="flex-1">
          <img src={BannerImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
