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
      image: green,
      distancia: `${geraNumeroAleratorio(1, 500)}`,
    },
    {
      nome: "Salad",
      image: salad,
      distancia: `${geraNumeroAleratorio(1, 500)}`,
    },
    {
      nome: "Jenny e Jack",
      image: jennyJack,
      distancia: `${geraNumeroAleratorio(1, 500)}`,
    },
    {
      nome: "Grow",
      image: grow,
      distancia: `${geraNumeroAleratorio(1, 500)}`,
    },
    {
      nome: "Potager",
      image: potager,
      distancia: `${geraNumeroAleratorio(1, 500)}`,
    }
  ]
}

export default produtores;