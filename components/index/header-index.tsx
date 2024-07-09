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
import { MaterialIcons } from "@expo/vector-icons";

const screenWidth = Dimensions.get("screen").width;
const HeaderIndex: FC<any> = (props) => {
  const colorScheme = useColorScheme();

  return (
    <View style={styles.container}>
      <View style={styles.input}>
        <MaterialIcons name="search" size={22} color="blue"></MaterialIcons>
        <Text style={{ color: Colors[colorScheme ?? "light"].text }}>
          大家都在搜...
        </Text>
      </View>
      <Pressable style={styles.pressable}>
        {({ pressed }) => (
          <FontAwesome
            name="download"
            size={25}
            color={Colors[colorScheme ?? "light"].text}
            style={{
              opacity: pressed ? 0.5 : 1,
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
    paddingHorizontal: 15,
    paddingVertical: 5,
    gap: 20,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    width: screenWidth,
    marginLeft: -16,
  },
  input: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    gap: 5,
    flex: 1,
    height: "100%",
    backgroundColor: "lightgray",
    borderRadius: 25,
    marginVertical: 5,
    paddingLeft: 10,
  },
  pressable: {
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
  },
});
