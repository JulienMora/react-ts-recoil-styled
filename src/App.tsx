import React, { useState, useEffect } from "react";
import { View, Title } from "./styled";
import CharacterCounter from "./components/CharacterCounter";

/**
 * Meilisearch POC
 */
import { MeiliSearch } from "meilisearch";
import movies from "./datas/movies.json";

const App = () => {
  const [searchedWord, setSearch] = useState("");
  const [resultSearch, setResults] = useState([]);

  const client = new MeiliSearch({ host: "http://127.0.0.1:7700" });
  // client
  //   .index("movie")
  //   .addDocuments(movies)
  //   .then((res) => console.log(res));

  // client
  //   .index("movie")
  //   .search("Galaxy")
  //   .then((res) => console.log(res));

  useEffect(() => {
    // Create an scoped async function in the hook
    async function searchWithMeili() {
      const search: any = await client.index("movie").search(searchedWord);
      console.log(search.hits);
      setResults(search.hits);
    }
    // Execute the created function directly
    searchWithMeili();
  }, [searchedWord]);
  return (
    <View>
      <Title>Hello World!</Title>
      <CharacterCounter />

      <div style={{ marginTop: "100px" }} />

      <p>Search bar Meilisearch</p>

      <input
        type="text"
        value={searchedWord}
        onChange={(event) => setSearch(event.target.value)}
        placeholder="Movie"
      />

      {resultSearch.map((res: any) => (
        <p>{res.title}</p>
      ))}
    </View>
  );
};

export default App;
