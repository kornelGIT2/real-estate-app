import { estateDummyData } from "../const/const";

function sort({
  sortType,
  items,
}: {
  sortType: string;
  items: typeof estateDummyData;
}) {
  if (sortType === "Featured") return items;

  if (sortType === "Price (Lowest - Highest)") {
    return items.sort((a, b) => {
      return a.price - b.price;
    });
  }

  if (sortType === "Price (Highest - Lowest)") {
    return items.sort((a, b) => {
      return b.price - a.price;
    });
  }
}

export default sort;
