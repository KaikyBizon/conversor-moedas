import Select from 'react-select';

export default function SelectComponent({options}) {

  return (
    <Select
      options={options}
      placeholder="Selecione uma moeda"
      // Aqui você aplica as classes Tailwind diretamente aos elementos internos
      classNames={{
        control: (state) =>
          'rounded-lg !bg-[#7c9eb2] !tc-white flex-1 min-w-[250px] min-h-[40px] w-full ' +
          'focus:outline-none focus:ring-4 !focus:ring-black ' +
          (state.isFocused ? '!ring-black' : ''), // Adiciona anel de foco se estiver focado
        valueContainer: () => 'p-0', // Remove padding padrão do container de valor
        singleValue: () => 'text-white', // Exemplo: texto branco para o valor selecionado
        menu: () => 'bg-white rounded-lg shadow-lg', // Estilo do menu dropdown
        option: (state) =>
          `py-2 px-3 hover:bg-gray-200 cursor-pointer ${
            state.isSelected ? 'bg-blue-200' : ''
          }`, // Estilo das opções
        // ... e muitas outras partes que você pode estilizar
        placeholder: () => '!text-white',
      }}
      name="Input"
    />
  );
}
