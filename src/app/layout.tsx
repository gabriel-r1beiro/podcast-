import type { Metadata } from "next";
import { Inter, Lexend } from "next/font/google";
import "../styles/global.css";
import { Header } from "@/components/Header/Header";

const interFont = Inter({
	variable: "--font-inter",
  subsets: ["latin"],
	weight: ["400"],
});

const lexand = Lexend({
	variable: "--font-lexand",
  subsets: ["latin"],
	weight: ["500", "600"],
});

export const metadata: Metadata = {
	title: "Podcastr",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="pt-BR">
			<body
				className={`${interFont.variable} ${lexand.variable} bg-gray-50 antialiased`}
			>
				{children}
			</body>
		</html>
	);
}
