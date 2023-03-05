export type Theme = 'light-theme' | 'dark-theme' | 'contrast-theme';

export const THEMES: { title: string; value: Theme }[] = [
  { title: $localize`Light Theme`, value: 'light-theme' },
  { title: $localize`Dark Theme`, value: 'dark-theme' },
  { title: $localize`Contrast Theme`, value: 'contrast-theme' },
]
