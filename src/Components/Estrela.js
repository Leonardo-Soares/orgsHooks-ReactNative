import React from "react";
import Estrelas from "./Estrelas";
import { TouchableOpacity, Image, StyleSheet } from "react-native";
import estrela from '../assets/estrela.png';
import estrelCinza from '../assets/estrelaCinza.png';

export default function Estrela({ 
    onPress, 
    desabilitada = false,
    preenchida,
    grande = false,
  }) {

  const estilos = estilosFuncao(grande);

  const getImagem = () => {
    if (preenchida) {
      return estrela;
    }
    else {
      return estrelCinza;
    }
  }

  return <TouchableOpacity
    onPress={onPress}
    disabled={desabilitada}
    >
     <Image source={getImagem()} style={estilos.estrela} />
  </TouchableOpacity>
}

const estilosFuncao = (grande) =>  StyleSheet.create({
  estrela: {
    width: grande ? 36 : 12,
    height: grande ? 36 : 12,
    marginRight: 4,
  },
})