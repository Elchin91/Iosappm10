import { View, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { Search, Droplet, Mobile, Home, CreditCard, Building2, Lemon } from 'lucide-react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { Text } from '@/components/ui/Text';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { tokens } from '@/constants/tokens';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function PaymentsTab() {
  const insets = useSafeAreaInsets();

  const payments = [
    { id: '1', name: 'Мой номер', icon: Mobile, iconColor: '#3B82F6', number: '' },
    { id: '2', name: 'Azercell', icon: null, number: '102533806' },
    { id: '3', name: 'Azercell', icon: null, number: '505199991' },
  ];

  const sections = [
    {
      title: 'Мобильные операторы',
      data: [{ text: 'Мобильные операторы', cashback: '2%', icon: Mobile, iconColor: '#22D3EE' }],
    },
    {
      title: 'Коммунальные услуги',
      data: [{ text: 'Коммунальные услуги', cashback: '2%', icon: Home, iconColor: '#22D3EE' }],
    },
    {
      title: 'Платежи',
      data: [{ text: 'BakiKart', icon: CreditCard, iconColor: '#22D3EE' }],
    },
    {
      title: 'Услуги',
      data: [{ text: 'Банковские услуги', icon: Building2, iconColor: '#22D3EE', hasLemon: true }],
    },
  ];

  return (
    <View style={styles.container}>
      {/* Status Bar Spacer */}
      <View style={{ height: insets.top || 44 }} />

      {/* Header */}
      <View style={styles.header}>
        <Text size="xxxl" weight="bold" color="primary">
          Сервисы
        </Text>
        <TouchableOpacity style={styles.searchButton}>
          <FontAwesome5 name="magnifying-glass" size={24} color={tokens.color.textPrimary} />
        </TouchableOpacity>
      </View>

      {/* Main Content */}
      <ScrollView 
        style={styles.scrollView} 
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 100 }}
      >
        {/* New Services Cards */}
        <View style={styles.newServicesSection}>
          <ScrollView 
            horizontal 
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.newServicesScroll}
          >
            <ServiceGridItem 
              title="Мой гараж" 
              isNew 
              imageUrl="https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=800"
            />
            <ServiceGridItem 
              title="Кабинет Azeriqaz" 
              isNew 
              imageUrl="https://images.pexels.com/photos/414928/pexels-photo-414928.jpeg?auto=compress&cs=tinysrgb&w=800"
            />
          </ScrollView>
        </View>

        {/* My Payments Section */}
        <View style={styles.paymentsSection}>
          <View style={styles.sectionHeader}>
            <Text size="xxl" weight="bold" color="primary">
              Мои платежи
            </Text>
            <TouchableOpacity style={styles.allButton}>
              <Text size="md" weight="medium" color="primary">Все</Text>
              <FontAwesome5 name="chevron-right" size={12} color={tokens.color.textPrimary} style={{ marginLeft: 4 }} />
            </TouchableOpacity>
          </View>

          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.paymentsScroll}
          >
            {payments.map((payment) => (
              <Card
                key={payment.id}
                pressable
                padding="lg"
                style={styles.paymentCard}
              >
                <View style={styles.paymentCardContent}>
                  {payment.icon ? (
                    <View style={[styles.paymentIconContainer, { backgroundColor: payment.iconColor + '20' }]}>
                      <payment.icon color={payment.iconColor} size={32} />
                    </View>
                  ) : (
                    <View style={styles.azercellIcon}>
                      <AzercellIcon />
                    </View>
                  )}
                  <Text size="sm" weight="semibold" color="primary" style={styles.paymentName}>
                    {payment.name}
                  </Text>
                  {payment.number && (
                    <Text size="xs" color="secondary" style={styles.paymentNumber}>
                      {payment.number}
                    </Text>
                  )}
                </View>
              </Card>
            ))}
          </ScrollView>
        </View>

        {/* Services List */}
        <View style={styles.servicesList}>
          {sections.map((section, index) => (
            <View key={index}>
              {section.data.map((item, itemIndex) => (
                <Card
                  key={itemIndex}
                  pressable
                  padding="lg"
                  style={styles.serviceItem}
                >
                  <View style={styles.serviceItemLeft}>
                    <View style={styles.serviceIconContainer}>
                      <item.icon color={item.iconColor} size={32} />
                    </View>
                    <Text size="md" weight="semibold" color="primary">
                      {item.text}
                    </Text>
                  </View>
                  {item.cashback && (
                    <Badge
                      text={item.cashback}
                      variant="blue"
                      icon={<Droplet size={12} color={tokens.color.textInverse} />}
                    />
                  )}
                  {item.hasLemon && (
                    <View style={styles.lemonIcon}>
                      <Lemon size={32} color="#FCD34D" />
                    </View>
                  )}
                </Card>
              ))}
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

function ServiceGridItem({
  title,
  isNew,
  imageUrl,
}: {
  title: string;
  isNew?: boolean;
  imageUrl?: string;
}) {
  return (
    <Card pressable padding="lg" style={styles.gridItem}>
      {isNew && (
        <Badge text="Новинка" variant="green" style={styles.gridBadge} />
      )}
      <Text size="lg" weight="bold" color="primary" style={styles.gridTitle}>
        {title}
      </Text>
      {imageUrl && (
        <Image 
          source={{ uri: imageUrl }} 
          style={styles.gridImage}
          resizeMode="cover"
        />
      )}
    </Card>
  );
}

function AzercellIcon() {
  return (
    <View style={styles.azercellIconContainer}>
      <View style={styles.azercellIconInner}>
        <View style={styles.azercellPlayButton} />
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
    paddingHorizontal: tokens.spacing.lg,
    paddingVertical: tokens.spacing.lg,
    backgroundColor: '#F9FAFB',
  },
  searchButton: {
    minWidth: 48,
    minHeight: 48,
    justifyContent: 'center',
    alignItems: 'center',
  },
  scrollView: {
    flex: 1,
  },
  newServicesSection: {
    marginBottom: tokens.spacing.xl,
  },
  newServicesScroll: {
    paddingHorizontal: tokens.spacing.lg,
    gap: tokens.spacing.md,
  },
  gridItem: {
    minWidth: 160,
    borderRadius: 16,
    ...tokens.shadow.sm,
  },
  gridBadge: {
    alignSelf: 'flex-start',
    marginBottom: tokens.spacing.md,
  },
  gridTitle: {
    marginBottom: tokens.spacing.sm,
  },
  gridImage: {
    width: '100%',
    height: 80,
    borderRadius: 8,
    marginTop: tokens.spacing.sm,
  },
  paymentsSection: {
    marginBottom: tokens.spacing.xl,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: tokens.spacing.lg,
    marginBottom: tokens.spacing.md,
  },
  allButton: {
    flexDirection: 'row',
    alignItems: 'center',
    minHeight: 48,
  },
  paymentsScroll: {
    paddingHorizontal: tokens.spacing.lg,
    gap: tokens.spacing.md,
  },
  paymentCard: {
    minWidth: 110,
    borderRadius: 16,
    alignItems: 'center',
    ...tokens.shadow.sm,
  },
  paymentCardContent: {
    width: '100%',
    alignItems: 'center',
  },
  paymentIconContainer: {
    width: 64,
    height: 64,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: tokens.spacing.md,
  },
  azercellIcon: {
    width: 64,
    height: 64,
    marginBottom: tokens.spacing.md,
  },
  azercellIconContainer: {
    width: 64,
    height: 64,
    borderRadius: 16,
    backgroundColor: '#9333EA',
    justifyContent: 'center',
    alignItems: 'center',
  },
  azercellIconInner: {
    width: 32,
    height: 32,
    justifyContent: 'center',
    alignItems: 'center',
  },
  azercellPlayButton: {
    width: 0,
    height: 0,
    borderLeftWidth: 12,
    borderTopWidth: 8,
    borderBottomWidth: 8,
    borderLeftColor: '#FFFFFF',
    borderTopColor: 'transparent',
    borderBottomColor: 'transparent',
    marginLeft: 4,
  },
  paymentName: {
    textAlign: 'center',
    marginBottom: tokens.spacing.xs,
  },
  paymentNumber: {
    textAlign: 'center',
  },
  servicesList: {
    paddingHorizontal: tokens.spacing.lg,
  },
  serviceItem: {
    marginBottom: tokens.spacing.md,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    minHeight: 72,
    ...tokens.shadow.sm,
  },
  serviceItemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  serviceIconContainer: {
    width: 48,
    height: 48,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: tokens.spacing.lg,
  },
  lemonIcon: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#22D3EE',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

