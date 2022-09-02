import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

import logo from "../../../assets/logo.png";

export default function Topo() {
  return <>
    <View style={styleTopo.topo}>
      <Image style={styleTopo.imgLogo} source={logo} />
      <Text style={styleTopo.titleTopo}>Olá Luisa</Text>
      <Text style={styleTopo.legendas}>Econtre os melhores produtosres</Text>
    </View>
  </>
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