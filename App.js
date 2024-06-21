import { StatusBar } from "expo-status-bar";
import { Pressable, StyleSheet, Text, View } from "react-native";
import LottieView from "lottie-react-native";
import { useEffect, useRef } from "react";

export default function App() {
  const giftRef = useRef();
  useEffect(() => {}, []);
  const openGift = () => {
    giftRef?.current?.play();
  };
  return (
    <View style={styles.container}>
      <View style={styles.welcome}>
        <LottieView
          style={{ flex: 1 }}
          source={require("./assets/welcome.json")}
          autoPlay={true}
          loop={true}
        />
      </View>
      <View style={styles.iconRow}>
        <Pressable style={styles.icon} onPress={openGift}>
          <LottieView
            ref={giftRef}
            style={{ flex: 1 }}
            source={require("./assets/gift.json")}
            loop={false}
          />
        </Pressable>
      </View>
      <Text style={styles.text}>
        Open up App.js to start working on your app!
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-around",
    paddingVertical: 100,
  },
  text: {
    fontSize: 40,
    color: "lightblue",
  },
  welcome: {
    height: 300,
    aspectRatio: 1,
  },
  iconRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  icon: {
    height: 200,
    aspectRatio: 1,
  },
});
