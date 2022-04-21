import React from 'react';

import classes from './main.module.scss'

import MainBlock from "../MainBlock/MainBlock";
import {useSelector} from "react-redux";

const Main = () => {


  const catalog = useSelector((state) => state.productReducer)
  const filterState = useSelector((state) => state.filterReducer)
  const filteredCatalog = filterState === 'Все' ? catalog : catalog.filter((card) => card.category === filterState)

  return (
      <main
          className={classes.main}>
        {filteredCatalog.map((product) => {
          return <MainBlock
              key={product.id}
              img={product.img}
              description={product.description}
              name={product.name}
              id={product.id}
              category={product.category}
          />
        })}
      </main>
  );
};

export default Main;