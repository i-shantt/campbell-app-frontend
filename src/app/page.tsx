import Header from "@/header/header.component";
import Image from "next/image";
import SearchResults from "./search-results/search-results.component";

export default function Home() {
  return (
    <>
      <Header/>
    
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main style={{width: "80%", margin: "auto"}}>
        <SearchResults/>
      </main>
      
    </div>
    </>

  );
}
