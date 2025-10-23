import isPropValid from "@emotion/is-prop-valid";
import type { ComponentProps } from "react";

import {
  StyleSheetManager,
  ThemeProvider as SCThemeProvider,
} from "styled-components";
import { theme } from "./theme";

type Props = Omit<ComponentProps<typeof SCThemeProvider>, "theme">;

/**
 * This enables defaults for styled-components v5
 * https://styled-components.com/docs/faqs#shouldforwardprop-is-no-longer-provided-by-default
 */
function shouldForwardProp(propName: string, target: unknown) {
  if (typeof target === "string") {
    // For HTML elements, forward the prop if it is a valid HTML attribute
    return isPropValid(propName);
  }

  // For other elements, forward all props
  return true;
}

export const ThemeProvider = (props: Props) => (
  <StyleSheetManager shouldForwardProp={shouldForwardProp}>
    <SCThemeProvider {...props} theme={theme} />
  </StyleSheetManager>
);
