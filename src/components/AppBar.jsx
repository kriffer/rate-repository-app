import { View, Text, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#24292e',
    opacity: 50

  },
   text:{
    color: 'white',
    marginTop: 10,
    marginLeft: 10,
    marginBottom: 10
   }
});

const AppBar = () => {
  return <View style={styles.container}><Text style={styles.text}>Repositories</Text></View>;
};

export default AppBar;