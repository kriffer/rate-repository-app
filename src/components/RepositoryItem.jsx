import { View, Image, StyleSheet } from "react-native";
import Text from "./Text";

const RepositoryItem = ({ item }) => {
  const styles = StyleSheet.create({
    container: {
      display: "flex",
      padding: 10,
      backgroundColor: "white",
    },

    flexPartA: {
      flexDirection: "row",
      alignItems: "center",
   
    },
    flexPartAA: {
      flexDirection: "column",
      justifyContent: "space-around",
      marginLeft: 10,
      marginRight: 10,
      wordWrap: "normal",
    },
    flexPartB: {
      flexDirection: "row",
      padding: 10,
      alignItems: "center",
      justifyContent: "space-around",
    },

    tagBox: {
      display: "flex",
      flexWrap: "wrap",
    },
    tagInline: {
      display: "inline",
      backgroundColor: "#0366d6",
      padding: 5,
      margin: 5,
      color: "white",
      textAlign: "center",
    },
    tinyLogo: {
      width: 50,
      height: 50,
    },
    logo: {
      width: 66,
      height: 66,
      borderRadius: 5,
    },
  });

  const getAmountsView = (number) => {
    return number >= 1000 ? `${(number / 1000).toFixed(1)}k` : number;
  };

  return (
    <View style={styles.container}>
      <View style={styles.flexPartA}>
        <Image style={styles.logo} source={{ uri: `${item.ownerAvatarUrl}` }} />
        <View style={styles.flexPartAA}>
          <Text fontWeight="bold" color="textPrimary" fontSize="subheading">
            {item.fullName}
          </Text>
          <Text color="textSecondary" fontSize="body">
            {item.description}
          </Text>
          <View style={styles.tagBox}>
            <Text style={styles.tagInline}>{item.language}</Text>
          </View>
        </View>
      </View>
      <View style={styles.flexPartB}>
        <View style={styles.flexPartAA}>
          <Text fontWeight="bold" color="textPrimary">
            {getAmountsView(item.stargazersCount)}
          </Text>
          <Text color="textSecondary">Stars:</Text>
        </View>
        <View style={styles.flexPartAA}>
          <Text fontWeight="bold" color="textPrimary">
            {" "}
            {getAmountsView(item.forksCount)}
          </Text>
          <Text color="textSecondary">Forks:</Text>
        </View>
        <View style={styles.flexPartAA}>
          <Text fontWeight="bold" color="textPrimary">
            {getAmountsView(item.reviewCount)}
          </Text>
          <Text color="textSecondary">Reviews:</Text>
        </View>
        <View style={styles.flexPartAA}>
          <Text fontWeight="bold" color="textPrimary">
            {getAmountsView(item.ratingAverage)}
          </Text>
          <Text color="textSecondary">Rating: </Text>
        </View>
      </View>
    </View>
  );
};

export default RepositoryItem;
