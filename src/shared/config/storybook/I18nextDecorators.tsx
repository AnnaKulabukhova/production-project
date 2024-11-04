import type { Decorator } from '@storybook/react/*';
import { I18nextProvider } from 'react-i18next';
import i18nForTests from '@/shared/config/i18n/i18nForTesting';
import { useEffect } from 'react';



export const I18nextDecorators: Decorator = (Story, context) => {
  const { locale } = context.globals as { locale?: string };

  useEffect(() => {
    i18nForTests.changeLanguage(locale);
  }, [locale]);

  return (
    <I18nextProvider i18n={i18nForTests}>
      <Story />
    </I18nextProvider>
  );
};
