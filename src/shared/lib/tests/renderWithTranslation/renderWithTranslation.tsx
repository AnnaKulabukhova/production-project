import { render } from "@testing-library/react";
import { ReactNode } from "react";
import { I18nextProvider } from "react-i18next";
import i18nForTests from 'shared/config/i18n/i18nForTesting';
import { MemoryRouter } from "react-router-dom";


export interface renderWithTranslationOption {
  route?: string
}

export function renderWithTranslation(component: ReactNode, options: renderWithTranslationOption = {}) {
  const { route = '/' } = options
  return render(
    <MemoryRouter initialEntries={[route]}>
      <I18nextProvider i18n={i18nForTests} >
        {component}
      </I18nextProvider>
    </MemoryRouter>
  );
}