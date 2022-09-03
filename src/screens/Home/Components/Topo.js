import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

import { carregaTopo } from "../../../services/carregaDados";
import logo from "../../../assets/logo.png";

class Topo extends React.Component {

  state = {
    topo: {
      tituloBemVindo: '',
      descricao: '',
    }
  }

  atualizaTopo() {
    const retorno = carregaTopo();
    this.setState({ topo: retorno});
    console.log(retorno);
  }

  // é executado quando o componente termina de renderizar;
  componentDidMount() {
    this.atualizaTopo();
  }
  
  render() {
    return <>
      <View style={styleTopo.topo}>
        <Image style={styleTopo.imgLogo} source={logo} />
        <Text style={styleTopo.titleTopo}>{ this.state.topo.tituloBemVindo }</Text>
        <Text style={styleTopo.legendas}>{ this.state.topo.descricao }</Text>
      </View>
    </>
  }
  
}

const styleTopo = StyleSheet.create({
  topo: {
    backgroundColor: "#F6F6F6",
    padding: 16,
  },
  imgLogo: {
    width: 72,
    height: 28,
  },
  titleTopo: {
    marginTop: 24,
    fontSize: 28,
    lineHeight: 40,
    fontWeight: "bold",
    color: "black"
  },
  legendas: {
    fontSize: 16,
    lineHeight: 24,
    color: "black"
  },


});

export default Topo;