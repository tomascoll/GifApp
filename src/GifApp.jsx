import { useState } from "react";
import { GifGrid , Input } from "./components";

export const GifApp = () => {
  const [categorias, setCategorias] = useState(["Dragon Ball"]);

  const onAddCategory = (onNewCategory) => {
    if (categorias.includes(onNewCategory)) return;
    setCategorias([onNewCategory, ...categorias]);
  };

  return (
    <>
      <h1>GifApp</h1>
      
      <Input
        onNewCategory={ (value) => onAddCategory(value) }
      />
      
        {

        categorias.map((category) => (
          <GifGrid key={category} category={category}/>
        ))

        }
    </>
  );
};
