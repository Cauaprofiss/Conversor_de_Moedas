import { useState, useEffect } from "react";
import Button from "../components/button/button";
import Input from "../components/inputNumber/inputNumber";
import Select from "../components/select/select";
import Arrow from "../components/arrow/arrow"
import axios from "axios";

function Main() {
  const [moedaOrigem, setMoedaOrigem] = useState("Escolha");
  const [moedaDestino, setMoedaDestino] = useState("Escolha");
  const [valor, setValor] = useState("");
  const [resultado, setResultado] = useState(null);
  const [cotacoes, setCotacoes] = useState({});

  useEffect(() => {
    axios.get("http://localhost:3000/api/cotacoes")
      .then((res) => setCotacoes(res.data))
      .catch((err) => console.error("Erro ao buscar cotações:", err));
  }, []);

  // 🆕 Limpa o resultado ao mudar qualquer campo de entrada
  useEffect(() => {
    setResultado(null);
  }, [valor, moedaOrigem, moedaDestino]);

  const converterMoeda = () => {
    if (
      moedaOrigem === "Escolha" ||
      moedaDestino === "Escolha" ||
      !valor ||
      isNaN(parseFloat(valor))
    ) {
      alert("Por favor, preencha todos os campos corretamente.");
      return;
    }

    const chave = `${moedaOrigem}${moedaDestino}`;
    const cotacao = parseFloat(cotacoes[chave]);

    if (!cotacao) {
      alert("Não há cotação disponível para essa conversão.");
      return;
    }

    const total = parseFloat(valor) * cotacao;
    setResultado(total.toFixed(2));
  };

  return (
    <main>
      <div className="Conversor">
        <h2>Conversor de Moedas</h2>
        <div className="entrada">
          <div className="left">
            <Select value={moedaOrigem} onChange={e => setMoedaOrigem(e.target.value)} />
            <Input value={valor} onChange={e => setValor(e.target.value)} />
          </div>
          <div className="center">
            <Arrow />
          </div>
          <div className="right">
            <Select value={moedaDestino} onChange={e => setMoedaDestino(e.target.value)} />
            <Input value={resultado || ""} readOnly />
          </div>
        </div>
        <div className="meio">
          <Button onClick={converterMoeda} />
        </div>
        <div className="saida">
          {resultado && (
            <p>
              {valor} {moedaOrigem} = {resultado} {moedaDestino}
            </p>
          )}
        </div>
      </div>
      <div className="circulo"></div>
    </main>
  );
}

export default Main;
