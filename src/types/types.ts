export interface SelectOption<T> {
    value: T;
    label: string;
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

export type TableData = {
  cellType: 'text' | 'link' | 'address';
  data: string;
  link?: string;
}

export interface TableProps {
  data: Array<Record<string, TableData>>;
}
