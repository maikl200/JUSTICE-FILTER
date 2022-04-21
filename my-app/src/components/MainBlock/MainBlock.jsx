import React from 'react';

import classes from "../Main/main.module.scss";


const MainBlock = ({name, category, description, id, img}) => {
  return (
      <>
        <div className={classes.main__block}>
          <img src={img} alt={'Картинка'}/>
          <div className={classes.main__block_info}>
            <h3>{name}</h3>
            <span>Категория:{category}</span>
            <span>Описание:{description}</span>
            <span>ID: {id}</span>
          </div>
        </div>
      </>
  );
};

export default MainBlock;