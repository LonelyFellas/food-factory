import { StyleSheet } from "react-native";

import EditScreenInfo from "@/components/EditScreenInfo";
import { Text, View } from "@/components/Themed";
import HeaderIndex from "@/components/index/header-index";

export default function TabOneScreen() {
  return <View style={styles.container}>{/* <HeaderIndex /> */}</View>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "yellow",
  },
});
