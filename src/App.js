import Products from './Products/Products.js';
import Recommended from './Recommended/Recommended.js';
import Nav from './Navigation/Nav.js';
import Sidebar from './Sidebar/Sidebar.js';

function App(){
  return(
    <div className='home--container'>
      <div className='home--container--left--side'>
        <Sidebar />
      </div>
      <div className='home--container--right--side'>
        <Nav />
        <Recommended /> <br />
        <Products />
      </div>
    </div>
  )
}

export default App;