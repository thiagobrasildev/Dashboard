import styled from "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    title: string;

    colors: {
      colorRed: string;
      colorBlue: string;
      colorGreen: string;
      colorYellow: string;

      background: string;
      backgroundSidebar: string;
      text: string;
    };
  }
}
