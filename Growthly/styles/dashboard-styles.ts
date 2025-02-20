import { StyleSheet } from "react-native";
import { Colors } from "./colors";

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    left: 40,
    top: 225,
    color: Colors.growthly_darkblue,
    fontSize: 35,
    fontWeight: 'bold',
  },
  overviewContainer: {
    backgroundColor: Colors.growthly_lightblue,
    borderRadius: 15,
    width: 350,
    height: 450,
    top: 245,
    left: 40,
  },
});

export default styles;