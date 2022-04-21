import React from 'react';

import classes from './header.module.scss'
import arrow from '../../assets/Arrow.png'

const Header = () => {
  return (
      <header className={classes.header}>
        <div className={classes.header__nav}>
          <span>Выбирете категорию нужного продукта</span>
          <img src={arrow} alt={'Стрелочка'}/>
        </div>
      </header>
  );
};

export default Header;