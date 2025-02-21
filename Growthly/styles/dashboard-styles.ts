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
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoutButton: {
    backgroundColor: Colors.growthly_green,
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 15,
    position: 'absolute',
    top: 145,
    left: 265,
  },
  logoutText: {
    color: Colors.growthly_darkblue,
    fontFamily: 'Inter-Medium',
    fontSize: 15
  },
});

export default styles;