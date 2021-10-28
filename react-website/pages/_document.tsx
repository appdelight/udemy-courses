import Document, { Html, Head, Main, NextScript } from "next/document";
import * as config from "../utils/config";

class MyDocument extends Document {
    render() {
        return (
            <Html lang={"en"}>
                <Head>
                    <meta charSet="UTF-8"></meta>
                    {/* <link rel="icon" href="/favicon.ico" /> */}
                    <link rel="icon" href={config.ICON} type="image/png"></link>
                    <meta name="application-name" content={config.APP_NAME} />
                    <meta name="apple-mobile-web-app-capable" content="yes" />
                    <meta
                        name="apple-mobile-web-app-status-bar-style"
                        content="default"
                    />
                    <meta
                        name="apple-mobile-web-app-title"
                        content={config.TITLE}
                    />
                    <meta name="description" content={config.DESCRIPTION} />
                    <meta name="format-detection" content="telephone=no" />
                    <meta name="mobile-web-app-capable" content="yes" />
                    <meta
                        name="msapplication-TileColor"
                        content={config.PRIMARY_COLOR}
                    />
                    <meta name="msapplication-tap-highlight" content="no" />
                    <meta name="theme-color" content={config.PRIMARY_COLOR} />
                    <link
                        rel="apple-touch-icon"
                        sizes="180x180"
                        href={config.ICON}
                    />
                    <link
                        rel="icon"
                        type="image/png"
                        sizes="32x32"
                        href={config.ICON_32}
                    />
                    <link
                        rel="icon"
                        type="image/png"
                        sizes="16x16"
                        href={config.ICON_16}
                    />
                    <link rel="manifest" href="/manifest.json" />
                    
                    <link
                        href="https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700,800,900&display=swap"
                        rel="stylesheet"
                    />

                    <link
                        rel="preload"
                        as="font"
                        type="font/ttf"
                        href="/font/Avenir-Book.ttf"
                    />
                    <link
                        rel="preload"
                        as="font"
                        type="font/ttf"
                        href="/font/Avenir-Light.ttf"
                    />
                    <link
                        rel="preload"
                        as="font"
                        type="font/ttf"
                        href="/font/Avenir-Roman.ttf"
                    />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;
