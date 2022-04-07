import '../styles/globals.css'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return(
    <div>
      <nav className="flex items-center p-4 border-b border-gray-300">
        <h1 className="text-gray-500">xiv-fc</h1>
        <div className="w-8 h-8 ml-auto border border-gray-300 rounded-full"></div>
      </nav>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp
