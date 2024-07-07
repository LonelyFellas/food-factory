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

const HeaderIndex: FC<any> = (props) => {
  const colorScheme = useColorScheme();
  return (
    <View style={styles.container}>
      <View style={styles.input}></View>
      {/* <Pressable>
        {({ pressed }) => (
          <FontAwesome
            name="info-circle"
            size={25}
            color={Colors[colorScheme ?? "light"].text}
            style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
          />
        )}
      </Pressable> */}
    </View>
  );
};

export default HeaderIndex;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#f4511e",
    height: "100%",
    width: Dimensions.get("window").width - 40,
  },
  input: {
    flex: 1,
    width: 20,
    height: 10,
    backgroundColor: "red",
  },
});
