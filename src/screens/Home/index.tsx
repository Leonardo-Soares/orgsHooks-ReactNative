import React from "react";
import { Text, View} from "react-native";
import Pordutores from "./Components/Produtores";
import Topo from "./Components/Topo";

export default function Home() {
  return <Pordutores  topo={Topo} />
  
}