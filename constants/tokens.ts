/**
 * Design Tokens System
 * Based on M10 Payments Design System
 */

export const tokens = {
  color: {
    // Primary colors
    controlPrimary: '#1F2937', // Dark primary for buttons
    controlSecondary: '#F5F5F5', // Light gray for secondary surfaces
    controlDestructive: '#EF4444', // Error/destructive actions

    // Text colors
    textPrimary: '#1F2937', // Main text content
    textSecondary: '#6B7280', // Supporting text
    textDestructive: '#DC2626', // Error text
    textInverse: '#FFFFFF', // Text on dark backgrounds

    // Border colors
    borderPrimary: '#E5E7EB', // Standard dividers
    borderSecondary: '#F3F4F6', // Secondary borders
    borderDestructive: '#FCA5A5', // Error borders

    // Icon colors
    iconPrimary: '#1F2937', // Primary icons
    iconSecondary: '#6B7280', // Secondary icons
    iconPurple: '#6366F1', // Purple icons for profile

    // Surface colors
    surfacePrimary: '#FFFFFF', // Main backgrounds (cards)
    surfaceSecondary: '#F9FAFB', // Secondary backgrounds
    surfaceTertiary: '#F5F5F5', // Tertiary backgrounds (screens)

    // Background
    background: '#F5F5F5', // Overall app background (light gray)

    // Gradient colors for Home (Corporate color: Display P3 0.0000 0.9216 0.7725)
    gradientStart: '#00D4AA', // Lighter corporate cyan
    gradientEnd: '#00EBC5', // Main corporate cyan

    // Success/Credit color
    credit: '#00B749', // Green for positive amounts

    // Badge colors
    badgeGreen: '#00C853', // Green "Новинка" badge
    badgeBlue: '#5E6AD2', // Blue cashback badge

    // FAB button
    fabCyan: '#00EBC5', // FAB background (corporate color)
    fabYellow: '#FFD700', // FAB accent

    // Additional accent colors
    accentBlue: '#2563EB', // Blue for credit card
    accentNavy: '#1E3A8A', // Dark blue for cards
    accentCyan: '#00EBC5', // Corporate cyan for cards
    accentGreen: '#10B981',
    accentPink: '#EC4899', // Pink for cards
    accentLime: '#BFFF00', // Lime for cards
    accentPurple: '#6366F1', // Purple for profile
  },

  spacing: {
    xs: 4,
    sm: 8,
    md: 12,
    lg: 16,
    xl: 24,
    xxl: 32,
    xxxl: 48,
  },

  borderRadius: {
    sm: 8,
    md: 12,
    lg: 16,
    xl: 24,
    round: 9999,
  },

  fontSize: {
    xs: 10,
    sm: 12,
    md: 14,
    lg: 16,
    xl: 18,
    xxl: 20,
    xxxl: 24,
    display: 32,
  },

  fontWeight: {
    regular: '400' as const,
    medium: '500' as const,
    semibold: '600' as const,
    bold: '700' as const,
  },

  lineHeight: {
    tight: 1.2,
    normal: 1.5,
    relaxed: 1.75,
  },

  iconSize: {
    xs: 16,
    sm: 20,
    md: 24,
    lg: 32,
    xl: 48,
  },

  shadow: {
    sm: {
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.05,
      shadowRadius: 2,
      elevation: 2,
    },
    md: {
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 4,
      elevation: 4,
    },
    lg: {
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.15,
      shadowRadius: 8,
      elevation: 8,
    },
  },

  layout: {
    screenPaddingHorizontal: 16,
    screenPaddingVertical: 12,
    headerHeight: 56,
    tabBarHeight: 84,
    componentGap: 8,
    sectionGap: 12,
    majorSectionGap: 16,
  },
};

// Type definitions for better TypeScript support
export type ColorToken = keyof typeof tokens.color;
export type SpacingToken = keyof typeof tokens.spacing;
export type BorderRadiusToken = keyof typeof tokens.borderRadius;
export type FontSizeToken = keyof typeof tokens.fontSize;
export type FontWeightToken = keyof typeof tokens.fontWeight;
export type IconSizeToken = keyof typeof tokens.iconSize;
