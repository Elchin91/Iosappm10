import React from 'react';
import { View, StyleSheet, ViewStyle } from 'react-native';
import { tokens } from '@/constants/tokens';
import { Text } from './Text';

export interface BalanceProps {
  balance: string | number;
  currency?: string;
  label?: string;
  error?: boolean;
  style?: ViewStyle;
}

export const Balance: React.FC<BalanceProps> = ({
  balance,
  currency = '₼',
  label = 'Доступный баланс',
  error = false,
  style,
}) => {
  return (
    <View
      style={[
        styles.wrapper,
        {
          borderColor: error
            ? tokens.color.borderDestructive
            : tokens.color.borderSecondary,
        },
        style,
      ]}
    >
      <Text size="sm" color={error ? 'destructive' : 'secondary'}>
        {label}
      </Text>
      <Text
        size="xxl"
        weight="semibold"
        color={error ? 'destructive' : 'primary'}
        style={styles.amount}
      >
        {balance} {currency}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    paddingHorizontal: tokens.spacing.md,
    paddingVertical: tokens.spacing.md,
    borderWidth: 1,
    backgroundColor: tokens.color.surfaceTertiary,
    borderRadius: tokens.borderRadius.lg,
  },
  amount: {
    marginTop: tokens.spacing.xs,
  },
});
