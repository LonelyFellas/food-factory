import * as React from "react";
import {
  ScrollView,
  View,
  Text,
  Dimensions,
  StyleSheet,
  PanResponder,
} from "react-native";

const { width: screenWidth } = Dimensions.get("window");

const data = [
  { title: "Item 1", color: "red" },
  { title: "Item 2", color: "blue" },
  { title: "Item 3", color: "green" },
];

const Carousel: React.FC<{
  handleChangeDisableSwipe: (value: boolean) => void;
}> = ({ handleChangeDisableSwipe }) => {
  const handleTouchStart = () => {
    handleChangeDisableSwipe(true);
  };
  const handleTouchEnd = () => {
    handleChangeDisableSwipe(false);
  };

  return (
    <ScrollView
      horizontal
      pagingEnabled
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      showsHorizontalScrollIndicator={false}
      style={styles.scrollView}
    >
      {data.map((item, index) => (
        <View
          key={index}
          style={[styles.item, { backgroundColor: item.color }]}
        >
          <Text style={styles.title}>{item.title}</Text>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    width: screenWidth,
    height: 200,
  },
  item: {
    width: screenWidth,
    height: 200,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    color: "#fff",
  },
});

export default Carousel;
