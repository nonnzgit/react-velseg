import { ScCards } from "./styles.js";
import Card from "./Card.js";

const Cards = (props) => {
  return (
    <ScCards>
      {Number(props.catIdx.catIdx) === 0 || Number(props.catIdx) === 0
        ? props.products.map((product) => (
            <Card
              imagen={product.imagen}
              titulo={product.titulo}
              bait={product.bait}
              alt={product.alt}
              categoria={product.categoria}
              key={product.alt}
            />
          ))
        : props.products
            .filter(
              (product) => product.categoria === Number(props.catIdx.catIdx)
            )
            .map((product) => (
              <Card
                imagen={product.imagen}
                titulo={product.titulo}
                bait={product.bait}
                alt={product.alt}
                categoria={product.categoria}
                key={product.alt}
              />
            ))}
    </ScCards>
  );
};

export default Cards;
