import './App.css';
import Input from './components/input';

function App() {
  return (
    <section className="w-screen h-screen bg-[#ffeedb] flex items-center font-poppins">
      <div className="w-screen h-100 flex justify-center items-center">
        <form className="grid gap-y-4" action="#">
          <div className="inputs-data flex flex-wrap gap-2 max-w-[550px] justify-between">
            <div>
              <Input placeholder="ESCOLHA A MOEDA" />
              <datalist></datalist>
            </div>
            <div>
              <Input placeholder="ESCOLHA A MOEDA" />
              <datalist></datalist>
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
