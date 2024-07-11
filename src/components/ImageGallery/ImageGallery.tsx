import ImageCard from "./ImageCard/ImageCard";
import s from "./ImageGallery.module.css";
import { Photo } from "../../types";

type Props = {
  items: Photo[];
  handleModalOpen: (img: Photo) => void;
};

const ImageGallery = ({ items, handleModalOpen }: Props) => {
  return (
    <ul className={s.gallery}>
      {items.map(({ id, urls, alt_description }) => (
        <li key={id} className={s.gallery_item}>
          <ImageCard
            src={urls}
            alt={alt_description}
            handleModalOpen={() =>
              handleModalOpen({ id, urls, alt_description })
            }
          />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
