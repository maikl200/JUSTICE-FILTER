import onions from '../assets/GreenOnions.png'
import carrots from '../assets/Carrots.png'
import apricot from '../assets/Apricot.png'
import quince from '../assets/Quince.png'
import cherry from '../assets/Cherry.png'
import irg from '../assets/Irg.png'
import anchovy from '../assets/Anchovy.png'
import carp from '../assets/Carp.png'
import waffles from '../assets/Waffles.png'
import grillage from '../assets/Grillage.png'


export const productsData = [
  {
    img: onions,
    id: Math.floor(Math.random() * (500 - 1)) + 1,
    name: 'Зеленный лук',
    description: 'это недозрелые листья репчатого лука.',
    category: 'Овощи',
  },
  {
    img: carrots,
    id: Math.floor(Math.random() * (500 - 1)) + 1,
    name: 'Морковь',
    description: 'овощ со съедобным сладковатым оранжевым утолщённым корнем.',
    category: 'Овощи'
  },
  {
    img: apricot,
    id: Math.floor(Math.random() * (500 - 1)) + 1,
    name: 'Абрикос',
    description: 'круглый бархатистый жёлто-оранжевый плод абрикосового дерева.',
    category: 'Фрукты'
  },
  {
    img: quince,
    id: Math.floor(Math.random() * (500 - 1)) + 1,
    name: 'Айва',
    description: 'похожа одновременно и на яблоко, и на грушу.',
    category: 'Фрукты'
  },
  {
    img: cherry,
    id: Math.floor(Math.random() * (500 - 1)) + 1,
    name: 'Вишня',
    description: 'маленькая и кислая',
    category: 'Ягоды'
  },
  {
    img: irg,
    id: Math.floor(Math.random() * (500 - 1)) + 1,
    name: 'Ирга',
    description: 'вкусная ягода',
    category: 'Ягоды'
  },
  {
    img: anchovy,
    id: Math.floor(Math.random() * (500 - 1)) + 1,
    name: 'Анчоус',
    description: 'мелкая рыба',
    category: 'Рыба'
  },
  {
    img: carp,
    id: Math.floor(Math.random() * (500 - 1)) + 1,
    name: 'Карп',
    description: 'вкусная рыба',
    category: 'Рыба'
  },
  {
    img: waffles,
    id: Math.floor(Math.random() * (500 - 1)) + 1,
    name: 'Вафли',
    description: 'вкусные вафли',
    category: 'Сладости'
  },
  {
    img: grillage,
    id: Math.floor(Math.random() * (500 - 1)) + 1,
    name: 'Грильяж',
    description: 'Вкусные конфеты Грильяж',
    category: 'Сладости'
  }
]
