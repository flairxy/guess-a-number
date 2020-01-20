import React from "react";
import { View, StyleSheet } from "react-native";

const card = props => {
  return (
    <View style={{ ...styles.card, ...props.style }}>{props.children}</View>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: 20,
    borderRadius: 10,
    // shadow styles work only on ios
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.26,
    backgroundColor: "white",
    marginVertical: 10,

    // to apply shadow to android we use the style below
    elevation: 5
  }
});

export default card;
