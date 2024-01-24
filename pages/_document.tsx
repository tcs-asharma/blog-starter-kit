import { Html, Head, Main, NextScript } from "next/document";

export default function Document(props) {
  if (['header'].includes(props.__NEXT_DATA__.props.pageProps.page)) {
      console.log('inside here..');
      
      return (
        <div id="tcs-header">
          <Main />
          <NextScript />
        </div>
      );
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
