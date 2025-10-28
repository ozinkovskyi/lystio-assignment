import { ActionButtons } from "../components/Search";
import Search from "../components/Search";

const Home = () => {
  return (
    <div className="flex min-h-screen w-full justify-center bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto mt-4 flex w-full max-w-[1200px] flex-col items-center gap-6">
        <ActionButtons />
        <Search />
      </div>
    </div>
  );
};

export default Home;
