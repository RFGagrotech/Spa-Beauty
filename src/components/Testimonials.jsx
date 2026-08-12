import Quotes from "../img/quotes.svg";

function Testimonials() {
  return (
    <div>
      <section
        className="testimonials"
        aria-label="testimonials"
      >
        <article className="comment comment1">
          <p>
            <img src={Quotes} alt="" aria-hidden="true" />
            <br />

            I have a regular schedule to take treatment from GlowQueen, they
            gave me the best service and treatment ever to maintain the beauty
            and health of my skin
          </p>

          <span className="author">
            Sophia Princeton
          </span>
        </article>

        <article className="comment comment2">
          <p>
            <img src={Quotes} alt="" aria-hidden="true" />
            <br />

            For the past few years, I've had a hard time finding the right
            place for skin care to deal with my complicated skin condition,
            thank God I found GlowQueen to treat my skin
          </p>

          <span className="author">
            Tamara Jules
          </span>
        </article>
      </section>

      <div
        className="footer-band"
        aria-hidden="true"
      ></div>
    </div>
  );
}

export default Testimonials;