import * as React from "react";
import {
  ScrollView,
  View,
  Dimensions,
  StyleSheet,
  Image,
  NativeSyntheticEvent,
  NativeScrollEvent,
} from "react-native";

const { width: screenWidth } = Dimensions.get("window");
const movieList = [
  {
    rid: 41875,
    title: "第二季正式预告片",
    url: "https://v.youku.com/v_show/id_XNjM5NjgxOTA2OA==.html",
    poster:
      "https://ftp.yysub.cc/2024/05/5cd0e2b7a504301a17a8a00e6d19ef0d.jpg.webp",
  },
  {
    rid: 41875,
    title: "第二季黑党预告片",
    url: "https://v.youku.com/v_show/id_XNjM4NTU2OTAwNA==.html",
    poster:
      "https://ftp.yysub.cc/2024/04/564a3dcac2207d36f0c0b429fea3123c.jpg.webp",
  },
  {
    rid: 41875,
    title: "第二季绿党预告片",
    url: "https://v.youku.com/v_show/id_XNjM3OTgwMjMxNg==.html",
    poster:
      "https://ftp.yysub.cc/2024/04/bbc1b7cacdb3db9b10e2212d1a879582.jpg.webp",
  },
  {
    rid: 41875,
    title: "第二季前导预告片",
    url: "https://v.youku.com/v_show/id_XNjIwNTY1NjU2MA==.html",
    poster:
      "https://ftp.yysub.cc/2023/12/c7f4a6932a993cd46e0e2aca384ec1ad.jpg.webp",
  },
  {
    rid: 41875,
    title: "第一季最终中文预告片",
    url: "https://www.bilibili.com/video/BV1mU4y1i7k1/",
    poster:
      "https://ftp.yysub.cc/2022/07/d403f62ba47aa8361aa9c12055a18797.jpg.webp",
  },
  {
    rid: 41875,
    title: "第一季前导中文预告片",
    url: "https://v.youku.com/v_show/id_XNTg2ODEwMDMwNA==.html",
    poster:
      "https://ftp.yysub.cc/2022/05/82de376596e928fe669dfed30806f5f7.jpg.webp",
  },
  {
    rid: 41875,
    title: "首支预告片",
    url: "https://v.youku.com/v_show/id_XNTgxMTE2NjgzNg==.html",
    poster:
      "https://ftp.yysub.cc/2021/1005/9dff442ee6a1ea2b95b11e4f2c3847c4.jpg.webp",
  },
];

const Carousel: React.FC<{
  handleChangeDisableSwipe: (value: boolean) => void;
}> = ({ handleChangeDisableSwipe }) => {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [scrollX, setScrollX] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((currentIndex + 1) % movieList.length);
      setScrollX((scrollX + screenWidth) % (movieList.length * screenWidth));
      console.log(currentIndex);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const handleTouchStart = () => {
    handleChangeDisableSwipe(true);
  };
  const handleTouchEnd = () => {
    handleChangeDisableSwipe(false);
  };
  // const handleScroll = React.useCallback(
  //   (event: NativeSyntheticEvent<NativeScrollEvent>) => {
  //     const { contentOffset } = event.nativeEvent;
  //     const newIndex = Math.round(contentOffset.x / screenWidth);
  //     if (newIndex >= 0 && newIndex < movieList.length) {
  //       setScrollX(contentOffset.x);
  //       setCurrentIndex(newIndex);
  //     }
  //   },
  //   [currentIndex]
  // );

  return (
    <View style={styles.container}>
      <ScrollView
        horizontal
        pagingEnabled
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        // onScroll={handleScroll}
        showsHorizontalScrollIndicator={false}
        style={styles.scrollView}
        contentOffset={{ x: scrollX, y: 0 }}
      >
        {movieList.map((item, index) => (
          <View key={index} style={[styles.item]}>
            <Image
              source={{ uri: item.poster }}
              resizeMode="contain"
              style={{ width: "100%", height: "100%" }}
            />
          </View>
        ))}
      </ScrollView>
      <View style={styles.dots}>
        {movieList.map((_, index) => (
          <View
            key={index}
            style={[
              styles.dot,
              { backgroundColor: currentIndex === index ? "#fff" : "gray" },
            ]}
          />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "relative",
  },
  scrollView: {
    width: "100%",
    height: 180,
    marginVertical: 10,
    backgroundColor: "#000",
    borderRadius: 10,
    overflow: "hidden",
  },
  item: {
    width: screenWidth - 30,
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    color: "#fff",
  },
  dots: {
    position: "absolute",
    flexDirection: "row",
    bottom: 20,
    right: 10,
  },
  dot: {
    width: 5,
    height: 5,
    borderRadius: 5,
    marginHorizontal: 1.5,
  },
});

export default Carousel;
