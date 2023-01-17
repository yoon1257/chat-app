import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      mainColor: string;
      fontColor: string;
      background: string;
    };
  }
}
