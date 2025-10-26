import { SearchBarContainer } from "@/components/search-bar/SearchBarContainer";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Lystio</h1>
          <p className="text-gray-600">Find your perfect property</p>
        </div>
        <SearchBarContainer />
      </div>
    </div>
  );
}
