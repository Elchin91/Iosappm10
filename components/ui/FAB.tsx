import React from 'react';
import { TouchableOpacity, StyleSheet, View, ViewStyle } from 'react-native';
import { HelpCircle } from 'lucide-react-native';
import { tokens } from '@/constants/tokens';

export interface FABProps {
  onPress?: () => void;
  style?: ViewStyle;
}

export const FAB: React.FC<FABProps> = ({ onPress, style }) => {
  return (
    <TouchableOpacity
      style={[styles.fab, style]}
      onPress={onPress}
      activeOpacity={0.8}
    >
      <View style={styles.iconContainer}>
        <HelpCircle color={tokens.color.textPrimary} size={28} strokeWidth={2.5} />
      </View>
      <View style={styles.accent} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  fab: {
    position: 'absolute',
    bottom: tokens.spacing.xl + 84, // 84 is the tab bar height
    right: tokens.spacing.lg,
    width: 56,
    height: 56,
    borderRadius: tokens.borderRadius.round,
    backgroundColor: tokens.color.fabCyan,
    justifyContent: 'center',
    alignItems: 'center',
    ...tokens.shadow.lg,
    elevation: 8,
  },
  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  accent: {
    position: 'absolute',
    top: -4,
    right: -4,
    width: 16,
    height: 16,
    borderRadius: tokens.borderRadius.round,
    backgroundColor: tokens.color.fabYellow,
    borderWidth: 2,
    borderColor: tokens.color.surfacePrimary,
  },
});
