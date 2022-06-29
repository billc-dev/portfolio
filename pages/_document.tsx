import Document, { Head, Html, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html className="dark">
        <Head />
        <body className="text-black dark:bg-black/95 dark:text-zinc-300">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
