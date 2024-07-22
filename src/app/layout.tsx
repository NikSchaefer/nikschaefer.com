import "./globals.css";
import React from "react";
import { Inter } from "next/font/google";
import { Metadata } from "next";
import { cn } from "@lib/utils";

const inter = Inter({
	subsets: ["latin"],
	display: "swap",
	variable: "--font-inter",
});

export const metadata: Metadata = {
	title: {
		template: "%s — Nik Schaefer",
		default: "Nik Schaefer",
	},
	description: "",
	category: "portfolio",
	metadataBase: new URL("https://nikschaefer.com"),
	openGraph: {
		type: "website",
		locale: "en",
		url: "https://nikschaefer.com",
		siteName: "Nik Schaefer",
		title: "Nik Schaefer",
		description:
			"I'm Nik Schaefer, a driven lead software engineer and co-founder, dedicated to leveraging technology and education to create positive change.",
		images: [
			{
				url: "/logo.svg",
				width: 400,
				height: 400,
				alt: "Noveltor",
			},
		],
	},
	twitter: {
		creator: "@NikSchaefer",
		site: "https://nikschaefer.com",
		card: "summary_large_image",
		description:
			"I'm Nik Schaefer, a driven lead software engineer and co-founder, dedicated to leveraging technology and education to create positive change.",
		images: ["https://nikschaefer.com/logo.svg"],
	},
	creator: "Nik Schaefer",
	publisher: "Nik Schaefer",
	keywords: [
		"nik",
		"schaefer",
		"nikschaefer",
		"Nik",
		"Schaefer",
		"developer",
	],
	referrer: "no-referrer-when-downgrade",
	applicationName: "Nik Schaefer",
	icons: {
		icon: "/icons/favicon.ico",
		apple: "/icons/apple-touch-icon.png",
		shortcut: "/icons/favicon.ico",
	},
	manifest: "/site.webmanifest",
	appleWebApp: {
		title: "Nik Schaefer",
		statusBarStyle: "black-translucent",
		capable: true,
		startupImage: ["./icons/apple-touch-icon.png"],
	},
	other: {
		handheldFriendly: "true",
	},
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}): JSX.Element {
	return (
		<html
			lang="en"
			className={cn("bg-background text-foreground", inter.className)}
		>
			<body>{children}</body>
		</html>
	);
}
