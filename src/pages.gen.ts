import type { PathsForPages, GetConfigResponse } from "waku/router";

import type { getConfig as About_getConfig } from "./pages/about";
import type { getConfig as Index_getConfig } from "./pages/index";
import type { getConfig as SignIn_getConfig } from "./pages/sign-in";

type Page =
  | ({ path: "/about" } & GetConfigResponse<typeof About_getConfig>)
  | ({ path: "/" } & GetConfigResponse<typeof Index_getConfig>)
  | ({ path: "/sign-in" } & GetConfigResponse<typeof SignIn_getConfig>)
  | { path: "/sign-up"; render: "dynamic" };

declare module "waku/router" {
  interface RouteConfig {
    paths: PathsForPages<Page>;
  }
  interface CreatePagesConfig {
    pages: Page;
  }
}
