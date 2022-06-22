import { useSelector} from 'react-redux'
import './App.css';
import Commnets from './Comments';
import Likes from './Likes';
import Spin from './Spin';
import Title from './Title';
import sea from './img/sea.jpg'


function App() {
  const error = useSelector(state => state.appReducer.error);
  console.log('error >> ', error)
  return (
    <div className="App">
      <div className="wrap">
        <Spin />
        <div className="card">
          {error &&(
            <div className='error-message '>
              {error}
            </div>
          )}
          <div className="card-image">
            <img src={sea} alt="surfing"/>
            <Title />
            <Likes />
          </div>
          <Commnets />
        </div>
      </div>
    </div>
  );
}

export default App;
