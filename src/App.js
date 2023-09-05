import Products from './Products/Products.js';
import Recommended from './Recommended/Recommended.js';
import Nav from './Navigation/Nav.js';

function App(){
  return(
    <div>
      <Nav />
      <Products />
      <Recommended />

    </div>
  )
}

export default App;