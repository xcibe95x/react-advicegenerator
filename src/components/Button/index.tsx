import styles from './Button.module.css';
import Dice from '../../img/icon-dice.svg';
import { useContext, useEffect } from 'react';
import { themeContext } from '../../Context';

interface IStyle {
  style?: number,
  text?: string,
  isClicking: number,
  handleClick: (value: number) => void;
}

const Button: React.FC<IStyle> = ({style, text, isClicking, handleClick}) => {

  // Light Theme Current State
  const {light, setLight } = useContext(themeContext);

  // Define Style Class Based on Light State
  let currentTheme = light ? 'light' : 'dark';

  // Switch Current Theme
  const switchTheme = () => {
    setLight(light ? false : true);
  };

  // Count User Clicks
  const clickEvent = () => {
    handleClick(++isClicking);
  };

  switch(style) { 

    // Switch Layout Button
    case 1: {  
       return (
        <button onClick={switchTheme} className={`${styles.switchButton} ${styles[currentTheme]}`}>
          {text}
        </button>
       )
    } 

    // Random Button
    default: { 
      return (
        <button onClick={clickEvent} className={`${styles.button} ${styles[currentTheme]}`}>
          <img src={Dice}></img>
        </button>
       )
    } 
 } 
 
}

export default Button;
