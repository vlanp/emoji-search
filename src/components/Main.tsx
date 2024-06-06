import Search from "./main/Search";
import Lines from "./main/Lines";
import emojiDataJson from "../assets/emojis-datas.json";
import { useState } from "react";

const Main = () => {
  const [search, setSearch] = useState("");

  return (
    <main>
      <Search search={search} setSearch={setSearch} />
      <Lines emojiDataList={emojiDataJson} search={search} />
    </main>
  );
};

export default Main;
