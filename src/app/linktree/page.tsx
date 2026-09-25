import type { Metadata } from "next";
import { LaStradaLinktree } from "@/components/LaStradaLinktree";

export const metadata: Metadata = {
  title: "La Strada Pizza — Links",
  description:
    "Acesse nosso cardápio completo ou entre na comunidade do WhatsApp da La Strada Pizza.",
};

export default function LinktreePage() {
  return <LaStradaLinktree />;
}
