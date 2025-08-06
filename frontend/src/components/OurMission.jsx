
import our_mission_img from '../assets/our_mission_image.jpg'
const OurMission = () => {
    return (
      <div className='w-[60%] m-auto mb-10'>
          <p className="font-black font-[inter] text-3xl text-center py-5 mt-15 underline underline-offset-8">Our Mission</p>

          <div className="flex justify-between mb-10">
            <div className="rounded-t-xl">
                <img src={our_mission_img} className="rounded-full border-2 border-black" alt="" />
            </div>

            <div className='px-10 py-5'>
                <p className='py-2'>We empower entrepreneurs—from startups to large enterprises—by enabling accessible funding for renewable energy projects with strong social impact.</p>
                <p className='py-2'>Our platform connects investors with initiatives like village electrification and urban solar solutions, ensuring transparency, minimal fees, and maximum impact.</p>
                <p className='py-2'>Through thorough vetting, real-time tracking, and flexible funding models, we make sustainable energy investment seamless and effective.</p>
            </div>
          </div>
      </div>
    )
  }
  
  export default OurMission