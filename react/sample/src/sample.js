import React from "react";
import ReactDOM  from "react-dom";

export const products = [
  {category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football"},
  {category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball"},
  {category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball"},
  {category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch"},
  {category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5"},
  {category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7"}
];


export class FilterableProductTable extends React.Component {
  render(){
    return(
      <div>
      <SearchBar />
      <ProductTable products={this.props.products}/>
    </div>
    );
  }
}

const SearchBar = () => {
  return (
    <div>
      <input 
      type="text"
      value="value"
      />
      <br />
      <input 
      type="checkbox"
      />
      <label>Only show products in stock</label>
    </div>
  );
}

const ProductTable = (props) => {
  const row = [];
  let lastCategory = null;

  props.products.forEach((product) => {
    if(product.category !== lastCategory){
      row.push(
        <ProductCategoryRow 
        category={product.category}
        key={product.category} />
      );
    }
    row.push(
      <ProductRow
      product={product}
      key={product.name}
      />
    );
    lastCategory = product.category;
  }
  )

  return(
    <table>
        <thead>
          <tr>
            <th>Name</th><th>Price</th>
          </tr>
        </thead>
      <tbody>
        {row}
      </tbody>
    </table>
  );
}

const ProductCategoryRow = (props) => {
  return (
    <tr>
      <th colSpan="2">{props.category}</th>
    </tr>
  );
}

const ProductRow = (props) => {
  const product = props.product;
  const price = product.price;
  const name = product.stocked ? 
  product.name :
  <span style={{color: "red"}}>{product.name}</span>
  return (
    <tr>
      <td>{name}</td>
      <td>{price}</td>
    </tr>
  );
}

ReactDOM.render(
    <FilterableProductTable products={products} />,
  document.getElementById("sample")
);