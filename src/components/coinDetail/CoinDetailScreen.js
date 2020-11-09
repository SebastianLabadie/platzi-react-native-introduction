import Axios from "axios";
import React, { useEffect, useState } from "react";
import {
  View,
  Image,
  Text,
  SectionList,
  FlatList,
  StyleSheet,
} from "react-native";
import Http from "../../libs/http";
import { colors } from "../../res/colors";
import CoinMarketItem from "./CoinMarketItem";

export default function CoinDetailScreen({ route, navigation }) {
  const [coin, setCoin] = useState("");
  const [markers, setMarkers] = useState("");

  useEffect(() => {
    const { coin } = route.params;
    setCoin(coin);
    getMarkers(coin.id);
    navigation.setOptions({ title: coin.symbol });
  }, []);

  const getSections = (coin) => {
    const sections = [
      {
        title: "Market Cap",
        data: [coin.market_cap_usd],
      },
      {
        title: "Volume 24h",
        data: [coin.volume24],
      },
      {
        title: "Change 24h",
        data: [coin.percent_change_24h],
      },
    ];

    return sections;
  };

  const getMarkers = async (coinId) => {
    const url = `https://api.coinlore.net/api/coin/markets/?id=${coinId}`;
    const markers = await Http.instance.get(url);
    setMarkers(markers);
  };

  return (
    <View style={styles.container}>
      <View style={styles.subHeader}>
        <Image
          style={styles.imgIcon}
          source={{
            uri: `https://c1.coinlore.com/img/25x25/${coin.nameid}.png`,
          }}
        />
        <Text style={styles.titleText}>{coin?.name}</Text>
      </View>

      <SectionList
        style={styles.sectionList}
        sections={getSections(coin)}
        keyExtractor={(item) => item}
        renderSectionHeader={({ section }) => (
          <View style={styles.sectionItem}>
            <Text style={styles.itemText}>{section.title}</Text>
          </View>
        )}
        renderItem={({ item }) => (
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionText}>{item}</Text>
          </View>
        )}
      />

       <Text style={styles.marketTitle} >Markers</Text> 

        <FlatList style={styles.list} horizontal={true} data={markers} renderItem={({item})=> <CoinMarketItem item={item} key={item.id} />} />    

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.charade,
    flex: 1,
  },
  subHeader: {
    backgroundColor: "rgba(0,0,0,0.1)",
    padding: 16,
    flexDirection: "row",
  },
  titleText: {
    fontSize: 16,
    fontWeight: "bold",
    color: colors.white,
    marginLeft: 8,
  },
  imgIcon: {
    width: 25,
    height: 25,
  },
  sectionHeader: {
    backgroundColor: "rgba(0,0,0,0.2)",
    padding: 8,
  },
  sectionItem: {
    padding: 8,
  },
  itemText: {
    color: colors.white,
    fontSize: 14,
  },
  sectionText: {
    color: colors.white,
    fontSize: 14,
    fontWeight: "bold",
  },
  sectionList:{
      maxHeight:220,
      marginBottom:16
  },
  list:{
    maxHeight:100,
    color:"#fff",
    paddingLeft:16
  },
  marketTitle:{
    color: colors.white,
    fontSize: 16,
    fontWeight: "bold",
    marginBottom:16,
    marginLeft:16,
  },

});
