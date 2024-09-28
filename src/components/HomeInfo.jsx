import { Link } from "react-router-dom";

import { arrow } from "../assets/icons";

const HomeInfo = ({ currentStage }) => {
  if (currentStage === 1)
    return (
      <h1 className='sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5'>
        Hi, I'm 
        <span className='font-semibold mx-2 text-white'>Amber Bagchi</span>
        👋
        <br />
        AI/ML Enthusiast from Amity University
      </h1>
    );

  if (currentStage === 2) {
    return (
      <div className='info-box'>
        <p className='font-medium sm:text-xl text-center'>
          I've worked on AI/ML models and built several interactive web applications. <br /> Skilled in Machine Learning, Deep Learning, and Generative AI.
        </p>

        <Link to='/about' className='neo-brutalism-white neo-btn'>
          Learn more about my journey
          <img src={arrow} alt='arrow' className='w-4 h-4 object-contain' />
        </Link>
      </div>
    );
  }

  if (currentStage === 3) {
    return (
      <div className='info-box'>
        <p className='font-medium text-center sm:text-xl'>
          Led projects like a Medical AI Chatbot and a Kidney Disease Classification system. <br /> Curious about the details?
        </p>

        <Link to='/projects' className='neo-brutalism-white neo-btn'>
          Explore my projects
          <img src={arrow} alt='arrow' className='w-4 h-4 object-contain' />
        </Link>
      </div>
    );
  }

  if (currentStage === 4) {
    return (
      <div className='info-box'>
        <p className='font-medium sm:text-xl text-center'>
          Interested in collaborating on an innovative project or need a developer? <br /> Let’s work together!
        </p>

        <Link to='/contact' className='neo-brutalism-white neo-btn'>
          Get in touch
          <img src={arrow} alt='arrow' className='w-4 h-4 object-contain' />
        </Link>
      </div>
    );
  }

  return null;
};

export default HomeInfo;
