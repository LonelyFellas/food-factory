import React from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Link, Tabs } from "expo-router";
import { Pressable } from "react-native";

import Colors from "@/constants/Colors";
import { useColorScheme } from "@/components/useColorScheme";
import { useClientOnlyValue } from "@/components/useClientOnlyValue";
import HeaderIndex from "@/components/index/header-index";

// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        headerStyle: {
          shadowColor: "transparent", // 移除头部下的阴影（iOS）
          borderBottomWidth: 0, // 移除头部下的边框（Android）
        },
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        // Disable the static render of the header on web
        // to prevent a hydration error in React Navigation v6.
        headerShown: useClientOnlyValue(false, true),
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "首页",
          headerTitle: (props) => <HeaderIndex {...props} />,
          // header: () => null,
          tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,
          // headerRight: () => (
          //   <Link href="/modal" asChild>
          //     <Pressable>
          //       {({ pressed }) => (
          //         <FontAwesome
          //           name="info-circle"
          //           size={25}
          //           color={Colors[colorScheme ?? "light"].text}
          //           style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
          //         />
          //       )}
          //     </Pressable>
          //   </Link>
          // ),
        }}
      />
      <Tabs.Screen
        name="two"
        options={{
          title: "分类",
          tabBarIcon: ({ color }) => <TabBarIcon name="filter" color={color} />,
        }}
      />
      <Tabs.Screen
        name="three"
        options={{
          title: "历史",
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="history" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="four"
        options={{
          title: "我的",
          tabBarIcon: ({ color }) => <TabBarIcon name="user" color={color} />,
        }}
      />
    </Tabs>
  );
}
