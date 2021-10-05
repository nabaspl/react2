import './App.css';
import Header from './components/layout/header/header';
import Safe from './pages/safe/safe';
import { Fragment } from 'react/cjs/react.production.min';
import {useSelector} from 'react-redux'

function App() {
  const safeLists = useSelector((state) => state.SafeReducer)
  console.log(safeLists);
  return (
    <Fragment>
      <Header/>
      <Safe/>
    </Fragment>
  );
}

export default App;
