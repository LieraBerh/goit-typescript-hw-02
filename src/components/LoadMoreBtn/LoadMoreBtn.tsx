import s from "./LoadMoreBtn.module.css";

type Props = {
  onClick: () => void;
};

const LoadMoreBtn = ({ onClick }: Props) => {
  return (
    <button onClick={onClick} className={s.load_more_btn}>
      Load More
    </button>
  );
};
export default LoadMoreBtn;
