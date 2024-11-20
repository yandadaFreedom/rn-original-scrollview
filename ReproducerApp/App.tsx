import { StyleSheet, View, Text, ScrollView } from 'react-native';

const styles = StyleSheet.create({
  wrapper: {
    position: "absolute",
    bottom: 0,
    left: 0,
    width: "100%",
    height: 130,
  },
  scrollView: {
    backgroundColor: 'red',
    width: "100%",
  },
  viewContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "stretch",
    minHeight: 45,
    minWidth: '100%'
  },
  ViewItem: {
    position: 'relative',
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: "25%",
  },
  View1: {
    backgroundColor: 'pink',
  },
   View2: {
    backgroundColor: 'green',
  },
   View3: {
    backgroundColor: 'blue',
  }
});

function App() {
  function onTouchStart3 () {
    alert('onTouchStart3')
  }
  function onTouchStart2 () {
    alert('onTouchStart2')
  }
  function onTouchStart1 () {
    alert('onTouchStart1')
  }
  return (
      <View style={styles.wrapper}>
        <ScrollView
          horizontal={true}
          style={styles.scrollView}
        >
          <View style={styles.viewContainer}>
            <View onTouchStart={onTouchStart1} style={{...styles.ViewItem, ...styles.View1}}><Text>View1</Text></View>
            <View onTouchStart={onTouchStart2}  style={{...styles.ViewItem, ...styles.View2}}><Text>View2</Text></View>
            <View onTouchStart={onTouchStart3} style={{...styles.ViewItem, ...styles.View3}}><Text>View3</Text></View>
          </View>
        </ScrollView>
      </View>
  );
}



export default App;
