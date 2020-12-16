/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import { useContext, useCallback } from 'react';
import { Localization } from 'contexts';
import { useSelector, useDispatch } from 'react-redux';
import {
  updateItem,
  removeItem,
  hideModal,
  showModal,
  getMovieInfo,
} from 'store/actions';
import {
  useParams, useLocation,
} from 'react-router-dom';
import { MoviesList, MovieModal } from '../components';

const MoviesListContainer = () => {
  const pathname = useLocation().pathname.slice(1);
  const dispatch = useDispatch();
  const {
    user: { uid }, modals,
  } = useSelector((state) => state);
  const data = pathname
    ? useSelector((state) => state.data).filter((item) => item.lists.includes(pathname))
    : useSelector((state) => state.searchResults);
  const movieData = useSelector((state) => state.movieInfo);
  const STR = useContext(Localization);

  function handleAddToListClick(id, lists) {
    const item = data.find((el) => el.imdbID === id);
    if (lists.length) {
      dispatch(updateItem(uid, { ...item, id, lists }));
    } else {
      dispatch(removeItem(uid, id));
    }
  }
  function handleShowInfoClick(id) {
    dispatch(getMovieInfo(id));
    dispatch(showModal({ modalName: 'fav', data: null }));
  }
  function handleModalClose() {
    dispatch(hideModal({ modalName: 'fav', data: null }));
  }

  return (
    <>
      <MoviesList
        data={data}
        onAddToListClick={handleAddToListClick}
        onShowInfoClick={handleShowInfoClick}
      />
      <MovieModal
        isVisible={modals.fav.isVisible}
        onClose={handleModalClose}
        data={movieData}
      />
    </>
  );
};

export { MoviesListContainer };
