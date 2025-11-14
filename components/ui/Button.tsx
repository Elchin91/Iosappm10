import React from 'react';
import {
  TouchableOpacity,
  TouchableOpacityProps,
  StyleSheet,
  View,
  ActivityIndicator,
} from 'react-native';
import { tokens } from '@/constants/tokens';
import { Text } from './Text';

export type ButtonVariant = 'primary' | 'secondary' | 'destructive' | 'outline';
export type ButtonSize = 'sm' | 'md' | 'lg';

export interface ButtonProps extends TouchableOpacityProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
  loading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  children?: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  loading = false,
  leftIcon,
  rightIcon,
  disabled,
  style,
  children,
  ...props
}) => {
  const buttonStyles = [
    styles.base,
    styles[variant],
    styles[size],
    fullWidth && styles.fullWidth,
    disabled && styles.disabled,
    style,
  ];

  const textColor = getTextColor(variant, disabled);

  return (
    <TouchableOpacity
      style={buttonStyles}
      disabled={disabled || loading}
      activeOpacity={0.7}
      {...props}
    >
      {loading ? (
        <ActivityIndicator
          color={variant === 'primary' ? tokens.color.textInverse : tokens.color.textPrimary}
        />
      ) : (
        <View style={styles.content}>
          {leftIcon && <View style={styles.iconLeft}>{leftIcon}</View>}
          {typeof children === 'string' ? (
            <Text
              size={size === 'sm' ? 'sm' : size === 'lg' ? 'lg' : 'md'}
              weight="medium"
              style={{ color: textColor }}
            >
              {children}
            </Text>
          ) : (
            children
          )}
          {rightIcon && <View style={styles.iconRight}>{rightIcon}</View>}
        </View>
      )}
    </TouchableOpacity>
  );
};

function getTextColor(variant: ButtonVariant, disabled?: boolean): string {
  if (disabled) {
    return tokens.color.textSecondary;
  }

  switch (variant) {
    case 'primary':
    case 'destructive':
      return tokens.color.textInverse;
    case 'secondary':
    case 'outline':
      return tokens.color.textPrimary;
    default:
      return tokens.color.textPrimary;
  }
}

const styles = StyleSheet.create({
  base: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: tokens.borderRadius.md,
    ...tokens.shadow.sm,
  },
  primary: {
    backgroundColor: tokens.color.controlPrimary,
  },
  secondary: {
    backgroundColor: tokens.color.controlSecondary,
  },
  destructive: {
    backgroundColor: tokens.color.controlDestructive,
  },
  outline: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: tokens.color.borderPrimary,
  },
  sm: {
    paddingHorizontal: tokens.spacing.md,
    paddingVertical: tokens.spacing.sm,
    minHeight: 36,
  },
  md: {
    paddingHorizontal: tokens.spacing.lg,
    paddingVertical: tokens.spacing.md,
    minHeight: 44,
  },
  lg: {
    paddingHorizontal: tokens.spacing.xl,
    paddingVertical: tokens.spacing.lg,
    minHeight: 56,
  },
  fullWidth: {
    width: '100%',
  },
  disabled: {
    opacity: 0.5,
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconLeft: {
    marginRight: tokens.spacing.sm,
  },
  iconRight: {
    marginLeft: tokens.spacing.sm,
  },
});
