import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router'

export default function PersonalPage() {

    const { username } = useLocalSearchParams();
  return (
    <View style={styleSheet.container}>
      <Text style={styleSheet.pageName}>{username}</Text>
      <View style={styleSheet.detailsContainer}>
        <Text style={styleSheet.accountType}>Main Account </Text>
        <Text style={styleSheet.balance}>13.458 $</Text>
        <Text style={styleSheet.balanceType}> Current balance</Text>
      <View style={styleSheet.cardsContainer}>
        <TouchableOpacity>
          <Text>+</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text>-</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text>Split Purchase</Text>
        </TouchableOpacity>
      </View>
      </View>
      <View>
        <Text>Recently Events</Text>
      </View>
    </View>
  );
}

const styleSheet = StyleSheet.create({
  container: {
    gap: 10,
    justifyContent: "center",
    padding: 10,
    backgroundColor: "white",
    flex: 1,
  },
  detailsContainer: {
    gap: 6,
  },
  pageName: {
    fontSize: 28,
    textDecorationStyle: "solid",
  },
  accountType: {
    fontSize: 16,
    fontWeight: "700",
    color: "purple",
  },
  balance: {
    fontSize: 30,
    fontWeight: "600",
  },
  balanceType: {
    color: "gray",
    fontSize: 14,
  },
  cardsContainer: {
    flexDirection: 'row'
  },
  smallCard: {},
  largeCard: {},
  listTitle: {},
});