// app/_app.tsx
import {
    FpjsProvider
  } from '@fingerprintjs/fingerprintjs-pro-react'
  import {AppProps} from 'next/app'
  
  export default function MyApp({ Component, pageProps }: AppProps) {
    console.log("FpjsProvider initialized");
    return (
      <FpjsProvider
        loadOptions={{
          apiKey: "tlH9DQ3ZOb0IvoOp1qKz",
        }}
      >
        <Component {...pageProps} />
      </FpjsProvider>
    );
  }
  