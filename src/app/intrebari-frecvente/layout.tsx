import type { Metadata } from "next";
import { FAQSchema } from "@/components/structured-data";

export const metadata: Metadata = {
  title: "Întrebări frecvente",
  description:
    "Răspunsuri la cele mai frecvente întrebări despre mediere, validitatea juridică a acordurilor și confidențialitatea procesului.",
};

export default function FAQLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <FAQSchema />
      {children}
    </>
  );
}
