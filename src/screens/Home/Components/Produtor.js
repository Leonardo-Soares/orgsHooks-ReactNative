import React, { useReducer, useState, useMemo } from "react";
import { View, TouchableOpacity, Text, StyleSheet, Image } from "react-native";
import Estrelas from "../../../Components/Estrelas";

const distanciaEmMetros = (distancia) => {
  console.log('disanciaEmMetros');
  return `${distancia}m`;
}

export default function Produtor({ nome, imagem, distancia, estrelas }) {
  const [selecionado, inverterSelecionado] = useReducer(
    (selecionado) => !selecionado,
    false
  );

  const distanciaTexto = useMemo(
    () => distanciaEmMetros(distancia),
    [distancia]
  );

  return <TouchableOpacity 
    onPress={inverterSelecionado}
    style={estilos.cartao}
    >
    <Image style={estilos.imagem} source={imagem} accessibilityLabel={nome} />
    <View style={estilos.informacoes}>
      <View>
        <Text style={estilos.nome}>{ nome }</Text>
        <Estrelas 
          quantidade={estrelas}
          editavel={selecionado}
          grande={selecionado}
        />
      </View>
      <Text style={estilos.distancia}>{ distanciaTexto }</Text>
    </View>
    <Text style={estilos.estrelas}>{ estrelas }</Text>
  </TouchableOpacity>
}

const estilos = StyleSheet.create({
  cartao: {
    backgroundColor: '#F6F6F6',
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 6,
    flexDirection: 'row',
    // Android
    elevation: 4,
    // IOS
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
  },
  imagem: {
    width: 48,
    height: 48,
    borderRadius: 8,
    marginVertical: 16,
    marginLeft: 16,
  },  
  informacoes: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 8,
    marginVertical: 16,
    marginRight: 16,
  },  
  nome: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: 'bold',
    color: '#000',
  },
  distancia: {
    fontSize: 12,
    lineHeight: 16,
    color: '#000',
  }

})