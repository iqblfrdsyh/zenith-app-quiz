import { NextUIProvider } from "@nextui-org/react";

export default function Providers({ children }) {
  return (
    <NextUIProvider>
      <main>{children}</main>
    </NextUIProvider>
  );
}
