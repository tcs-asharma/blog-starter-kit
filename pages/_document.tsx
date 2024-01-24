import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  if (['header'].includes(this.props.__NEXT_DATA__.props.pageProps.page)) {
      return <Main />;
    }
  
  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
