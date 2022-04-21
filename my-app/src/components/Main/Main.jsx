import React, {useState} from 'react';
import {productsData} from '../../mockdata/productsData'

import classes from './main.module.scss'

import MainBlock from "../MainBlock/MainBlock";

const Main = () => {

  const [value, setValue] = useState('')

  const catalog = productsData.filter(
      (item) =>
          item.category.includes(value)
  );

  const giveCategory = (e) => {
    setValue(e.target.value)
  }
  return (
      <main
          className={classes.main}>
        <select
            className={classes.main__select}
            value={value}
            onChange={giveCategory}>
          <option value={''}>Все</option>
          <option>Овощи</option>
          <option>Фрукты</option>
          <option>Ягоды</option>
          <option>Рыба</option>
          <option>Сладости</option>
        </select>
        {catalog.map((product) => {
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