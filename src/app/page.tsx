import Link from "next/link";
import OllamaChat from "@components/OllamaChat";


export default function Home() {



  return (
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div>
          <h1>Hello, Next.js 14 App Directory!</h1>
          <p>
            <Link prefetch href="/hydration">
              Prefetching Using Hydration --- Good for SEO
            </Link>
              <br/>
              <Link href="/ollama3">
                 ollama3 page
              </Link>

              <OllamaChat/>
          </p>
        </div>
      </main>
  );
}
