import { useState } from 'react';




function App() {
    const [peso, setPeso] = useState('');
    const [altura, setAltura] = useState('');
    const [imc, setImc] = useState(null);
    const [classificacao, setClassificacao] = useState('');

const calcularIMC = (e) => {
    e.preventDefault();

    const alturaNum = parseFloat(altura);
    const pesoNum = parseFloat(peso);

        if (!alturaNum || !pesoNum) {
        alert('Por favor, preencha os campos corretamente.');
        return;
        }

        const imcCalculado = (pesoNum / (alturaNum * alturaNum)).toFixed(2);
        setImc(imcCalculado);
        setClassificacao(classificarIMC(imcCalculado));
    };

    const classificarIMC = (imc) => {
        if (imc < 18.5) return 'Magreza';
        if (imc < 25) return 'Normal';
        if (imc < 30) return 'Sobrepeso';
        if (imc < 40) return 'Obesidade';
        return 'Obesidade Grave';
    };

    const limpar = () => {
        setPeso('');
        setAltura('');
        setImc(null);
        setClassificacao('');
    };

    return (
        <div className="container">
        <h1>Calculadora de IMC</h1>

        <form onSubmit={calcularIMC}>
            <div>
            <label>Altura (m):</label>
            <input
                type="number"
                step="0.01"
                value={altura}
                onChange={(e) => setAltura(e.target.value)}
                placeholder="Ex.: 1.75"
            />
            </div>

            <div>
            <label>Peso (kg):</label>
            <input
                type="number"
                value={peso}
                onChange={(e) => setPeso(e.target.value)}
                placeholder="Ex.: 70"
            />
            </div>

        <button type="submit">Calcular IMC</button>
        <button type="button" onClick={limpar}>Limpar</button>
        </form>

        {imc && (
            <div className="resultado">
            <h2>Seu IMC: {imc}</h2>
            <p>Classificação: <strong>{classificacao}</strong></p>
            </div>
        )}
        </div>
    );
}

export default App;
