// // import  Picture from './examples/picture/Picture'
// // import React from 'react'

// // export default function App() {
// //   return (
// //     <div>
// //       <Picture></Picture>
// //     </div>
// //   )
// // }
// import Blog from './examples/blog/Blog';
// import React from 'react';

// export default function App() {
//   return (
//     <div >
//       <Blog />
//     </div>
//   );
// }

//import Blog from './examples/blog/Blog';
import React from 'react';
import AppBar from './scenes/global/AppBar';
import Banner from './scenes/global/Banner';
import NavBar from './scenes/global/NavBar';
import Footer from './scenes/global/Footer';
import Copyright from './scenes/global/Copyright';
import { Outlet } from 'react-router-dom';
import CartMenu from './scenes/global/CartMenu';
import Loading from './components/Loading';
import { Provider } from 'react-redux';
import store from './state/store';

export default function App() {
  return (
    <div >
      <Provider store={store}>
      <AppBar />
      {/* <CartMenu/> */}
      <div className='container'>
        <Banner />
        <NavBar />
        <Outlet/>
        <Footer />
      </div>
      </Provider>
      <Copyright/>
    </div>
  );
}
