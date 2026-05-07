import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { LOGIN_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Log in",
  description: "Sign in to your Punt Kingz account.",
  robots: { index: false, follow: false },
};

export default function LoginPage() {
  redirect(LOGIN_URL);
}
