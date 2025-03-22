import React, { useState } from 'react';
import { TouchableOpacity, Text, FlatList, View } from 'react-native';
import { Icon } from 'react-native-elements';
import { Colors } from '@/styles/ColorPalette/colors';
import styles from './DropdownMenu-styles';

interface Props {
  data: { key: string; value: string }[];
  value: string;
  onSelect: (selected: { key: string; value: string }) => void;
  style?: object;
}

const DropdownMenu = ({ data, value, onSelect, style }: Props) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = (item: { key: string; value: string }) => {
    onSelect(item);
    setIsOpen(false);
  };

  return (
    <>
      {/* Dropdown button */}
      <TouchableOpacity style={[styles.dropdown, style]} onPress={toggleDropdown}>
        <Text style={styles.text}>{value || 'Province'}</Text>
        <Icon
          name={isOpen ? 'keyboard-arrow-up' : 'keyboard-arrow-down'}
          size={24}
          color={Colors.growthly_white}
          style={styles.caretIcon}
        />
      </TouchableOpacity>

      {/* Dropdown list */}
      {isOpen && (
        <View style={[styles.dropdownOptions, style]}>
          <FlatList
            data={data}
            keyExtractor={(item) => item.key}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={styles.option}
                onPress={() => handleSelect(item)}
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
