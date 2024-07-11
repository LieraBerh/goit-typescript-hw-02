import React, { useState, useEffect } from "react";
import fetchPhotosWithQuery from "../services/unsplashApi";
import "./App.css";
import ErrorMessage from "./ErrorMessage/ErrorMessage";
import ImageGallery from "./ImageGallery/ImageGallery";
import { ImageModal } from "./ImageModal/ImageModal";
import LoadMoreBtn from "./LoadMoreBtn/LoadMoreBtn";
import Loader from "./Loader/Loader";
import SearchBar from "./SearchBar/SearchBar";
import { Photo } from "../types";

const App: React.FC = () => {
  const [query, setQuery] = useState<string>("");
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [error, setError] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1);
  const [isEmpty, setIsEmpty] = useState<boolean>(false);
  const [showLoadMore, setShowLoadMore] = useState<boolean>(false);
  const [selectImg, setSelectImg] = useState<Photo | null>(null);
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);

  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        setLoading(true);
        const { results, total_pages } = await fetchPhotosWithQuery(
          query,
          page
        );
        if (page === 1) {
          setPhotos(results);
        } else {
          setPhotos((prev) => [...prev, ...results]);
        }
        setIsEmpty(results.length === 0);
        setShowLoadMore(page < total_pages);
        setError(false);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    if (query) {
      fetchPhotos();
    }
  }, [query, page]);

  const handleSearch = (topic: string) => {
    setQuery(topic);
    setPage(1);
  };

  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const handleModalOpen = (img: Photo) => {
    setIsOpenModal(true);
    setSelectImg(img);
  };

  const closeModal = () => {
    setIsOpenModal(false);
    setSelectImg(null);
  };

  return (
    <>
      <SearchBar onSearch={handleSearch} />
      {loading && <Loader />}
      {error && <ErrorMessage />}
      {isEmpty && (
        <p className="no_result_msg">
          No results for query: &nbsp;
          <span className="no_result_msg_span">{query}</span>
        </p>
      )}
      {photos.length > 0 && (
        <ImageGallery items={photos} handleModalOpen={handleModalOpen} />
      )}
      {showLoadMore && <LoadMoreBtn onClick={handleLoadMore} />}
      <ImageModal
        modalIsOpen={isOpenModal}
        closeModal={closeModal}
        selectImg={selectImg}
      />
    </>
  );
};

export default App;
