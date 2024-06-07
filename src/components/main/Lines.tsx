import EmojiData from "../../interfaces/EmojiData";
import Line from "./lines/Line";

const Lines = ({
  emojiDataList,
  search,
}: {
  emojiDataList: Array<EmojiData>;
  search: string;
}) => {
  let emojiCount = 0;
  const selectedEmojiDataList = emojiDataList.filter((emojiData, index) => {
    if (search !== "") {
      const keywordList = emojiData.keywords.split(" ");
      for (let i = 0; i <= keywordList.length - 1; i++) {
        const keyword = keywordList[i];
        if (keyword.includes(search.toLowerCase()) && emojiCount < 20) {
          emojiCount++;
          return true;
        }
      }
      return false;
    } else {
      return index > 19 ? false : true;
    }
  });

  return (
    <section className="lines">
      {selectedEmojiDataList.map((EmojiData) => {
        return (
          <Line
            key={EmojiData.title}
            title={EmojiData.title}
            symbol={EmojiData.symbol}
          />
        );
      })}
    </section>
  );
};

export default Lines;
