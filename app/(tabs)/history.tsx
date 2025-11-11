import { View, Text, StyleSheet } from 'react-native';

export default function HistoryTab() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Операции</Text>
        <View style={styles.filterButton}>
          <Text style={styles.filterIcon}>⊖</Text>
        </View>
      </View>

      <View style={styles.emptyState}>
        <Text style={styles.dateLabel}>9 ноября</Text>
        <Text style={styles.emptyText}>Нет операций в этот день</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F4F6',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 16,
    paddingBottom: 16,
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: '#1F2937',
  },
  filterButton: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },
  filterIcon: {
    fontSize: 18,
    color: '#1F2937',
  },
  emptyState: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  dateLabel: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1F2937',
    marginBottom: 8,
  },
  emptyText: {
    fontSize: 14,
    color: '#9CA3AF',
  },
});
