import Document, { Html, Head, Main, NextScript } from "next/document";

import { GA_TRACKING_ID } from "../config";

export default class MyDocument extends Document {
	render() {
		return (
			<Html lang="en-us">
				<Head>
					<link
						rel="preconnect"
						href="https://fonts.googleapis.com"
					/>
					<link rel="preconnect" href="https://fonts.gstatic.com" />
					<link
						href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap"
						rel="stylesheet"
					/>
					<script
						async
						src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
					/>
					<script
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
				<body className="bg-secondary text-gray-400">
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}
