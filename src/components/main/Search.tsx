import { Dispatch, SetStateAction } from "react";

const Search = ({
  search,
  setSearch,
}: {
  search: string;
  setSearch: Dispatch<SetStateAction<string>>;
}) => {
  return (
    <section className="search">
      <h1>😎 Emoji Search 😎</h1>
      <input
        type="text"
        placeholder="What emoji are you looking for ?"
        onChange={(event) => {
          setSearch(event.target.value);
        }}
        value={search}
      />
    </section>
  );
};

export default Search;
