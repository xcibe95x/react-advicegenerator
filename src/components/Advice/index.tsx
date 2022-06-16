import styles from './Advice.module.css';
import { themeContext } from '../../Context';
import { useContext } from 'react';

export interface IAdvice {
  id?: number | null,
  advice?: string | null
}

export const Advice: React.FC<IAdvice> = ({id, advice}) => {

  const {light} = useContext(themeContext);
  let currentTheme = light ? 'light' : 'dark';

  return (
    <>
      <div className={`${styles['random-text']} ${styles[currentTheme]}`}>
        <span className={`${styles['advice-text']} ${styles[currentTheme]}`}>ADVICE #{id}</span>
        <q>{advice}</q>
      </div>
    </>
  )
}
