import { Tabs } from 'expo-router';
import { View, StyleSheet } from 'react-native';
import { Home, CreditCard, QrCode, Clock, User } from 'lucide-react-native';

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: styles.tabBar,
        tabBarActiveTintColor: '#1F2937',
        tabBarInactiveTintColor: '#9CA3AF',
        tabBarLabelStyle: styles.tabBarLabel,
        tabBarIconStyle: styles.tabBarIcon,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Главная',
          tabBarIcon: ({ color, size }) => (
            <Home color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="payments"
        options={{
          title: 'Платежи',
          tabBarIcon: ({ color, size }) => (
            <CreditCard color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="qr"
        options={{
          title: 'QR',
          tabBarIcon: ({ color, size }) => (
            <QrCode color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="history"
        options={{
          title: 'История',
          tabBarIcon: ({ color, size }) => (
            <Clock color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Профиль',
          tabBarIcon: ({ color, size }) => (
            <User color={color} size={size} />
          ),
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: '#FFFFFF',
    borderTopColor: '#E5E7EB',
    borderTopWidth: 1,
    paddingBottom: 8,
    paddingTop: 8,
    height: 80,
  },
  tabBarLabel: {
    fontSize: 12,
    marginTop: 4,
  },
  tabBarIcon: {
    marginBottom: 4,
  },
});
