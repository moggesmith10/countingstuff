import { Text, View, StyleSheet } from "react-native";

import { CountableButton } from "./CountableButton";
import { CommonStyles } from "../styles/CommonStyles";

export const CountableRow = ({ countable, changeCount, index, deleteRow }) => (
  <View style={CommonStyles.row}>
    <View style={styles.indexColumn}>
      <Text style={CommonStyles.textItem}>{index}</Text>
    </View>
    <View style={styles.nameColumn}>
      <Text style={CommonStyles.textItem}>{countable.name}</Text>
      <Text style={CommonStyles.textItem}>{countable.count}</Text>
    </View>
    <View style={styles.buttonColumn}>
      <CountableButton
        label="+"
        submit={() => {
          changeCount(1, index);
        }}
      />
      <CountableButton
        label="-"
        submit={() => {
          changeCount(-1, index);
        }}
      />
    </View>
    <View style={styles.buttonColumn}>
    <CountableButton
        label="-"
        submit={() => {
          deleteRow(index);
        }}
      />
    </View>
  </View>
);

const styles = StyleSheet.create({
  indexColumn: {
    flex: 0.1
  },
  nameColumn: {
    flex: 0.7,
    alignItems: "center",
  },
  buttonColumn: {
    flex: 0.2,
  },
});
