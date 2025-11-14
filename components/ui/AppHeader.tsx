import React from 'react';
import { View, StyleSheet, TouchableOpacity, ViewStyle } from 'react-native';
import { useRouter } from 'expo-router';
import { tokens } from '@/constants/tokens';
import { Text } from './Text';
import { ArrowLeft } from 'lucide-react-native';

export interface AppHeaderProps {
  title?: string;
  onBack?: () => void;
  showBackButton?: boolean;
  rightElement?: React.ReactNode;
  style?: ViewStyle;
}

export const AppHeader: React.FC<AppHeaderProps> = ({
  title,
  onBack,
  showBackButton = true,
  rightElement,
  style,
}) => {
  const router = useRouter();

  const handleBack = () => {
    if (onBack) {
      onBack();
    } else if (router.canGoBack()) {
      router.back();
    }
  };

  return (
    <View style={[styles.container, style]}>
      <View style={styles.side}>
        {showBackButton && (
          <TouchableOpacity
            onPress={handleBack}
            activeOpacity={0.7}
            style={styles.backButton}
          >
            <ArrowLeft color={tokens.color.iconPrimary} size={tokens.iconSize.md} />
          </TouchableOpacity>
        )}
      </View>

      {title && (
        <View style={styles.center}>
          <Text size="lg" weight="medium" numberOfLines={1} style={styles.title}>
            {title}
          </Text>
        </View>
      )}

      <View style={styles.side}>
        {rightElement}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: tokens.layout.headerHeight,
    paddingHorizontal: tokens.spacing.lg,
    backgroundColor: tokens.color.surfacePrimary,
    borderBottomWidth: 1,
    borderBottomColor: tokens.color.borderPrimary,
  },
  side: {
    width: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  center: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    textAlign: 'center',
  },
  backButton: {
    padding: tokens.spacing.sm,
  },
});
