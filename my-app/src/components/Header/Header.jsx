import React from 'react';

import classes from './header.module.scss'
import arrow from '../../assets/Arrow.png'
import {setFilterStateAction} from "../store/action";
import {useDispatch, useSelector} from "react-redux";

const Header = () => {
  const selectList = [
    'Все',
    'Овощи',
    'Фрукты',
    'Ягоды',
    'Рыба',
    'Сладости'
  ]

  const dispatch = useDispatch()
  const filterState = useSelector((state) => state.filterReducer)

  const giveCategory = (e) => {
    dispatch(setFilterStateAction(e.target.value))
  }
  return (
      <header className={classes.header}>
        <div className={classes.header__nav}>
          <span>Выберете категорию нужного продукта</span>
          <img src={arrow} alt={'Стрелочка'}/>
          <select
              className={classes.header__nav__select}
              value={filterState}
              onChange={giveCategory}>
            {selectList.map((el, index) => <option
                key={index}>
              {el}
            </option>)}
          </select>
        </div>
      </header>
  );
};

export default Header;