import { AppRoutes } from "@/shared/const/router";
import { useRouteChange } from "@/shared/router/useRouteChange";
import { ScrollToolbar } from "@/widgets/ScrollToolbar";
import type { ReactElement } from "react";

export function useAppToolbar() {
  const currentRoute = useRouteChange()

  const toolbarByAppRouter: OptionalRecord<AppRoutes, ReactElement> = {
    [AppRoutes.Articles]: <ScrollToolbar virtualized />,
    [AppRoutes.ArticleDetails]: <ScrollToolbar virtualized={false} />,
    [AppRoutes.ArticleCreate]: <ScrollToolbar virtualized={false} />,
  }

  return toolbarByAppRouter[currentRoute]
}