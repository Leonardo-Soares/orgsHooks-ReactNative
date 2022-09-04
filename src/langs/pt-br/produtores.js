import green from '../../assets/produtores/green.png';
import salad from '../../assets/produtores/salad.png';
import jennyJack from '../../assets/produtores/jenny-jack.png';
import grow from '../../assets/produtores/grow.png';
import potager from '../../assets/produtores/potager.png';

const geraNumeroAleratorio = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min );
}

const produtores = {
  titulo: "Produtores",
  lista: [
    {
      nome: "Green",
      imagem: green,
      distancia: `${geraNumeroAleratorio(1, 500)}`,
      estrelas: geraNumeroAleratorio(1, 5),
    },
    {
      nome: "Salad",
      imagem: salad,
      distancia: `${geraNumeroAleratorio(1, 500)}`,
      estrelas: geraNumeroAleratorio(1, 5),
    },
    {
      nome: "Jenny e Jack",
      imagem: jennyJack,
      distancia: `${geraNumeroAleratorio(1, 500)}`,
      estrelas: geraNumeroAleratorio(1, 5),
    },
    {
      nome: "Grow",
      imagem: grow,
      distancia: `${geraNumeroAleratorio(1, 500)}`,
      estrelas: geraNumeroAleratorio(1, 5),
    },
    {
      nome: "Potager",
      imagem: potager,
      distancia: `${geraNumeroAleratorio(1, 500)}`,
      estrelas: geraNumeroAleratorio(1, 5),
    }
  ]
}

export default produtores;