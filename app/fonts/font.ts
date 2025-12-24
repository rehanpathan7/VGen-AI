import { Instrument_Sans,Funnel_Display } from "next/font/google";
import { Inter } from "next/font/google";

export const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  weight: ["400","500","600","700"],
});

export const funnelDisplay = Funnel_Display({
  subsets: ["latin"],
  weight: ["300","400","500","600","700","800"], // optional
});
