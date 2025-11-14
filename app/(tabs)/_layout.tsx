import { Tabs } from 'expo-router';
import { View, StyleSheet } from 'react-native';
import { Home, Wallet, QrCode, ClockRotateLeft, User } from 'lucide-react-native';
import { tokens } from '@/constants/tokens';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function TabsLayout() {
  const insets = useSafeAreaInsets();

  return (
    <View style={{ flex: 1 }}>
      <Tabs
        screenOptions={{
          headerShown: false,
          tabBarStyle: [styles.tabBar, { paddingBottom: (insets.bottom || 0) + tokens.spacing.md, paddingTop: tokens.spacing.sm }],
          tabBarActiveTintColor: tokens.color.textPrimary,
          tabBarInactiveTintColor: tokens.color.textSecondary,
          tabBarLabelStyle: styles.tabBarLabel,
          tabBarIconStyle: styles.tabBarIcon,
          tabBarShowLabel: true,
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            title: 'Главная',
            tabBarIcon: ({ color, focused }) => (
              <Home color={color} size={focused ? 24 : 20} />
            ),
          }}
        />
        <Tabs.Screen
          name="payments"
          options={{
            title: 'Платежи',
            tabBarIcon: ({ color, focused }) => (
              <Wallet color={color} size={focused ? 24 : 20} />
            ),
          }}
        />
        <Tabs.Screen
          name="qr"
          options={{
            title: 'QR',
            tabBarIcon: ({ color, focused }) => (
              <QrCode color={color} size={focused ? 24 : 20} />
            ),
          }}
        />
        <Tabs.Screen
          name="history"
          options={{
            title: 'История',
            tabBarIcon: ({ color, focused }) => (
              <ClockRotateLeft color={color} size={focused ? 24 : 20} />
            ),
          }}
        />
        <Tabs.Screen
          name="profile"
          options={{
            title: 'Профиль',
            tabBarIcon: ({ color, focused }) => (
              <User color={color} size={focused ? 24 : 20} />
            ),
          }}
        />
      </Tabs>
    </View>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: tokens.color.surfacePrimary,
    borderTopColor: tokens.color.borderPrimary,
    borderTopWidth: 1,
    height: 80,
  },
  tabBarLabel: {
    fontSize: tokens.fontSize.xs,
    fontWeight: tokens.fontWeight.regular,
    marginTop: tokens.spacing.xs,
  },
  tabBarLabelActive: {
    fontWeight: tokens.fontWeight.semibold,
  },
  tabBarIcon: {
    marginBottom: tokens.spacing.xs,
  },
});
