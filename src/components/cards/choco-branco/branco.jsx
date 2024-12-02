import React from "react";
import "./index.scss";

const BrancoCard = () => {
  return (
    <div className="card-container">
      <div className="card">
        <div className="card-img">
          <img
            src="https://cdn.discordapp.com/attachments/1209127677060186172/1312602033747918938/43_Sem_Titulo_20241130230459.png?ex=674d1767&is=674bc5e7&hm=b23527eee21b6fdd3dce4805f06c2518d67fe8ed75075139c7fdc98ace8e8dc8&" 
            alt="Chocolate Branco"
          />
        </div>
        <div className="card-content">
          <h2>Chocolate Branco</h2>
          <p>
          Delicie-se com a suavidade do nosso chocolate branco, feito com os mais finos ingredientes. Sua textura aveludada e o sabor doce e delicado proporcionam uma experiência única, perfeita para momentos especiais ou para compartilhar com quem você ama.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BrancoCard;