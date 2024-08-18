import Link from "next/link";
import PopularCitiesCard from "./components/ui/PopularCitiesCard";

export default function Home() {
  return <main className="p-5">
    <h1>Works</h1>
    <h1 className="text-blue-500">Works</h1>
    <Link href="/">Home</Link>
    <Link href="/about">About</Link>
    <h4>Problem menu?</h4>
    {/* <PopularCitiesCard
      description="lorem"
      location="Kumasi"
      propertyNumber={2}
    /> */}
  </main>;
}
