import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default function Badge(props) {
  const {text, color, style} = props;
  return <Text style={[styles.badge, {backgroundColor: color}]}>{text}</Text>;
}

const styles = StyleSheet.create({
  badge: {
    // width: 50,
    marginLeft: 5,
    paddingHorizontal: 5,
    paddingVertical: 3,
    borderRadius: 4,
    fontSize: 10,
    flexDirection: 'row',
    alignSelf: 'center',
  },
});
