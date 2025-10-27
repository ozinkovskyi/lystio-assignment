import { ActionButtons } from "@/components/searchBar";
import SearchBar from "@/components/searchBar";

const Home = () => {
  return (
    <div className="flex min-h-screen w-full justify-center bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto flex w-full max-w-[1200px] flex-col items-center justify-center gap-6 px-4">
        <ActionButtons />
        <SearchBar />
      </div>
    </div>
  );
};

export default Home;
