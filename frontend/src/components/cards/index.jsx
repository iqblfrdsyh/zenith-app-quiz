import CategoryCard from "./categoryCard";

const Cards = {
  CardAchievement: () => {
    return <div>card achievement</div>;
  },
  CardRecent: () => {
    return <div>card recent</div>;
  },
  CardCategory: CategoryCard,
};

export { Cards };
