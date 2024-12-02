import React from "react";
import "./index.scss";

const ChocolateCard = () => {
  return (
    <div className="card-container">
      <div className="card">
        <div className="card-img">
          <img
            src="/images/leite2.png"
            alt="Chocolate ao leite"
          />
        </div>
        <div className="card-content">
          <h2>Chocolate ao leite</h2>
          <p>
            Nosso chocolate ao leite é feito com os melhores ingredientes,
            oferecendo uma textura cremosa e um sabor irresistível. Combinamos
            cacau de alta qualidade com o toque suave do leite, criando uma
            experiência única para os amantes de chocolate. Ideal para saborear
            a qualquer momento ou presentear alguém especial.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ChocolateCard;