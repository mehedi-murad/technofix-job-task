import icon1 from '../../assets/Trusted/walmart.png'
import icon2 from '../../assets/Trusted/cisco.png'
import icon3 from '../../assets/Trusted/volvo.png'
import icon4 from '../../assets/Trusted/deloitte.png'
import icon5 from '../../assets/Trusted/okta.png'
const Trusted = () => {
    return (
        <div className='m-32 space-y-6'>
            <p className='text-center'>Trusted by 45M+ users</p>
            <div className='flex items-center justify-evenly gap-10'>
                <img src={icon1} alt="" />
                <img src={icon2} alt="" />
                <img src={icon3} alt="" />
                <img src={icon4} alt="" />
                <img src={icon5} alt="" />
            </div>
        </div>
    );
};

export default Trusted;