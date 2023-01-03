import { createVuetify, ThemeDefinition } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import colors from "vuetify/lib/util/colors";

const customTheme: ThemeDefinition = {
  dark: true,
  colors: {
    primary: colors.blue.base,
    error: colors.red.base,
    // 'on-surface': basicTypographyColor,
    // 'on-background': basicTypographyColor,
    // 後は必要に応じて
  },
};

export default defineNuxtPlugin((nuxtApp) => {
  const vuetify = createVuetify({
    components,
    directives,
    theme: {
      defaultTheme: "customTheme",
      themes: {
        customTheme,
      },
    }
  });

  nuxtApp.vueApp.use(vuetify);
});
