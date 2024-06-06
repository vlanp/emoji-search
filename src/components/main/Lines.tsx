import EmojiData from "../../interfaces/EmojiData";
import Line from "./lines/Line";

const Lines = ({
  emojiDataList,
  search,
}: {
  emojiDataList: Array<EmojiData>;
  search: string;
}) => {
  const selectedEmojiDataList = emojiDataList.filter((emojiData, index) => {
    if (search !== "") {
      const keywordList = emojiData.keywords.split(" ");
      for (let i = 0; i <= keywordList.length - 1; i++) {
        const keyword = keywordList[i];
        if (keyword.includes(search)) {
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
        return <Line title={EmojiData.title} symbol={EmojiData.symbol} />;
      })}
    </section>
  );
};

export default Lines;
