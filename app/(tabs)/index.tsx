import React, { useState } from "react";
import { StyleSheet, ScrollView } from "react-native";

import EditScreenInfo from "@/components/EditScreenInfo";
import { Text, View } from "@/components/Themed";
import { Tab, Text as TbText, TabView } from "@rneui/themed";
import Carousel from "@/components/carousel";

const TABS = ["电影", "美剧", "英剧", "韩剧", "日剧", "泰剧", "其他"];
export default function TabOneScreen() {
  const [index, setIndex] = useState(0);
  const [disableSwipe, setDisableSwipe] = useState(false);

  const handleChangeDisableSwipe = (value: boolean) => {
    setDisableSwipe(value);
  };

  return (
    <View style={styles.container}>
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
        {TABS.map((tab, index) => (
          <Tab.Item key={index} title={tab} titleStyle={{ fontSize: 12 }} />
        ))}
      </Tab>
      <TabView
        disableSwipe={disableSwipe}
        value={index}
        onChange={(e) => setIndex(e)}
        animationType="spring"
      >
        {TABS.map((tab, index) => (
          <TabView.Item key={index}>
            <ScrollView>
              <Carousel handleChangeDisableSwipe={handleChangeDisableSwipe} />
              <View style={{ height: 500, backgroundColor: "white" }}></View>
            </ScrollView>
          </TabView.Item>
        ))}
      </TabView>
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
