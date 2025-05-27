import { useState, useEffect } from 'react';
import './App.css';
import Input from './components/input';
import SelectComponent from './components/SelectComponents';

function App() {
  // Estado para armazenar a lista de moedas disponíveis
  const [availableCurrencies, setAvailableCurrencies] = useState([]);

  // Função para buscar, armazenar e mostrar as moedas disponíveis para conversão
  useEffect(() => {
    async function fetchCurrencies() {
      try {
        // API para buscar as moedas que podem ser convertidas
        const response = await fetch(
          'https://api.frankfurter.dev/v1/currencies',
        );

        if (!response.ok) {
          throw new Error(`Erro HTTP! Status ${response.status}`);
        }

        const data = await response.json();
        console.log('Moedas carregadas:', data);

        const formattedCurrencies = Object.entries(data).map(
          ([code, name]) => ({
            value: code.toLowerCase(), // O value geralmente é minúsculo
            label: `${code} - ${name}`, // O label é o que aparece no dropdown
            code: code, // Adicione o código também se precisar
            name: name, // Adicione o nome completo
          }),
        );
        setAvailableCurrencies(formattedCurrencies);
      } catch (error) {
        console.error('Erro ao carregar moedas:', error);
        // setErrorCurrencies(error);
      } finally {
        // setLoadingCurrencies(false);
      }
    }

    fetchCurrencies();
  }, []);

  return (
    <section className="w-screen h-screen bg-[#ffeedb] flex items-center font-poppins">
      <div className="w-screen h-100 flex justify-center items-center">
        <form className="grid gap-y-4" action="#">
          <div className="inputs-data flex flex-wrap gap-2 max-w-[550px] justify-between">
            <div>
              <SelectComponent options={availableCurrencies} />
            </div>
            <div>
              <SelectComponent options={availableCurrencies}/>
            </div>
            <div>
              <Input placeholder="DIGITE UM VALOR" />
            </div>
          </div>
          <button
            className="cursor-pointer flex items-center justify-center rounded-lg bg-[#8a2446] max-w-[150px] min-h-[30px] w-full text-white"
            type="submit"
          >
            Converter
          </button>
        </form>
      </div>
    </section>
  );
}

export default App;
