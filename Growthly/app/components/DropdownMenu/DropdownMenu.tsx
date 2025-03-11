import React, { useState } from 'react';
import { TouchableOpacity, Text, FlatList, View } from 'react-native';
import { Icon } from 'react-native-elements';
import { Colors } from '@/styles/ColorPalette/colors';
import styles from './DropdownMenu-styles';

interface Props {
  data: { key: string; value: string }[];
  style?: object;
}

const DropdownMenu = ({ data, style }: Props) => {
  const [selected, setSelected] = useState<string>('');
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = (value: string) => {
    setSelected(value);
    setIsOpen(false);
  };

  return (
    <>
      {/* dropdown button, not active */}
      <TouchableOpacity
        style={[styles.dropdown, style]}
        onPress={toggleDropdown}
      >
        <Text style={styles.text}>{selected || 'Province'}</Text>
        <Icon
          name={isOpen ? 'keyboard-arrow-up' : 'keyboard-arrow-down'}
          size={24}
          color={Colors.growthly_white}
          style={styles.caretIcon}
        />
      </TouchableOpacity>

      {/* isOpen = true, dropdown list activated, shows options */}
      {isOpen && (
        <View style={[styles.dropdownOptions, style]}>
          <FlatList
            data={data}
            keyExtractor={(item) => item.key}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={styles.option}
                onPress={() => handleSelect(item.value)}
              >
                <Text style={styles.optionText}>{item.value}</Text>
              </TouchableOpacity>
            )}
            showsVerticalScrollIndicator={false}
          />
        </View>
      )}
    </>
  );
};

export default DropdownMenu;
