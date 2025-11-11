import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import {
  User,
  QrCode,
  Briefcase,
  Settings,
  FileText,
  Percent,
  CreditCard,
  HelpCircle,
  Globe,
  LogOut,
} from 'lucide-react-native';

export default function ProfileTab() {
  const profileMenuItems = [
    {
      icon: User,
      title: 'Мои данные',
      color: '#5B21B6',
    },
    {
      icon: QrCode,
      title: 'Мой QR',
      color: '#5B21B6',
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
      icon: CreditCard,
      title: 'Выписка со счета',
    },
    {
      icon: HelpCircle,
      title: 'Поддержка',
    },
    {
      icon: Globe,
      title: 'Язык',
      subtitle: 'Русский',
    },
    {
      icon: Globe,
      title: 'Карьера в PashaPay',
    },
  ];

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.header}>
        <Text style={styles.title}>Профиль</Text>
        <Text style={styles.phone}>+994 50 519 99 91</Text>
      </View>

      <View style={styles.profileGrid}>
        {profileMenuItems.map((item, index) => (
          <TouchableOpacity key={index} style={styles.profileCard}>
            <View
              style={[
                styles.profileCardIcon,
                { backgroundColor: item.color },
              ]}
            >
              <item.icon color="#FFFFFF" size={24} />
            </View>
            <Text style={styles.profileCardTitle}>{item.title}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.menuSection}>
        {menuItems.map((item, index) => (
          <TouchableOpacity key={index} style={styles.menuItem}>
            <item.icon color="#1F2937" size={24} />
            <View style={styles.menuItemContent}>
              <Text style={styles.menuItemTitle}>{item.title}</Text>
              {item.subtitle && (
                <Text style={styles.menuItemSubtitle}>{item.subtitle}</Text>
              )}
            </View>
            <Text style={styles.menuItemArrow}>›</Text>
          </TouchableOpacity>
        ))}
      </View>

      <TouchableOpacity style={styles.logoutButton}>
        <LogOut color="#EF4444" size={24} />
        <Text style={styles.logoutText}>Выйти из m10</Text>
      </TouchableOpacity>

      <View style={{ height: 20 }} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F4F6',
  },
  header: {
    paddingHorizontal: 20,
    paddingTop: 16,
    paddingBottom: 24,
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: '#1F2937',
    marginBottom: 8,
  },
  phone: {
    fontSize: 16,
    color: '#1F2937',
    fontWeight: '600',
  },
  profileGrid: {
    flexDirection: 'row',
    gap: 12,
    paddingHorizontal: 16,
    marginBottom: 20,
  },
  profileCard: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 16,
    alignItems: 'center',
  },
  profileCardIcon: {
    width: 48,
    height: 48,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
  },
  profileCardTitle: {
    fontSize: 13,
    fontWeight: '600',
    color: '#1F2937',
    textAlign: 'center',
  },
  menuSection: {
    paddingHorizontal: 16,
  },
  menuItem: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    paddingVertical: 14,
    paddingHorizontal: 14,
    marginBottom: 8,
    flexDirection: 'row',
    alignItems: 'center',
  },
  menuItemContent: {
    flex: 1,
    marginLeft: 12,
  },
  menuItemTitle: {
    fontSize: 14,
    fontWeight: '500',
    color: '#1F2937',
  },
  menuItemSubtitle: {
    fontSize: 12,
    color: '#9CA3AF',
    marginTop: 2,
  },
  menuItemArrow: {
    fontSize: 20,
    color: '#9CA3AF',
  },
  logoutButton: {
    marginHorizontal: 16,
    marginTop: 16,
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    paddingVertical: 14,
    paddingHorizontal: 14,
    flexDirection: 'row',
    alignItems: 'center',
  },
  logoutText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#EF4444',
    marginLeft: 12,
  },
});
