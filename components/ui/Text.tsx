import React from 'react';
import { Text as RNText, TextProps as RNTextProps, StyleSheet, TextStyle } from 'react-native';
import { tokens } from '@/constants/tokens';

export type TextSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'xxxl' | 'display';
export type TextWeight = 'regular' | 'medium' | 'semibold' | 'bold';
export type TextColor = 'primary' | 'secondary' | 'destructive' | 'inverse' | 'credit';

export interface TextProps extends RNTextProps {
  size?: TextSize;
  weight?: TextWeight;
  color?: TextColor;
  align?: 'left' | 'center' | 'right';
  children?: React.ReactNode;
}

export const Text: React.FC<TextProps> = ({
  size = 'md',
  weight = 'regular',
  color = 'primary',
  align = 'left',
  style,
  children,
  ...props
}) => {
  const textStyle: TextStyle = {
    fontSize: tokens.fontSize[size],
    fontWeight: tokens.fontWeight[weight],
    color: getTextColor(color),
    textAlign: align,
  };

  return (
    <RNText style={[textStyle, style]} {...props}>
      {children}
    </RNText>
  );
};

function getTextColor(color: TextColor): string {
  switch (color) {
    case 'primary':
      return tokens.color.textPrimary;
    case 'secondary':
      return tokens.color.textSecondary;
    case 'destructive':
      return tokens.color.textDestructive;
    case 'inverse':
      return tokens.color.textInverse;
    case 'credit':
      return tokens.color.credit;
    default:
      return tokens.color.textPrimary;
  }
}
