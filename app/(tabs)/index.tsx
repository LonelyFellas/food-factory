import React, { useState } from "react";
import { StyleSheet, ScrollView } from "react-native";

import EditScreenInfo from "@/components/EditScreenInfo";
import { Text, View } from "@/components/Themed";
import { Tab, Text as TbText, TabView } from "@rneui/themed";

const TABS = ["电影", "美剧", "英剧", "韩剧", "日剧", "泰剧", "其他"];
export default function TabOneScreen() {
  const [index, setIndex] = useState(0);
  return (
    <View style={styles.container}>
      {/* <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}> */}
      <Tab
        scrollable={true}
        value={index}
        onChange={(e) => setIndex(e)}
        indicatorStyle={{
          backgroundColor: "white",
          height: 3,
        }}
        variant="primary"
      >
        {TABS.map((tab) => (
          <Tab.Item title={tab} titleStyle={{ fontSize: 12 }} />
        ))}
      </Tab>
      {/* </ScrollView> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: "100%",
    justifyContent: "flex-start",
    backgroundColor: "yellow",
  },
});
