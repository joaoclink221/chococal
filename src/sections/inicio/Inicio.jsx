import "./Inicio.scss";
import fundo from "../../assets/images/inicio.png";

const Inicio = () => {
  return (
    <section className="inicio">
      <img src={fundo} alt="fundo" className="fundo" />
      <div className="nnsei">
        <h1 className="title">Bem-vindo à <span className="chococal-text">Chococal </span>!</h1>
        <p className="text-introduction">
          Somos apaixonados por chocolate e dedicados a transformar os melhores 
          ingredientes em experiências únicas. Nossos produtos são criados com
          cuidado, tradição e inovação para adoçar o seu dia e celebrar os
          momentos mais especiais. Descubra o sabor irresistível e a qualidade
          que fazem do nosso chocolate a escolha perfeita para quem busca o
          melhor.
        </p>
      </div>
    </section>
  );
};

export default Inicio;
