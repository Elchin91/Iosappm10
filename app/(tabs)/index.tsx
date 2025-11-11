import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { QrCode, Send, Eye, EyeOff } from 'lucide-react-native';
import { useState } from 'react';

export default function HomeTab() {
  const [showBalance, setShowBalance] = useState(true);
  const balance = '39.57';

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.header}>
        <View style={styles.qrButton}>
          <QrCode color="#1F2937" size={24} />
        </View>
        <Text style={styles.headerTitle}>Мой QR</Text>
      </View>

      <View style={styles.balanceCard}>
        <View style={styles.balanceHeader}>
          <Text style={styles.balanceLabel}>Доступно</Text>
          <TouchableOpacity onPress={() => setShowBalance(!showBalance)}>
            {showBalance ? (
              <Eye color="#9CA3AF" size={24} />
            ) : (
              <EyeOff color="#9CA3AF" size={24} />
            )}
          </TouchableOpacity>
        </View>

        <View style={styles.balanceAmount}>
          <Text style={styles.balanceValue}>
            {showBalance ? balance : '••••'}
          </Text>
          <Text style={styles.balanceCurrency}>₼</Text>
        </View>

        <View style={styles.actionButtons}>
          <TouchableOpacity style={styles.actionButton}>
            <Text style={styles.actionButtonText}>+ Пополнить</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionButton}>
            <Send color="#FFFFFF" size={18} />
            <Text style={styles.actionButtonText}>Перевести</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Мои платежи</Text>
          <Text style={styles.sectionSubtitle}>8 сохраненных платежей</Text>
        </View>
      </View>

      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.servicesScroll}>
        <ServiceCard
          icon="💛"
          title="Пожертвование в фонд «YASАТ»"
          color="#1E3A8A"
        />
        <ServiceCard
          icon="🚀"
          title="Скоро! Переводы за границу"
          color="#E0F2FE"
          textColor="#1E3A8A"
        />
        <ServiceCard
          icon="✨"
          title="Лотерея Birmarket"
          color="#EC4899"
        />
        <ServiceCard
          icon="🌳"
          title="Переводы в Россию"
          color="#CCFFCC"
          textColor="#1F2937"
        />
      </ScrollView>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>НАШИ СЕРВИСЫ</Text>
      </View>

      <TouchableOpacity style={styles.creditCard}>
        <View style={styles.creditCardContent}>
          <Text style={styles.creditTitle}>Кредит до 25 000m</Text>
          <View style={styles.creditImagePlaceholder}>
            <Text style={styles.creditImageText}>💰</Text>
          </View>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.serviceRow}>
        <View style={styles.serviceIcon}>
          <Text style={styles.serviceEmoji}>💳</Text>
        </View>
        <Text style={styles.serviceText}>BakiKart</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.serviceRow}>
        <View style={styles.serviceIcon}>
          <Text style={styles.serviceEmoji}>🎁</Text>
        </View>
        <Text style={styles.serviceText}>Bir Bonus</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.serviceRow}>
        <View style={styles.serviceIcon}>
          <Text style={styles.serviceEmoji}>📋</Text>
        </View>
        <Text style={styles.serviceText}>Разработ НПС</Text>
      </TouchableOpacity>

      <View style={{ height: 20 }} />
    </ScrollView>
  );
}

function ServiceCard({
  icon,
  title,
  color,
  textColor = '#FFFFFF',
}: {
  icon: string;
  title: string;
  color: string;
  textColor?: string;
}) {
  return (
    <TouchableOpacity
      style={[
        styles.serviceCard,
        { backgroundColor: color, borderColor: color },
      ]}
    >
      <Text style={styles.serviceCardIcon}>{icon}</Text>
      <Text style={[styles.serviceCardTitle, { color: textColor }]}>
        {title}
      </Text>
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
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 16,
    paddingBottom: 24,
  },
  qrButton: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#1F2937',
    marginRight: 12,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1F2937',
  },
  balanceCard: {
    marginHorizontal: 16,
    backgroundColor: '#FFFFFF',
    borderRadius: 24,
    padding: 24,
    marginBottom: 20,
  },
  balanceHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  balanceLabel: {
    fontSize: 14,
    color: '#9CA3AF',
    fontWeight: '500',
  },
  balanceAmount: {
    flexDirection: 'row',
    alignItems: 'baseline',
    marginBottom: 24,
  },
  balanceValue: {
    fontSize: 40,
    fontWeight: '700',
    color: '#1F2937',
  },
  balanceCurrency: {
    fontSize: 20,
    color: '#9CA3AF',
    marginLeft: 4,
  },
  actionButtons: {
    flexDirection: 'row',
    gap: 12,
  },
  actionButton: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#1F2937',
    borderRadius: 16,
    paddingVertical: 14,
    paddingHorizontal: 16,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8,
  },
  actionButtonText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '600',
  },
  section: {
    paddingHorizontal: 20,
    marginBottom: 16,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#1F2937',
    marginBottom: 4,
  },
  sectionSubtitle: {
    fontSize: 12,
    color: '#9CA3AF',
  },
  servicesScroll: {
    paddingHorizontal: 16,
    marginBottom: 24,
  },
  serviceCard: {
    width: 160,
    height: 120,
    borderRadius: 16,
    padding: 12,
    marginRight: 12,
    borderWidth: 2,
    justifyContent: 'space-between',
  },
  serviceCardIcon: {
    fontSize: 24,
  },
  serviceCardTitle: {
    fontSize: 13,
    fontWeight: '600',
    lineHeight: 16,
  },
  creditCard: {
    marginHorizontal: 16,
    marginBottom: 16,
    backgroundColor: '#2563EB',
    borderRadius: 20,
    padding: 20,
    minHeight: 160,
    justifyContent: 'flex-end',
  },
  creditCardContent: {
    position: 'relative',
  },
  creditTitle: {
    fontSize: 24,
    fontWeight: '700',
    color: '#FFFFFF',
  },
  creditImagePlaceholder: {
    width: 80,
    height: 80,
    borderRadius: 8,
    position: 'absolute',
    right: 0,
    top: -60,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  creditImageText: {
    fontSize: 32,
  },
  serviceRow: {
    marginHorizontal: 16,
    marginBottom: 12,
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    paddingVertical: 16,
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  serviceIcon: {
    width: 40,
    height: 40,
    backgroundColor: '#E5E7EB',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  serviceEmoji: {
    fontSize: 20,
  },
  serviceText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1F2937',
  },
});
