import { useState } from "react";

export const Input = ({ onNewCategory }) => {
  const [inputValue, setInputValue] = useState("");
  
  const onInputChange = ({ target }) => {
      setInputValue(target.value);
    };
    
    const onSubmit = ( event) =>{
        event.preventDefault()
        if (inputValue.trim().length <= 1) return;
        //setCategorias( categorias => [inputValue, ...categorias])
        onNewCategory(inputValue.trim())
        setInputValue('')
    }

  return (
    <form onSubmit={onSubmit}>
      <input
        onChange={onInputChange}
        placeholder="Buscar Gifs"
        value={inputValue}
      />
    </form>
  );
};
