import CitySelector from "../components/CitySelector";
import Header from "../components/Header";

export default function Home() {

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      <Header />
      <CitySelector />
    </div>
  );
}
