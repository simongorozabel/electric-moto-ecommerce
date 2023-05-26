import "./FirstValueProposition.css";
import firstImage from "../../images/1.png";
import secondImage from "../../images/3.png";
import thirImage from "../../images/4.png";

function FirstValueProposition() {
  return (
    <section>
      <h2>Futuristic Electric Motorcycle</h2>
      <div className="images__container">
        <img
          src={firstImage}
          alt="man riding an electric motorcycle like a futurist"
        />

        <div className="card__container">
          <div className="product__card">
            <img src={thirImage} alt="electric motorcycle" />
            <h5>Electric Motorcycle - Litio Powered</h5>
            <p>$599 USD</p>
          </div>

          <img
            src={secondImage}
            alt="electric motorcycle with nature background"
          />
        </div>
      </div>
      <div className="value__container">
        <h3>Futuristic Motorcycle 100% Electric Power</h3>
        <p>
          From the need of technology, ElectriX has become much more. Enjoy this
          fast and futuristic vehicle with friends, family or even alone.
        </p>
      </div>
    </section>
  );
}

export default FirstValueProposition;
