// pages/_document.tsx

import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head>
                    {/* Google Fonts 추가 */}
                    <link
                        href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@400;700&display=swap"
                        rel="stylesheet"
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
