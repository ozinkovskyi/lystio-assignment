import SearchBarContainer from "@/components/searchBar";

const Home = () => {
  return (
    <div className="flex min-h-screen w-full justify-center bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto flex w-full max-w-[1200px] justify-center px-4">
        <SearchBarContainer />
      </div>
    </div>
  );
};

export default Home;
