import React from 'react';
import { View, StyleSheet, ViewStyle } from 'react-native';
import { tokens } from '@/constants/tokens';
import { Text } from './Text';

export type BadgeVariant = 'green' | 'blue';

export interface BadgeProps {
  text: string;
  variant?: BadgeVariant;
  icon?: React.ReactNode;
  style?: ViewStyle;
}

export const Badge: React.FC<BadgeProps> = ({
  text,
  variant = 'green',
  icon,
  style,
}) => {
  const backgroundColor = variant === 'green' ? tokens.color.badgeGreen : tokens.color.badgeBlue;

  return (
    <View style={[styles.badge, { backgroundColor }, style]}>
      {icon && <View style={styles.icon}>{icon}</View>}
      <Text size="xs" color="inverse" weight="semibold">
        {text}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  badge: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: tokens.spacing.md,
    paddingVertical: tokens.spacing.xs,
    borderRadius: tokens.borderRadius.round,
  },
  icon: {
    marginRight: tokens.spacing.xs,
  },
});
