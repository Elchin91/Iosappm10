import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { ClockRotateLeft } from 'lucide-react-native';
import { Text } from '@/components/ui/Text';
import { tokens } from '@/constants/tokens';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function HistoryTab() {
  const insets = useSafeAreaInsets();

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={[styles.header, { paddingTop: (insets.top || 44) + tokens.spacing.lg }]}>
        <Text size="xxxl" weight="bold" color="primary">
          Операции
        </Text>
        <TouchableOpacity style={styles.menuButton} activeOpacity={0.7}>
          <FontAwesome5 name="bars" size={24} color={tokens.color.textPrimary} />
        </TouchableOpacity>
      </View>

      {/* Main Content */}
      <View style={styles.content}>
        {/* Date Section */}
        <View style={styles.dateSection}>
          <Text size="xl" weight="semibold" color="primary" style={styles.dateLabel}>
            9 ноября
          </Text>

          {/* Empty State */}
          <View style={styles.emptyState}>
            <View style={styles.emptyStateIcon}>
              <ClockRotateLeft size={48} color={tokens.color.iconSecondary} />
            </View>
            <Text size="lg" weight="semibold" color="primary" style={styles.emptyStateTitle}>
              Нет операций
            </Text>
            <Text size="md" color="secondary" style={styles.emptyStateText}>
              История ваших транзакций появится здесь
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FAFB',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: tokens.spacing.xl,
    paddingBottom: tokens.spacing.lg,
    backgroundColor: tokens.color.surfacePrimary,
  },
  menuButton: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    flex: 1,
    paddingHorizontal: tokens.spacing.xl,
    paddingTop: tokens.spacing.xl,
  },
  dateSection: {
    flex: 1,
  },
  dateLabel: {
    marginBottom: tokens.spacing.lg,
  },
  emptyState: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 80,
  },
  emptyStateIcon: {
    width: 96,
    height: 96,
    borderRadius: 48,
    backgroundColor: tokens.color.surfaceTertiary,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: tokens.spacing.xl,
  },
  emptyStateTitle: {
    marginBottom: tokens.spacing.sm,
  },
  emptyStateText: {
    textAlign: 'center',
    paddingHorizontal: tokens.spacing.xxl,
  },
});
