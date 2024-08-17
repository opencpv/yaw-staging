import PopularCitiesCard from "./components/ui/PopularCitiesCard";

export default function Home() {
  return <main className="p-5">
    <h1>Works</h1>
    <PopularCitiesCard
      description="lorem"
      location="Kumasi"
      propertyNumber={2}
    />
  </main>;
}
