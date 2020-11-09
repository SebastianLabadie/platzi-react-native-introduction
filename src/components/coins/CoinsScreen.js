import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Pressable,
  ActivityIndicator,
  StyleSheet,
  FlatList,
} from "react-native";
import Http from "../../libs/http";
import { colors } from "../../res/colors";
import CoinsItem from "./CoinsItem";
import CoinsSearch from "./CoinsSearch";

export default function CoinsScreen({ navigation }) {
  const [coins, setCoins] = useState(null);
  const [allCoins, setAllCoins] = useState(null);
  const [loading, setLoading] = useState(false);

  const handlePress = (coin) => {
    navigation.navigate("Coin Detail",{coin});
  };

  const getCoins = async () => {
    const res = await Http.instance.get("https://api.coinlore.net/api/tickers");
    setCoins(res.data);
    setAllCoins(res.data)
  };

  useEffect(() => {
    setLoading(true);
    getCoins();
    setLoading(false);
  }, []);



  const handleSearch=(query)=>{
    const filtered= allCoins.filter(coin=>coin.name.toLowerCase().includes(query.toLowerCase()) || coin.symbol.toLowerCase().includes(query.toLowerCase()))
    setCoins(filtered)
}

  return (
    <View style={styles.container}>
        <CoinsSearch onChange={handleSearch} />
      {loading ? (
        <ActivityIndicator style={styles.loader} color="#fff" size="large" />
      ) : (
        <FlatList
          data={coins}
          renderItem={({ item }) => <CoinsItem item={item} onPress={()=>handlePress(item)} />}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.charade,
  },
  titleText: {
    color: colors.white,
    textAlign: "center",
  },
  btn: {
    padding: 8,
    backgroundColor: "blue",
    borderRadius: 8,
    margin: 16,
  },
  btnText: {
    color: colors.white,
    textAlign: "center",
  },
  loader: {
    marginTop: 60,
  },
});
