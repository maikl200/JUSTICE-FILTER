import React, {useRef} from 'react';

import classes from './header.module.scss'
import arrow from '../../assets/Arrow.png'

import {addCardAction, setFilterStateAction} from "../store/action";
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
  const nameInput = useRef(null)
  const descriptionInput = useRef(null)
  const categoryInput = useRef(null)
  const imgInput = useRef(null)


  const addCard = (
      imgInput,
      nameInput,
      descriptionInput,
      categoryInput) => {
    dispatch(addCardAction({
      img: imgInput,
      id: Math.floor(Math.random() * (500 - 1)) + 1,
      name: nameInput,
      description: descriptionInput,
      category: categoryInput,
    }))
  }
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
          <div className={classes.header_add}>
            <span>Добавить товар:</span>
            <input
                ref={imgInput}
                type={"text"}
                placeholder={'Вставьте ссылку на фото'}/>
            <input
                ref={nameInput}
                type={"text"}
                placeholder={'Название товара'}/>
            <input
                ref={descriptionInput}
                type={"text"}
                placeholder={'Описание'}/>
            <input
                ref={categoryInput}
                type={"text"}
                placeholder={'Категория'}/>
            <button onClick={() => {
              addCard(
                  imgInput.current.value,
                  nameInput.current.value,
                  descriptionInput.current.value,
                  categoryInput.current.value)
            }}>Добавить
            </button>
          </div>
        </div>
      </header>
  );
};

export default Header;