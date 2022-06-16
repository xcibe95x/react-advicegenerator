import { useEffect } from 'react';
import { useState } from 'react';
import { Advice, IAdvice } from './components/Advice';
// import { ReactComponent as Divider } from './img/pattern-divider-desktop.svg';
import Divider from './img/pattern-divider-desktop.svg';
import styles from './App.module.css';
import Button from './components/Button';
import { themeContext } from './Context';


function App() {

  // Theme State
  const [light, setLight] = useState(false);

  // Define the name of the theme we are going to get
  let newTheme = light ? 'dark' : 'light';
  let currentTheme = light ? 'light' : 'dark';
  let divider = Divider;

  // Button Click State
  const [click, setClick] = useState(0);

  // Advice State
  const [getAdvice, setAdvice] = useState<IAdvice>({
    id: null,
    advice: null
  });

  // Use Effect Event, triggered by the Button Click State each time it is incremented
  useEffect(() => {
    fetch('https://api.adviceslip.com/advice', {cache: "no-store"})
    .then(res => res.json())
    .then(res => {
      setAdvice({ id: res.slip.id, advice: res.slip.advice })
    })
  }, [click])

  // Change body background color when theme is updated in the context
  useEffect(() => {
    switch (light) {
      case true:
        document.body.classList.add('light');
        break;
      case false:
      default:
        document.body.classList.remove('light');
        break;
    }
  }, [light])

  // HTML RETURN
  return (
    <themeContext.Provider value={{ light, setLight }}>
    <div className={styles.topContainer}>
      <Button style={1} text={newTheme} handleClick={setClick} isClicking={click} />
    </div>

    <div className={`${styles.container} ${styles[currentTheme]}`}>
      <Advice id={getAdvice.id} advice={getAdvice.advice}/>
      <img className={styles.divider} src={Divider}/>
      {/* <Divider color="red" path="red"/> */}
      <div className={styles['random-button']}>
        <Button handleClick={setClick} isClicking={click} />
      </div>
    </div>
    </themeContext.Provider>
  );
}

export default App;
