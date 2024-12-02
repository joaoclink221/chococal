import React from "react";
import "./index.scss";

const AmargoCard = () => {
  return (
    <div className="card-container">
      <div className="card">
        <div className="card-img">
          <img
            src="https://cdn.discordapp.com/attachments/1209127677060186172/1312602032833695774/43_Sem_Titulo_20241130230946.png?ex=674d1767&is=674bc5e7&hm=a4a8499b70b466fc2d9f8a8f611cf34fd93a08527a9ba656978e542745317559&" 
            alt="Chocolate Branco"
          />
        </div>
        <div className="card-content">
          <h2>Chocolate Amargo</h2>
          <p>
          Descubra o sabor intenso do nosso chocolate amargo, feito com cacau selecionado de alta qualidade. Com menos açúcar e uma textura rica, é a escolha ideal para os paladares mais sofisticados e para quem busca um equilíbrio perfeito entre intensidade e prazer.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AmargoCard;