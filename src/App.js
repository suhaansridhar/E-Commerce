import Products from './Products/Products.js';
import Recommended from './Recommended/Recommended.js';
import Nav from './Navigation/Nav.js';
import Sidebar from './Sidebar/Sidebar.js';

function App(){
  return(
    <div>
      <Sidebar />
      <Nav />
      <Recommended /> <br />
      <Products />
    </div>
  )
}

export default App;