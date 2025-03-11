import { View, Text, Image } from 'react-native';
import styles from './Banner-styles';

interface Props {
  subheading: string;
  heading: string;
  onPress: () => void;
}

// for use in sub settings screens
const Banner = ({ subheading, heading, onPress }: Props) => {
  return (
    <View>
      {/* logo + cancel button banner, also added sub and heading since each subsetting screen will have this */}
      <View>
        <Image
          source={require('@/assets/images/logo/growthly-logo-color.png')}
          style={styles.growthlyLogo}
        />
        <Text onPress={onPress} style={styles.cancelButtonText}>
          Cancel
        </Text>
      </View>

      <View style={styles.keyline}></View>
      <Text style={styles.subheadingText}>{subheading}</Text>
      <Text style={styles.headerText}>{heading}</Text>
    </View>
  );
};

export default Banner;
