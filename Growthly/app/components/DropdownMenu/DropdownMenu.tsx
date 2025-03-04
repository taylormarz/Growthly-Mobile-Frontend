import React, { useState } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import styles from '@/app/components/DropdownMenu/DropdownMenu-styles'

interface Props { }

const DropdownMenu = ({  }: Props) => {
    const [expanded, setExpanded] = useState(false);

    return (
        <TouchableOpacity style={styles.dropdown}>
            <Text style={styles.text}>Province</Text>
            <AntDesign style={styles.ant} name={expanded ? 'caretup' : 'caretdown'}></AntDesign>
        </TouchableOpacity>
    );
};

export default DropdownMenu;