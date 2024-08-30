export interface SelectOption {
    value: string;
    label?: string;
    icon?: string;
  }

export interface RegionCardData {
    cardName: string;
    startTime: string;
    endTime: string;
    coreIndex: string;
    coreHours: string;
    coreOcupaccy: number;
    consumed: number;
    currentUsage?: number | undefined; 
    chainLabel?: string; 
    chainColor?: 'yellowDark' | 'greenDark' | 'orangeDark' | 'pinkDark' | 'cyan' | 'redDark' | 'purpleDark' | 'teal' | 'blueDark' | 'gray6' | 'dark5' | 'gray5' | 'greenPrimary';
    onClick?: () => void;
}

export type SearchTerms = {
  ExstricID: string;
  Account: string;
  Core: string;
  "Price(KSM)": string;
  SalesType: string;
  Timestamp: string;
};
