import Face from "../img/FaceMassage.svg";
import Lotus from "../img/Lotus.svg";
import Mortar from "../img/Mortar.svg";
import Quotes from "../img/quotes.svg";

function Testimonials() {
  return (
    <div>
      <section className="treatments">
        <article className="treatment-card">
          <div className="icon-wrapper">
            <img src={Face} alt="Face massage" />
          </div>

          <h2>15 +</h2>
          <p>Special Treatment</p>
        </article>

        <article className="treatment-card">
          <div className="icon-wrapper">
            <img src={Lotus} alt="Lotus" />
          </div>

          <h2>25 +</h2>
          <p>Professional Therapist</p>
        </article>

        <article className="treatment-card">
          <div className="icon-wrapper">
            <img src={Mortar} alt="Mortar" />
          </div>

          <h2>100%</h2>
          <p>
            Herbal <br /> Cream Formula
          </p>
        </article>
      </section>

      <section className="testimonials" aria-label="testimonials">
        <article className="comment comment1">
          <p>
            <img src={Quotes} alt="" aria-hidden="true" />
            <br />
            I have a regular schedule to take treatment from GlowQueen, they
            gave me the best service and treatment ever to maintain the beauty
            and health of my skin
          </p>

          <span className="author">Sophia Princeton</span>
        </article>

        <article className="comment comment2">
          <p>
            <img src={Quotes} alt="" aria-hidden="true" />
            <br />
            For the past few years, I've had a hard time finding the right
            place for skin care to deal with my complicated skin condition,
            thank God I found GlowQueen to treat my skin
          </p>

          <span className="author">Tamara Jules</span>
        </article>
      </section>

      <div className="footer-band" aria-hidden="true"></div>
    </div>
  );
}

export default Testimonials;