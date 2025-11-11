import { View, Text, StyleSheet, ScrollView, TouchableOpacity, SectionList } from 'react-native';
import { Search } from 'lucide-react-native';

export default function PaymentsTab() {
  const payments = [
    { id: '1', name: 'Мой номер', icon: '📱', number: '' },
    { id: '2', name: 'Azercell', icon: '✡️', number: '102533806' },
    { id: '3', name: 'Azercell', icon: '✡️', number: '505199991' },
    { id: '4', name: 'Citel', icon: '📳', number: '45...' },
  ];

  const sections = [
    {
      title: 'Мобильные операторы',
      data: [{ text: 'Мобильные операторы', cashback: '2%' }],
    },
    {
      title: 'Коммунальные услуги',
      data: [{ text: 'Коммунальные услуги', cashback: '2%' }],
    },
    {
      title: 'Платежи',
      data: [{ text: 'BakiKart', icon: '💳' }],
    },
    {
      title: 'Услуги',
      data: [{ text: 'Банковские услуги', icon: '🏦' }],
    },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Сервисы</Text>
        <Search color="#1F2937" size={24} />
      </View>

      <View style={styles.servicesGrid}>
        <View style={styles.gridRow}>
          <ServiceGridItem icon="🚗" title="Мой гараж" isNew />
          <ServiceGridItem
            icon="📋"
            title="Кабинет Azeriqaz"
            isNew
          />
        </View>
      </View>

      <View style={styles.paymentsSection}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Мои платежи</Text>
          <TouchableOpacity>
            <Text style={styles.viewAll}>Все ></Text>
          </TouchableOpacity>
        </View>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.paymentsScroll}
        >
          {payments.map((payment) => (
            <TouchableOpacity key={payment.id} style={styles.paymentCard}>
              <View style={styles.paymentCardContent}>
                <Text style={styles.paymentIcon}>{payment.icon}</Text>
                <Text style={styles.paymentName}>{payment.name}</Text>
                {payment.number && (
                  <Text style={styles.paymentNumber}>{payment.number}</Text>
                )}
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      <ScrollView style={styles.servicesContent} showsVerticalScrollIndicator={false}>
        {sections.map((section, index) => (
          <View key={index}>
            <Text style={styles.categoryTitle}>{section.title}</Text>
            {section.data.map((item, itemIndex) => (
              <TouchableOpacity
                key={itemIndex}
                style={styles.serviceItem}
              >
                {item.icon && <Text style={styles.itemIcon}>{item.icon}</Text>}
                <View style={styles.itemContent}>
                  <Text style={styles.itemTitle}>{item.text}</Text>
                </View>
                {item.cashback && (
                  <View style={styles.cashbackBadge}>
                    <Text style={styles.cashbackText}>{item.cashback}</Text>
                  </View>
                )}
              </TouchableOpacity>
            ))}
          </View>
        ))}
        <View style={{ height: 20 }} />
      </ScrollView>
    </View>
  );
}

function ServiceGridItem({
  icon,
  title,
  isNew,
}: {
  icon: string;
  title: string;
  isNew?: boolean;
}) {
  return (
    <TouchableOpacity style={styles.gridItem}>
      {isNew && <View style={styles.newBadge}>
        <Text style={styles.newBadgeText}>Новинка</Text>
      </View>}
      <Text style={styles.gridIcon}>{icon}</Text>
      <Text style={styles.gridTitle}>{title}</Text>
    </TouchableOpacity>
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
  servicesGrid: {
    paddingHorizontal: 16,
    marginBottom: 20,
  },
  gridRow: {
    flexDirection: 'row',
    gap: 12,
  },
  gridItem: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 16,
    height: 140,
    justifyContent: 'space-between',
  },
  newBadge: {
    backgroundColor: '#10B981',
    borderRadius: 12,
    paddingHorizontal: 12,
    paddingVertical: 4,
    alignSelf: 'flex-start',
    marginBottom: 8,
  },
  newBadgeText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#FFFFFF',
  },
  gridIcon: {
    fontSize: 32,
    marginVertical: 8,
  },
  gridTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1F2937',
  },
  paymentsSection: {
    marginBottom: 20,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginBottom: 12,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#1F2937',
  },
  viewAll: {
    fontSize: 14,
    color: '#9CA3AF',
  },
  paymentsScroll: {
    paddingHorizontal: 16,
  },
  paymentCard: {
    width: 100,
    height: 120,
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 12,
    marginRight: 12,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  paymentCardContent: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
    flex: 1,
  },
  paymentIcon: {
    fontSize: 24,
  },
  paymentName: {
    fontSize: 12,
    fontWeight: '600',
    color: '#1F2937',
    textAlign: 'center',
  },
  paymentNumber: {
    fontSize: 11,
    color: '#9CA3AF',
  },
  servicesContent: {
    paddingHorizontal: 16,
  },
  categoryTitle: {
    fontSize: 12,
    fontWeight: '600',
    color: '#9CA3AF',
    textTransform: 'uppercase',
    marginTop: 16,
    marginBottom: 8,
  },
  serviceItem: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    paddingVertical: 14,
    paddingHorizontal: 14,
    marginBottom: 8,
    flexDirection: 'row',
    alignItems: 'center',
  },
  itemIcon: {
    fontSize: 20,
    marginRight: 12,
  },
  itemContent: {
    flex: 1,
  },
  itemTitle: {
    fontSize: 14,
    fontWeight: '500',
    color: '#1F2937',
  },
  cashbackBadge: {
    backgroundColor: '#3B82F6',
    borderRadius: 12,
    paddingHorizontal: 10,
    paddingVertical: 4,
  },
  cashbackText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#FFFFFF',
  },
});
