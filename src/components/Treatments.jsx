import Face from "../img/FaceMassage.svg";
import Lotus from "../img/Lotus.svg";
import Mortar from "../img/Mortar.svg";

function Treatments() {
  return (
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
  );
}

export default Treatments;