import React from 'react';
import { TextStyle, View, Text } from 'react-native';
import { useUser } from '@/context/UserContext';
import styles from './Header.styles';

interface Props {
    title: string;
    subtitle: string;
}

const Header = ({ title, subtitle }: Props): JSX.Element => {

    return (
      <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>{subtitle}</Text>
      </View>
    );
};

export default Header;