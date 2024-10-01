import React from 'react';
import qs from 'qs';

import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

import Categories from '../components/Categories';
import Sort from '../components/Sort';
import PizzaBlock from '../components/PizzaBlock';
import Sceleton from '../components/Sceleton';
import Pagination from '../Pagination';
import ErrorPopup from '../components/ErrorPopup';
// import { SearchContext } from '../App';
import { list } from '../components/Sort';

import { setCategoryId, setPageCount, setFilters, selectFilter } from '../Redax/slices/filterSlice';
import { fetchPizzas, selectPizzaData } from '../Redax/slices/pizzaSlice';

const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { items, status } = useSelector(selectPizzaData);
  const { categoryId, sort, pageCount, searchValue } = useSelector(selectFilter);

  const isSearch = React.useRef(false);
  const isMounted = React.useRef(false);

  // const { searchValue } = React.useContext(SearchContext);
  const [isLoading, setIsLoading] = React.useState(true);
  const [errorPopup, setErrorPopup] = React.useState(null);

  const onCilckCategory = (id) => {
    dispatch(setCategoryId(id));
  };

  const onPageChange = (number) => {
    dispatch(setPageCount(number));
  };

  //-----------------------------------------------------------------------------

  const getPizzas = () => {
    setIsLoading(true);

    const sortBy = sort.sortProperty.replace('-', '');
    const order = sort.sortProperty.includes('-') ? 'asc' : 'desc';
    const category = categoryId > 0 ? `category=${categoryId}` : '';
    const search = searchValue ? `&search=${searchValue}` : '';

    dispatch(
      fetchPizzas({
        sortBy,
        order,
        category,
        search,
        pageCount,
      }),
    );

    window.scrollTo(0, 0);
  };

  //Если изменили параметры и был первый рендер-----------------------------------------------------------------------------------------------

  React.useEffect(() => {
    if (isMounted.current) {
      const queryString = qs.stringify({
        sortProperty: sort.sortProperty,
        categoryId,
        pageCount,
      });

      navigate(`?${queryString}`);
    }

    isMounted.current = true;
  }, [categoryId, sort.sortProperty, pageCount]);

  //Если был первый рендер, то проверяем URL-параметры и сохраняем в редаксе-----------------------------------------------------------------------------------------------

  React.useEffect(() => {
    if (window.location.search) {
      const params = qs.parse(window.location.search.substring(1));

      const sort = list.find((obj) => obj.sortProperty === params.sortProperty);

      dispatch(
        setFilters({
          ...params,
          sort,
        }),
      );

      isSearch.current = true;
    }
  }, []);

  //Если был первый рендер, то запрвшиваем пицци-----------------------------------------------------------------------------------------------

  React.useEffect(() => {
    getPizzas();

    isSearch.current = false;
  }, [categoryId, sort.sortProperty, searchValue, pageCount]);

  //-----------------------------------------------------------------------------------------------

  const pizzas = items.map((obj) => (
    <Link key={obj.id} to={`/pizzas/${obj.id}`}>
      <PizzaBlock {...obj} />
    </Link>
  ));

  const sceletons = [...new Array(6)].map((_, index) => <Sceleton key={index} />);

  return (
    <>
      <div className="container">
        <div className="content__top">
          <Categories value={categoryId} onCilckCategory={onCilckCategory} />
          <Sort />
        </div>
        <h2 className="content__title">Все пиццы</h2>
        {status === 'error' ? (
          <div className="content__error-info">
            <h2>Произошла ошибка😕</h2>
            <p>Неудалось получить пиццы. Попробуйте повторить запрос позже!</p>
          </div>
        ) : (
          <div className="content__items">{status === 'loading' ? sceletons : pizzas}</div>
        )}
        <Pagination pageCount={pageCount} onPageChange={onPageChange} />
      </div>
      {errorPopup && <ErrorPopup message={errorPopup} onClose={() => setErrorPopup(null)} />}{' '}
      {/* Отображаем попап если есть ошибка */}
    </>
  );
};
export default Home;

//---------------------fetch()
//   .then((res) => {
//     return res.json();
//   })
//   .then((json) => {
//     setItems(json);
//     setIsLoading(false);
//   });

//---------------------axios
//     .get(
//       `https://64e650ea09e64530d17fdd35.mockapi.io/items?page=${pageCount}&limit=4&${category}&sortBy=${sortBy}&order=${order}${search}`,
//     )
//     .then((res) => {
//       setItems(res.data);
//       setIsLoading(false);
//     })
//     .catch(err=>
//     setIsLoading(false);
//     );
// };
//---------------------createAsyncThunk/extraReducers

// import axios from 'axios';
// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// export const fetchPizzas = createAsyncThunk(
//     'pizza/fetchPizzasStatus',
//     async (params) => {
//         const { sortBy, order, category, search, pageCount } = params;
//         const { data } = await axios.get(
//             `https://64e650ea09e64530d17fdd35.mockapi.io/items?page=${pageCount}&limit=4&${category}&sortBy=${sortBy}&order=${order}${search}`,
//         );
//         return data;
//     }
// )

// const initialState = {
//     items: []
// };

// const pizzaSlice = createSlice({
//     name: 'pizza',
//     initialState,
//     reducers: {

//         setItems(state, action) {
//             state.items = action.payload;
//         },
//     },

//     extraReducers: {
//         [fetchPizzas.pending]: () => {
//             console.log('Идет отправка')
//         },

//         [fetchPizzas.fulfilled]: (state, action) => {
//             state.items = action.payload;
//         },

//         [fetchPizzas.rejected]: () => {
//             console.log('Была ошибка')
//         },
//     },

// });

// export const { setItems } = pizzaSlice.actions;

// export default pizzaSlice.reducer;
