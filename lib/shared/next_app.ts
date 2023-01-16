import { NextComponentType, NextPageContext } from "next";
import { AppProps as NextAppProps } from "next/app";

export type NextPageWithLayout = NextComponentType<
  NextPageContext,
  any,
  any
> & {
  authPage: boolean;
};

export interface AppProps extends NextAppProps<any> {
  Component: NextPageWithLayout;
}
