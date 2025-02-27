import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text className="text-3xl font-rubik-bold text-red-500 my-16">Welcome to ReState</Text>
      <Link href="/sign-in">Sign in</Link>
      <Link href="/explore">Explore</Link>
      <Link href="/profile"> Profile</Link>
      <Link href="/properties/[id]">Property</Link>
    </View>
  );
}
