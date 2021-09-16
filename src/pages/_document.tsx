/* eslint-disable @typescript-eslint/explicit-member-accessibility */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import Document, { Html, Head, Main, NextScript } from "next/document";

import { GA_TRACKING_ID } from "../config";

export default class MyDocument extends Document {
	render() {
		return (
			<Html lang="en-us">
				<Head>
					<link rel="preconnect" href="https://fonts.gstatic.com" />
					<link
						rel="preload"
						href="https://fonts.googleapis.com/css2?family=Mukta&family=Nunito&display=swap"
						as="style"
					/>
					<link
						href="https://fonts.googleapis.com/css2?family=Mukta&family=Nunito&display=swap"
						rel="stylesheet"
					/>{" "}
					<script
						async
						src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
					/>
					<script
						// eslint-disable-next-line react/no-danger
						dangerouslySetInnerHTML={{
							__html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
						}}
					/>
				</Head>
				<body className="bg-white dark:bg-shark">
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}
