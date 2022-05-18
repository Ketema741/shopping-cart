import React from "react";
import data from "./data.json"
import Products from "./components/Products";
// import Filter from "./components/Filter";
// import Cart from "./components/Cart";
// import store from "./store";
// import { Provider } from "react-redux";

class App extends React.Component {
  constructor(){
    super();
    this.state ={
      products:data.products,
      size:"",
      sort:"",
    }
  }
  render() {
    return (
      // <Provider store={store}>
        <div className="grid-container">
          <header>
            <a href="/">React Shopping Cart</a>
          </header>
          <main>
            <div className="content">
              <div className="main">
                {
                /* <Filter></Filter>*/
                <Products products={this.state.products}></Products> 
                }
              </div>
              <div className="sidebar">
                {/* <Cart /> */}
              </div>
            </div>
          </main>
          <footer>All right is reserved.</footer>
        </div>
      // </Provider>
    );
  }
}

export default App;
