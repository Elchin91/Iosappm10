import { View, Text, StyleSheet } from 'react-native';
import QRCode from 'react-native-qrcode-svg';

export default function QrTab() {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Мой QR</Text>

        <View style={styles.qrContainer}>
          <View style={styles.qrWrapper}>
            <QRCode
              value="m10://wallet/user123"
              size={200}
              color="#1F2937"
              backgroundColor="#FFFFFF"
              quietZone={10}
            />
          </View>
        </View>

        <Text style={styles.description}>
          Поделитесь этим QR-кодом для получения платежей
        </Text>

        <View style={styles.info}>
          <Text style={styles.infoTitle}>Как использовать</Text>
          <Text style={styles.infoText}>
            1. Покажите QR-код другому пользователю
          </Text>
          <Text style={styles.infoText}>
            2. Они смогут отправить вам платеж, отсканировав код
          </Text>
          <Text style={styles.infoText}>
            3. Платеж поступит на ваш счет автоматически
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F4F6',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: '#1F2937',
    marginBottom: 40,
    alignSelf: 'flex-start',
  },
  qrContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  qrWrapper: {
    padding: 10,
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
  },
  description: {
    fontSize: 14,
    color: '#6B7280',
    textAlign: 'center',
    marginBottom: 30,
  },
  info: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    width: '100%',
  },
  infoTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1F2937',
    marginBottom: 12,
  },
  infoText: {
    fontSize: 13,
    color: '#4B5563',
    marginBottom: 8,
    lineHeight: 18,
  },
});
