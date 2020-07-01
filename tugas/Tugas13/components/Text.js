import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import Badge from './Badge';

export default function TextC(props) {
  const {
    text,
    style,
    weight = 'Medium',
    color = '#424242',
    size = 0,
    lineBreak = 'tail',
    badge = false,
    badgeColor = '#55FF46',
    badgeText = 'Basic',
  } = props;

  let fontSize = size === 0 ? '' : {fontSize: size};
  return (
    <View style={styles.textContainer}>
      <Text
        lineBreakMode={lineBreak}
        style={[{fontFamily: `Rubik-${weight}`, color}, fontSize, style]}>
        {text}
      </Text>
      {badge ? (
        <Badge style={styles.badge} text={badgeText} color={badgeColor} />
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  textContainer: {
    flexDirection: 'row',
  },
  badge: {
    alignItems: 'center',
  },
});
