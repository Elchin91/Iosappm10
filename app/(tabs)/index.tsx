import { View, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { QrCode, Send, Eye, EyeOff, Plus, ArrowUpRight, Receipt, ChevronRight, Heart } from 'lucide-react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { useState } from 'react';
import { Text, Button, Card } from '@/components/ui';
import { tokens } from '@/constants/tokens';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function HomeTab() {
  const [showBalance, setShowBalance] = useState(true);
  const balance = '39';
  const balanceDecimal = '.57';
  const insets = useSafeAreaInsets();

  return (
    <LinearGradient
      colors={['#22D3EE', '#14B8A6', '#10B981']}
      style={styles.gradient}
    >
      <ScrollView 
        style={styles.container} 
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 80 }}
      >
        {/* Status Bar */}
        <View style={[styles.statusBar, { paddingTop: insets.top || 44 }]}>
          <View style={styles.statusBarLeft}>
            <Text size="sm" weight="semibold" style={styles.statusBarTime}>
              06:27 <FontAwesome5 name="location-arrow" size={10} color={tokens.color.textPrimary} />
            </Text>
          </View>
          <View style={styles.statusBarRight}>
            <FontAwesome5 name="signal" size={12} color={tokens.color.textPrimary} />
            <FontAwesome5 name="wifi" size={12} color={tokens.color.textPrimary} style={{ marginLeft: 8 }} />
            <View style={styles.batteryBadge}>
              <Text size="xs" weight="bold" style={styles.batteryText}>100</Text>
            </View>
          </View>
        </View>

        <View style={styles.header}>
          <TouchableOpacity style={styles.qrButton}>
            <QrCode color={tokens.color.iconPrimary} size={tokens.iconSize.lg} />
          </TouchableOpacity>
          <Text size="xl" weight="bold">Мой QR</Text>
        </View>

        <Card style={styles.balanceCard}>
          <View style={styles.balanceHeader}>
            <Text size="sm" color="secondary">Доступно</Text>
            <TouchableOpacity 
              style={styles.eyeButton}
              onPress={() => setShowBalance(!showBalance)}
            >
              <FontAwesome5 
                name={showBalance ? "eye-slash" : "eye"} 
                size={16} 
                color={tokens.color.iconSecondary} 
              />
            </TouchableOpacity>
          </View>

          <View style={styles.balanceAmount}>
            <Text size="display" weight="bold" style={styles.balanceMain}>
              {showBalance ? balance : '••••'}
            </Text>
            {showBalance && (
              <>
                <Text size="xxxl" color="secondary" style={styles.balanceDecimal}>
                  {balanceDecimal}
                </Text>
                <FontAwesome5 
                  name="manat-sign" 
                  size={24} 
                  color={tokens.color.iconSecondary} 
                  style={{ marginLeft: 8 }}
                />
              </>
            )}
          </View>

          <View style={styles.actionButtons}>
            <Button 
              variant="primary" 
              size="lg" 
              style={styles.actionButton}
              leftIcon={<Plus color={tokens.color.textInverse} size={18} />}
            >
              Пополнить
            </Button>
            <Button
              variant="primary"
              size="lg"
              leftIcon={<ArrowUpRight color={tokens.color.textInverse} size={18} />}
              style={styles.actionButton}
            >
              Перевести
            </Button>
          </View>
        </Card>

        <Card pressable style={styles.paymentsCard}>
          <View style={styles.paymentsCardContent}>
            <View style={styles.paymentsCardLeft}>
              <Receipt color="#2563EB" size={32} />
              <View style={styles.paymentsCardText}>
                <Text size="lg" weight="bold">Мои платежи</Text>
                <Text size="sm" color="secondary">8 сохраненных платежей</Text>
              </View>
            </View>
            <ChevronRight color={tokens.color.iconSecondary} size={20} />
          </View>
        </Card>

        <ScrollView 
          horizontal 
          showsHorizontalScrollIndicator={false} 
          style={styles.servicesScroll}
          contentContainerStyle={styles.servicesScrollContent}
        >
          <ServiceCard
            icon="💛"
            title="Пожертвование в фонд «YAŞAT»"
            backgroundColor="#1E3A8A"
            borderColor="#1E40AF"
          />
          <ServiceCard
            icon="🐋"
            title="Скоро! Переводы за границу"
            backgroundColor="#FFFFFF"
            borderColor="#60A5FA"
            textColor={tokens.color.textPrimary}
          />
          <ServiceCard
            icon="💎"
            title="Лотерея Birmarket"
            backgroundColor="#EC4899"
            borderColor="#F472B6"
            gradient={true}
          />
          <ServiceCard
            icon="💸"
            title="Переводы в Россию"
            backgroundColor="#D9F99D"
            borderColor="#BEF264"
            textColor={tokens.color.textPrimary}
            gradient={true}
          />
        </ScrollView>

        <View style={styles.section}>
          <Text size="xs" weight="semibold" color="secondary" style={styles.sectionTitle}>
            НАШИ СЕРВИСЫ
          </Text>
        </View>

        <View style={styles.servicesGrid}>
          <Card pressable style={styles.creditCard}>
            <View style={styles.creditCardContent}>
              <Text size="lg" weight="bold" color="inverse" style={styles.creditTitle}>
                Кредит до
              </Text>
              <Text size="xxl" weight="bold" color="inverse" style={styles.creditAmount}>
                25 000₼
              </Text>
              <Text style={styles.creditEmoji}>💵</Text>
            </View>
          </Card>

          <Card pressable style={styles.bakikartCard}>
            <Text size="lg" weight="bold" style={styles.bakikartTitle}>BakiKart</Text>
            <View style={styles.bakikartIcons}>
              <View style={styles.bakikartIconContainer}>
                <Heart color="#EF4444" size={20} />
              </View>
              <View style={[styles.bakikartIconContainer, styles.bakikartIconSecondary]}>
                <QrCode color={tokens.color.textPrimary} size={20} />
              </View>
            </View>
          </Card>
        </View>
      </ScrollView>
    </LinearGradient>
  );
}

function ServiceCard({
  icon,
  title,
  backgroundColor,
  borderColor,
  textColor = '#FFFFFF',
  gradient = false,
}: {
  icon: string;
  title: string;
  backgroundColor: string;
  borderColor: string;
  textColor?: string;
  gradient?: boolean;
}) {
  const cardStyle = gradient 
    ? [styles.serviceCard, { backgroundColor, borderColor }]
    : [styles.serviceCard, { backgroundColor, borderColor }];

  return (
    <TouchableOpacity
      style={cardStyle}
      activeOpacity={0.7}
    >
      <Text
        size="sm"
        weight="semibold"
        style={[styles.serviceCardTitle, { color: textColor }]}
        numberOfLines={3}
      >
        {title}
      </Text>
      <Text style={styles.serviceCardIcon}>{icon}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
  },
  container: {
    flex: 1,
  },
  statusBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: tokens.spacing.lg,
    paddingBottom: tokens.spacing.md,
  },
  statusBarLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  statusBarTime: {
    color: tokens.color.textPrimary,
  },
  statusBarRight: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: tokens.spacing.sm,
  },
  batteryBadge: {
    backgroundColor: tokens.color.surfacePrimary,
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 4,
    marginLeft: 8,
  },
  batteryText: {
    color: tokens.color.textPrimary,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: tokens.spacing.lg,
    paddingBottom: tokens.spacing.xl,
    gap: tokens.spacing.md,
  },
  qrButton: {
    width: 48,
    height: 48,
    borderRadius: 16,
    backgroundColor: tokens.color.surfacePrimary,
    justifyContent: 'center',
    alignItems: 'center',
    ...tokens.shadow.sm,
  },
  balanceCard: {
    marginHorizontal: tokens.spacing.lg,
    marginBottom: tokens.spacing.lg,
    borderRadius: 24,
    padding: tokens.spacing.xl,
    ...tokens.shadow.lg,
  },
  balanceHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: tokens.spacing.sm,
  },
  eyeButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: tokens.color.surfaceTertiary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  balanceAmount: {
    flexDirection: 'row',
    alignItems: 'baseline',
    marginBottom: tokens.spacing.xl,
  },
  balanceMain: {
    fontSize: 48,
  },
  balanceDecimal: {
    marginLeft: 4,
  },
  actionButtons: {
    flexDirection: 'row',
    gap: tokens.spacing.md,
  },
  actionButton: {
    flex: 1,
    borderRadius: 16,
  },
  paymentsCard: {
    marginHorizontal: tokens.spacing.lg,
    marginBottom: tokens.spacing.lg,
    borderRadius: 24,
    padding: tokens.spacing.lg,
    ...tokens.shadow.lg,
  },
  paymentsCardContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  paymentsCardLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: tokens.spacing.lg,
    flex: 1,
  },
  paymentsCardText: {
    flex: 1,
  },
  section: {
    paddingHorizontal: tokens.spacing.lg,
    marginBottom: tokens.spacing.md,
  },
  sectionTitle: {
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  servicesScroll: {
    marginBottom: tokens.spacing.lg,
  },
  servicesScrollContent: {
    paddingHorizontal: tokens.spacing.lg,
    paddingRight: tokens.spacing.xl,
  },
  serviceCard: {
    minWidth: 160,
    borderRadius: 24,
    padding: tokens.spacing.lg,
    marginRight: tokens.spacing.md,
    borderWidth: 4,
    justifyContent: 'space-between',
    minHeight: 140,
  },
  serviceCardTitle: {
    marginBottom: tokens.spacing.sm,
    lineHeight: 16,
  },
  serviceCardIcon: {
    fontSize: 32,
  },
  servicesGrid: {
    flexDirection: 'row',
    gap: tokens.spacing.md,
    paddingHorizontal: tokens.spacing.lg,
    marginBottom: tokens.spacing.xl,
  },
  creditCard: {
    flex: 1,
    backgroundColor: '#2563EB',
    borderRadius: 24,
    padding: tokens.spacing.xl,
    minHeight: 160,
    ...tokens.shadow.lg,
  },
  creditCardContent: {
    position: 'relative',
    flex: 1,
  },
  creditTitle: {
    marginBottom: tokens.spacing.xs,
  },
  creditAmount: {
    marginBottom: tokens.spacing.md,
  },
  creditEmoji: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    fontSize: 48,
  },
  bakikartCard: {
    flex: 1,
    borderRadius: 24,
    padding: tokens.spacing.xl,
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 160,
    ...tokens.shadow.lg,
  },
  bakikartTitle: {
    marginBottom: tokens.spacing.lg,
  },
  bakikartIcons: {
    flexDirection: 'row',
    gap: tokens.spacing.sm,
  },
  bakikartIconContainer: {
    width: 48,
    height: 48,
    borderRadius: 12,
    borderWidth: 4,
    borderColor: '#EF4444',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bakikartIconSecondary: {
    borderColor: tokens.color.textPrimary,
  },
});
