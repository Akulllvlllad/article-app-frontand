import React, { useEffect } from "react";
import { Header } from './components/header/header';
import {useTheme} from './components/hooks/use-theme'
import './scss/app.scss'

function App() {
  const { theme, setTheme } = useTheme()
  const [state, setState] = React.useState()
  
  React.useEffect(()=>{
    fetch('https://articleappkrsc.herokuapp.com/posts')
			.then(response => response.json())
			.then(json => setState(json))
      
  }, [])
 

  return (
   <>
    <Header />
   </>
  );
}

export default App;
