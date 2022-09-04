import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet, Text } from "react-native";
import { carregaProdutores } from "../../../services/carregaDados";
import Produtor from "./Produtor";


export default function Pordutores({ topo: Topo }) {
  // Estados
  const [titulo, setTitulo] = useState('');
  const [lista, setLista] = useState([]);

  // Puxa uma vez os valores
  useEffect(() => {
    const retorno = carregaProdutores();
    setTitulo(retorno.titulo);
    setLista(retorno.lista);
  }, [] );

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