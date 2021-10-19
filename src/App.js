import Counter from "./Counter";
import {Provider} from 'react-redux'
import store from './store'
function App() {
  return (
    <Provider store={store}>
    <div className="App">
    
        <h1>REACT PROJECT</h1>
        <Counter></Counter>
    
    </div>
    </Provider>
  );
}

export default App;
