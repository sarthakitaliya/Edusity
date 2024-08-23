import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'

const About = () => {
  return (
    <div className='about'>
        <div className="about-left">
            <img src={about_img} alt="" className='about-img'/>
            <img src={play_icon} alt="" className='play-icon'/>
        </div>
        <div className="about-right">
          <h3>ABOUT UNIVERSITY</h3>
          <h2>Nurturing Tomorrow's Leaders Tooday</h2>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam quidem corrupti dignissimos praesentium dicta sit fugiat obcaecati ipsum quos quod alias sunt unde optio a vel ipsa, possimus quibusdam soluta. Sequi consequatur blanditiis molestias tempora eaque architecto minus nostrum at.
          quibusdam soluta. Sequi consequatur blanditiis molestias tempora eaque architecto minus nostrum at.</p>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam quidem corrupti dignissimos praesentium dicta sit fugiat obcaecati ipsum quos quod alias sunt unde optio a vel ipsa, possimus quibusdam soluta. Sequi consequatur blanditiis molestias tempora eaque architecto minus nostrum at.
          quibusdam soluta. Sequi consequatur blanditiis molestias tempora eaque architecto minus nostrum at.</p>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam quidem corrupti dignissimos praesentium dicta sit fugiat obcaecati ipsum quos quod alias sunt unde optio a vel ipsa, possimus quibusdam soluta. Sequi consequatur blanditiis molestias tempora eaque architecto minus nostrum at.
          quibusdam soluta. Sequi consequatur blanditiis molestias tempora eaque architecto minus nostrum at.</p>
        </div>
    </div>
  )
}

export default About