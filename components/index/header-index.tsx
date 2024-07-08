import {
  StyleSheet,
  Pressable,
  useColorScheme,
  Text,
  View,
  Dimensions,
} from "react-native";
import { FC } from "react";
import { HeaderTitleProps } from "@react-navigation/elements";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Colors } from "react-native/Libraries/NewAppScreen";

const screenWidth = Dimensions.get("screen").width;
console.log(screenWidth);
const HeaderIndex: FC<any> = (props) => {
  const colorScheme = useColorScheme();

  return (
    <View style={styles.container}>
      <View style={styles.input}></View>
      <Pressable style={styles.pressable}>
        {({ pressed }) => (
          <FontAwesome
            name="info-circle"
            size={25}
            color={Colors[colorScheme ?? "light"].text}
            style={{
              marginRight: 15,
              opacity: pressed ? 0.5 : 1,
              backgroundColor: "red",
            }}
          />
        )}
      </Pressable>
    </View>
  );
};

export default HeaderIndex;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    width: screenWidth,
    backgroundColor: "red",
    marginLeft: -16,
  },
  input: {
    flex: 1,
    height: "100%",
    backgroundColor: "blue",
  },
  pressable: {
    justifyContent: "center",
    backgroundColor: "orange",
    height: "100%",
  },
});
