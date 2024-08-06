import IntersectionTest from "@components/IntersectionTest";
import IntersectionTest2 from "@components/IntersectionTest2";

export default function Home() {
  return (
      <main className="flex flex-col items-center justify-between px-7 py-10 overflow-y-auto" style={{height: '100vh'}}>
             <IntersectionTest/>
          <IntersectionTest2/>
      </main>
  );
}
