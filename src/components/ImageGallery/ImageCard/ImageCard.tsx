import s from "./ImageCard.module.css";

type Props = {
  src: {
    small: string;
    regular: string;
  };
  alt: string;
  handleModalOpen: () => void;
};

const ImageCard = ({ src, alt, handleModalOpen }: Props) => {
  return (
    <div className={s.img_wrapper}>
      <img
        src={src.small}
        alt={alt}
        onClick={() => handleModalOpen()}
        className={s.img}
      />
    </div>
  );
};

export default ImageCard;
