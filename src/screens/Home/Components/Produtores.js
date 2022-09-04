import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet, Text } from "react-native";
import Produtor from "./Produtor";
import useProdutores from '../../../hooks/useProdutores';

export default function Pordutores({ topo: Topo }) {
  const [titulo, lista] = useProdutores();

  const TopoLista = () => {
    return <>
      <Topo />
      <Text style={estilos.titulo}>{ titulo }</Text>
    </> 
  }

  return <> 
    <FlatList 
      data={lista}
      ListHeaderComponent={TopoLista}
      keyExtractor={({ nome }) => nome}
      renderItem={({ item }) => <Produtor {...item} />}
    />    
  </>
}

const estilos = StyleSheet.create({
  titulo: {
    fontSize: 22,
    lineHeight: 32,
    marginHorizontal: 16,
    marginTop: 16,
    fontWeight: 'bold',
    color: '#464646',
  },
  produtor: {
    fontSize: 16,
    lineHeight: 20,
    marginHorizontal: 16,
    marginTop: 4,
    fontWeight: 'bold',
    color: '#464646',
  },
})