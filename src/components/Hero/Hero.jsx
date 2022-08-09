import './Hero.scss';
import HeroImg from '../../assets/images/hero-banner1.jpg';

const Hero = () => {
  return (
    <section className="pageHero">
      <img src={HeroImg} alt="Banner" />
    </section>
  )
}

export default Hero