import "./Sobre.scss";
import fundo from "../../assets/images/fundo.png";
import choco1 from "../../assets/images/chocologo.png"
const Sobre = () => {
  return (
    <section className="inicio2">
      <img src={fundo} alt="fundo" className="fundo2" />
      <div className="nnsei2">
        <img src={choco1} alt="" />
        <div className="texts">
        <h1 className="title2">Sobre</h1>
        <span className="text-introduction2">
          A nossa história começa na Bahia, onde eu e Ana, irmãos e grandes
          parceiros, crescemos em meio à cultura do cacau. Durante muitos anos,
          trabalhamos juntos em uma fazenda de cacau, cuja produção era
          destinada às grandes fábricas de chocolate.
        </span >{" "}
        <span className="text-introduction2">
          Esse contato direto com o cultivo e o comércio do cacau despertou em
          nós um profundo interesse pelo setor. Com o tempo, fomos amadurecendo
          a ideia de transformar esse interesse em um negócio próprio.
        </span>{" "}
        <span className="text-introduction2">
          Decidimos unir nossas habilidades, conhecimento e paixão pelo cacau
          para criar uma empresa que valorizasse a produção local e entregasse
          produtos de alta qualidade ao mercado.
        </span>{" "}
        <span className="text-introduction2">
          Assim nasceu a nossa empresa, fruto de trabalho árduo, determinação e
          da vontade de contribuir para o crescimento da nossa comunidade. Hoje,
          temos orgulho de fazer parte da cadeia produtiva do chocolate,
          mantendo nossa essência e o respeito às nossas raízes e o compromisso
          com a excelência. Essa é a nossa história e a base que nos guia a cada
          passo.
        </span>
        </div>
      </div>
    </section>
  );
};

export default Sobre;
