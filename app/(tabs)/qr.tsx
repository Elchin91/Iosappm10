import { View, StyleSheet } from 'react-native';
import QRCode from 'react-native-qrcode-svg';
import { Text } from '@/components/ui/Text';
import { Card } from '@/components/ui/Card';
import { tokens } from '@/constants/tokens';

export default function QrTab() {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text size="display" weight="bold" style={styles.title}>
          Мой QR
        </Text>

        <Card variant="elevated" padding="xxl" style={styles.qrContainer}>
          <View style={styles.qrWrapper}>
            <QRCode
              value="m10://wallet/user123"
              size={200}
              color={tokens.color.textPrimary}
              backgroundColor={tokens.color.surfacePrimary}
              quietZone={10}
            />
          </View>
        </Card>

        <Text size="md" color="secondary" align="center" style={styles.description}>
          Поделитесь этим QR-кодом для получения платежей
        </Text>

        <Card variant="default" padding="lg" style={styles.info}>
          <Text size="lg" weight="semibold" style={styles.infoTitle}>
            Как использовать
          </Text>
          <Text size="sm" color="secondary" style={styles.infoText}>
            1. Покажите QR-код другому пользователю
          </Text>
          <Text size="sm" color="secondary" style={styles.infoText}>
            2. Они смогут отправить вам платеж, отсканировав код
          </Text>
          <Text size="sm" color="secondary" style={styles.infoText}>
            3. Платеж поступит на ваш счет автоматически
          </Text>
        </Card>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: tokens.color.surfaceTertiary,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: tokens.spacing.xl,
  },
  title: {
    marginBottom: tokens.spacing.xxxl,
    alignSelf: 'flex-start',
  },
  qrContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: tokens.spacing.xxl,
  },
  qrWrapper: {
    padding: tokens.spacing.md,
    backgroundColor: tokens.color.surfacePrimary,
    borderRadius: tokens.borderRadius.md,
  },
  description: {
    marginBottom: tokens.spacing.xxl,
  },
  info: {
    width: '100%',
  },
  infoTitle: {
    marginBottom: tokens.spacing.md,
  },
  infoText: {
    marginBottom: tokens.spacing.sm,
    lineHeight: tokens.fontSize.sm * tokens.lineHeight.normal,
  },
});
