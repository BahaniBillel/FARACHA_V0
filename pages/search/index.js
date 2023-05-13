// search.js
import { useRouter } from "next/router";

const SearchPage = () => {
  const router = useRouter();
  const query = router.query.query || "";

  // Use the query parameter to fetch search results from Firestore or perform other operations

  return (
    <div>
      <h1>Search Results for: {query}</h1>
      {/* Display search results here */}
    </div>
  );
};

export default SearchPage;
