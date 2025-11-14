import React from 'react';
import { View, StyleSheet, ViewStyle, TouchableOpacity, TouchableOpacityProps } from 'react-native';
import { tokens } from '@/constants/tokens';

export interface CardProps extends TouchableOpacityProps {
  variant?: 'default' | 'elevated' | 'outlined';
  padding?: keyof typeof tokens.spacing;
  children: React.ReactNode;
  style?: ViewStyle;
  pressable?: boolean;
}

export const Card: React.FC<CardProps> = ({
  variant = 'default',
  padding = 'lg',
  children,
  style,
  pressable = false,
  onPress,
  ...props
}) => {
  const cardStyles = [
    styles.base,
    styles[variant],
    { padding: tokens.spacing[padding] },
    style,
  ];

  if (pressable || onPress) {
    return (
      <TouchableOpacity
        style={cardStyles}
        activeOpacity={0.7}
        onPress={onPress}
        {...props}
      >
        {children}
      </TouchableOpacity>
    );
  }

  return <View style={cardStyles}>{children}</View>;
};

const styles = StyleSheet.create({
  base: {
    borderRadius: tokens.borderRadius.lg,
    backgroundColor: tokens.color.surfacePrimary,
  },
  default: {
    ...tokens.shadow.sm,
  },
  elevated: {
    ...tokens.shadow.md,
  },
  outlined: {
    borderWidth: 1,
    borderColor: tokens.color.borderPrimary,
  },
});
