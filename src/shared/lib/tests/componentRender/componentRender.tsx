import { render } from "@testing-library/react";
import { ReactNode } from "react";
import { I18nextProvider } from "react-i18next";
import i18nForTests from 'shared/config/i18n/i18nForTesting';
import { MemoryRouter } from "react-router-dom";
import { StateSchema, StoreProvider } from "app/providers/StoreProvider";
import { DeepPartial } from "shared/types/general";
// import { createRoot } from "react-dom/client";

export interface componentRenderOptions {
  route?: string,
  initialState?: DeepPartial<StateSchema>
}

export function componentRender(component: ReactNode, options: componentRenderOptions = {}) {
  const {
    route = '/',
    initialState,
  } = options;


  return render(
    <StoreProvider initialState={initialState as StateSchema}>
      <MemoryRouter initialEntries={[route]}>
        <I18nextProvider i18n={i18nForTests}>
          {component}
        </I18nextProvider>
      </MemoryRouter>
    </StoreProvider>,
  );
}

// export function componentRender(component: ReactNode, options: componentRenderOption = {}) {
//   const { route = '/', initialState } = options


//   const root = document.createElement('div');
//   root.setAttribute('id', 'root');
//   document.body.appendChild(root);

//   const container = document.getElementById('root');
//   if (!container) {
//     throw new Error('Container root is non find')
//   }

//   const rootInstance = createRoot(container);
//   rootInstance.render(
//     <StoreProvider initialState={initialState as StateSchema}>
//       <MemoryRouter initialEntries={[route]}>
//         <I18nextProvider i18n={i18nForTests}>
//           {component}
//         </I18nextProvider>
//       </MemoryRouter>
//     </StoreProvider>
//   );

//   return () => {
//     if (container) {
//       unmountComponentAtNode(container);
//       container.remove();
//     }
//   };
// }