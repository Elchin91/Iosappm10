import { View, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import {
  User,
  QrCode,
  Briefcase,
  Settings,
  FileText,
  Percent,
  Receipt,
  Headphones,
  Globe,
  UserTie,
  Check,
  ChevronRight,
  MessageCircle,
} from 'lucide-react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { tokens } from '@/constants/tokens';
import { Text } from '@/components/ui/Text';
import { Card } from '@/components/ui/Card';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function ProfileTab() {
  const insets = useSafeAreaInsets();

  const profileMenuItems = [
    {
      icon: User,
      title: 'Мои данные',
      color: '#6366F1',
      hasBadge: true,
    },
    {
      icon: QrCode,
      title: 'Мой QR',
      color: '#6366F1',
      hasBadge: false,
    },
  ];

  const menuItems = [
    {
      icon: Briefcase,
      title: 'Ведите свой бизнес с m10',
    },
    {
      icon: Settings,
      title: 'Настройки',
    },
    {
      icon: FileText,
      title: 'Документы',
    },
    {
      icon: Percent,
      title: 'Тарифы и лимиты',
    },
    {
      icon: Receipt,
      title: 'Выписка со счета',
    },
    {
      icon: Headphones,
      title: 'Поддержка',
    },
    {
      icon: Globe,
      title: 'Язык',
      subtitle: 'Русский',
      hasFlag: true,
    },
    {
      icon: UserTie,
      title: 'Карьера в PashaPay',
      iconColor: '#14B8A6',
    },
  ];

  return (
    <View style={styles.container}>
      <ScrollView 
        style={styles.scrollView} 
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 100 }}
      >
        {/* Header */}
        <View style={[styles.header, { paddingTop: (insets.top || 44) + tokens.spacing.lg }]}>
          <Text size="xxxl" weight="bold" color="primary">
            Профиль
          </Text>
          <Text size="lg" color="primary" style={styles.phone}>
            +994 50 519 99 91
          </Text>
        </View>

        {/* Top Cards */}
        <View style={styles.profileGrid}>
          {profileMenuItems.map((item, index) => (
            <Card
              key={index}
              padding="xl"
              style={styles.profileCard}
              pressable
              onPress={() => {}}
            >
              <View style={styles.profileCardContent}>
                <View style={styles.profileCardIconWrapper}>
                  <View
                    style={[
                      styles.profileCardIcon,
                      { backgroundColor: item.color },
                    ]}
                  >
                    <item.icon color={tokens.color.textInverse} size={tokens.iconSize.md} />
                  </View>
                  {item.hasBadge && (
                    <View style={styles.badge}>
                      <Check size={12} color={tokens.color.textInverse} />
                    </View>
                  )}
                </View>
                <Text size="md" weight="medium" color="primary" style={styles.profileCardText}>
                  {item.title}
                </Text>
              </View>
            </Card>
          ))}
        </View>

        {/* Menu List */}
        <Card style={styles.menuCard}>
          {menuItems.map((item, index) => (
            <TouchableOpacity
              key={index}
              style={[
                styles.menuItem,
                index < menuItems.length - 1 && styles.menuItemBorder,
              ]}
              activeOpacity={0.7}
            >
              {item.hasFlag ? (
                <View style={styles.flagIcon}>
                  <View style={styles.flagWhite} />
                  <View style={styles.flagBlue} />
                  <View style={styles.flagRed} />
                </View>
              ) : (
                <item.icon 
                  color={item.iconColor || tokens.color.iconPrimary} 
                  size={tokens.iconSize.lg} 
                />
              )}
              <View style={styles.menuItemContent}>
                <Text size="md" weight="regular" color="primary">
                  {item.title}
                </Text>
                {item.subtitle && (
                  <Text size="sm" color="secondary" style={styles.menuItemSubtitle}>
                    {item.subtitle}
                  </Text>
                )}
              </View>
              <ChevronRight color={tokens.color.iconSecondary} size={20} />
            </TouchableOpacity>
          ))}
        </Card>

        {/* Logout */}
        <View style={styles.logoutSection}>
          <TouchableOpacity onPress={() => {}}>
            <Text size="md" color="primary">
              Выйти из m10
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      {/* Floating Action Button */}
      <View style={[styles.fab, { bottom: 112 + (insets.bottom || 0) }]}>
        <LinearGradient
          colors={['#14B8A6', '#22D3EE']}
          style={styles.fabGradient}
        >
          <TouchableOpacity style={styles.fabButton} activeOpacity={0.8}>
            <MessageCircle size={24} color={tokens.color.textInverse} />
          </TouchableOpacity>
        </LinearGradient>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: tokens.color.surfacePrimary,
  },
  scrollView: {
    flex: 1,
  },
  header: {
    paddingHorizontal: tokens.spacing.xl,
    paddingBottom: tokens.spacing.xl,
  },
  phone: {
    marginTop: tokens.spacing.md,
  },
  profileGrid: {
    flexDirection: 'row',
    gap: tokens.spacing.md,
    paddingHorizontal: tokens.spacing.lg,
    marginBottom: tokens.spacing.lg,
  },
  profileCard: {
    flex: 1,
    backgroundColor: tokens.color.surfaceTertiary,
    borderRadius: 16,
  },
  profileCardContent: {
    alignItems: 'flex-start',
  },
  profileCardIconWrapper: {
    position: 'relative',
    marginBottom: tokens.spacing.lg,
  },
  profileCardIcon: {
    width: 56,
    height: 56,
    borderRadius: 28,
    justifyContent: 'center',
    alignItems: 'center',
  },
  badge: {
    position: 'absolute',
    bottom: -4,
    right: -4,
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: '#3B82F6',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: tokens.color.surfaceTertiary,
  },
  profileCardText: {
    marginTop: 0,
  },
  menuCard: {
    marginHorizontal: tokens.spacing.lg,
    marginBottom: tokens.spacing.xl,
    borderRadius: 16,
    backgroundColor: tokens.color.surfaceTertiary,
    overflow: 'hidden',
    padding: 0,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: tokens.spacing.lg,
    paddingVertical: tokens.spacing.lg,
    backgroundColor: tokens.color.surfacePrimary,
  },
  menuItemBorder: {
    borderBottomWidth: 1,
    borderBottomColor: tokens.color.borderSecondary,
  },
  menuItemContent: {
    flex: 1,
    marginLeft: tokens.spacing.lg,
  },
  menuItemSubtitle: {
    marginTop: 2,
  },
  flagIcon: {
    width: 24,
    height: 24,
    borderRadius: 12,
    overflow: 'hidden',
  },
  flagWhite: {
    height: 8,
    backgroundColor: '#FFFFFF',
  },
  flagBlue: {
    height: 8,
    backgroundColor: '#0039A6',
  },
  flagRed: {
    height: 8,
    backgroundColor: '#D52B1E',
  },
  logoutSection: {
    paddingHorizontal: tokens.spacing.lg,
    paddingTop: tokens.spacing.xl,
  },
  fab: {
    position: 'absolute',
    right: tokens.spacing.xl,
    width: 64,
    height: 64,
    borderRadius: 32,
    ...tokens.shadow.lg,
  },
  fabGradient: {
    width: '100%',
    height: '100%',
    borderRadius: 32,
    justifyContent: 'center',
    alignItems: 'center',
  },
  fabButton: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
