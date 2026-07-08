import play from "../img/Play.svg";
import woman from "../img/img1.png";
import woman1 from "../img/woman2.png";
import vector from "../img/Vector.svg";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-inner">
        <div className="hero-text">
          <h1>Bring back the beauty and glow of your skin</h1>

          <p>
            We provide you various treatments from head to toe using the best
            product, advanced technology, and affordable price
          </p>
        </div>

        <div className="hero-media">
          <div className="hero-panel"></div>

          <img
            className="hero-vector"
            src={vector}
            alt=""
            aria-hidden="true"
          />

          <img
            className="hero-woman"
            src={woman}
            srcSet={`${woman} 1x, ${woman1} 2x`}
            alt="Woman receiving beauty treatment"
          />
        </div>

        <div className="hero-actions">
          <button className="hero-btn hero-btn-primary" type="button">
            Book now
          </button>

          <button className="hero-btn hero-btn-video" type="button">
            <span className="circle">
              <img src={play} alt="" aria-hidden="true" />
            </span>
            <span>Watch video</span>
          </button>
        </div>
      </div>
    </section>
  );
}

export default Hero;