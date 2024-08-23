import './Hero.css'
import dark_arrow from '../../assets/dark-arrow.png'

export default function Hero() {
  return (
    <div className='hero container'>
        <div className="hero-text">
            <h1>We Ensure better education for a better world</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas praesentium quam libero deserunt animi autem consequatur ab explicabo obcaecati, repudiandae cum quia quae fugiat ad labore voluptatem, impedit obcaecati aliquam delectus, deleniti optio totam eum!</p>
            <button className='btn'>Explore more <img src={dark_arrow} alt="" /></button>
        </div>
    </div>
  )
}
