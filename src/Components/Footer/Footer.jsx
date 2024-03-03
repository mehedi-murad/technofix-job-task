import twitterImg from "../../assets/social/twitter.png"
import facebookImg from "../../assets/social/facebook.png"
import youtubeImg from "../../assets/social/youtube.png"
import { Link } from "react-router-dom";
import line from "../../assets/images/span.png"

const Footer = () => {
    return (
        <div className="bg-[#02033B] py-20 px-32">
            <div className="flex justify-evenly gap-20 mb-16">
                <div className="space-y-12">
                    <h2 className="text-white text-3xl font-bold">Scan. Detect. Remove.</h2>
                    <div className="flex gap-8">
                        <img src={twitterImg} alt="" />
                        <img src={facebookImg} alt="" />
                        <img src={youtubeImg} alt="" />
                    </div>

                    <div className="text-white flex gap-10">
                        <Link><h2 className="underline">Privacy policy</h2></Link>
                        <Link><h2 className="underline">Terms of service</h2></Link>
                    </div>

                    <div className="text-white">
                        <p>Copyright © 2022 Certo Software Limited | Registered in England & Wales No. 10072356</p>
                        <p>Designed & developed by <Link className="underline">Bigger Picture</Link></p>
                    </div>
                </div>

                <div>
                    <h2 className="text-white text-[35px] font-extrabold">Miro.</h2>
                    <div className="divider"></div>
                    <div>
                        <div className="flex gap-4 items-center">
                            <img src={line} alt="" />
                            <h2 className="text-[#FFC247] font-extrabold text-lg">iPhone</h2>
                        </div>
                        <div className="flex gap-4 items-center">
                            <img src={line} alt="" />
                            <h2 className="text-[#FFC247] font-extrabold text-lg">Android</h2>
                        </div>
                        <div className="flex gap-4 items-center">
                            <img src={line} alt="" />
                            <h2 className="text-[#FFC247] font-extrabold text-lg">Help</h2>
                        </div>
                        <div className="flex gap-4 items-center">
                            <img src={line} alt="" />
                            <h2 className="text-[#FFC247] font-extrabold text-lg">About</h2>
                        </div>
                        <div className="flex gap-4 items-center">
                            <img src={line} alt="" />
                            <h2 className="text-[#FFC247] font-extrabold text-lg">Insights</h2>
                        </div>
                    </div>
                </div>

                <div className="bg-[#FFC247] rounded-3xl p-10 space-y-6">
                    <h2 className="text-[#02033B] text-[23px] font-bold">Sign up to our newsletter</h2>
                    <p>Receive the latest mobile security news, exclusive discounts & offers straight to your inbox!</p>

                    <div className="flex">
                    <input
                        type="text"
                        placeholder="Email address"
                        className="input input-bordered w-full rounded-l-3xl"
                        />
                        <button className="bg-[#02033B] ml-4 px-4 text-white">Submit</button>
                    </div>
                </div>
            </div>
            <div className="text-white">
                <p>Apple, the Apple logo, and iPhone are trademarks of Apple Inc., registered in the U.S. and other countries. App Store is a service mark of Apple Inc. Android, Google Play and the Google Play logo are trademarks of Google LLC.</p>
            </div>
        </div>
    );
};

export default Footer;