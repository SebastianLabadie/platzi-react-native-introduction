import React from "react";
import {
  View,
  StyleSheet,
  Image,
  Text,
  Platform,
  Pressable,
} from "react-native";
import { colors } from "../../res/colors";

export default function CoinsItem({ item, onPress }) {
  const getImageArrow = () => {
    if (item.percent_change_1h < 0) {
      return require("../../assets/arrow_down.png");
    } else {
      return require("../../assets/arrow_up.png");
    }
  };

  return (
    <Pressable onPress={onPress} style={styles.container}>
      <View style={styles.row}>
        <Text style={styles.nameText}>{item.name}</Text>
        <Text style={styles.symbolText}>{item.symbol}</Text>
        <Text style={styles.priceText}>{`$${item.price_usd}`}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.percentText}>{item.percent_change_1h}</Text>
        <Image source={getImageArrow()} style={styles.arrowIcon} />
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 16,
    justifyContent: "space-between",
    borderBottomColor: colors.zircon,
    borderBottomWidth: 1,
    marginLeft: Platform.OS === "ios" ? 16 : 0,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  symbolText: {
    color: colors.white,
    fontWeight: "bold",
    fontSize: 16,
  },
  nameText: {
    color: colors.white,
    fontSize: 14,
    marginRight: 16,
  },
  percentText: {
    color: colors.white,
    fontSize: 12,
    marginRight: 8,
  },
  priceText: {
    color: colors.white,
    fontSize: 14,
    marginLeft: 5,
  },
  arrowIcon: {
    width: 22,
    height: 22,
  },
});
