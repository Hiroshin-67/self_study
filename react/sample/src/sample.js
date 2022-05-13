import React from "react";
import ReactDOM  from "react-dom";
import { isThisTypeNode, parseJsonSourceFileConfigFileContent } from "typescript";

export const products = [
  {category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football"},
  {category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball"},
  {category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball"},
  {category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch"},
  {category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5"},
  {category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7"}
];


export class FilterableProductTable extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      searchName: '',
      stockFilter: false,
      products: this.props.products,
    };
    this.handleNameFilterChange = this.handleNameFilterChange.bind(this);
    this.handleStockFilterChange = this.handleStockFilterChange.bind(this);
  }
  handleNameFilterChange(filtreName){
    this.setState({searchName: filtreName})
  }
  handleStockFilterChange(ischeck){
    this.setState({stockFilter: ischeck})
  }
  render(){
    let stockfilter = this.state.stockFilter ? 'True' : 'False';
    return(
      <div>
      <SearchBar 
      searchName={this.state.searchName}
      stockFilter={this.state.stockFilter}
      handleNameFilterChange={this.handleNameFilterChange}
      handleStockFilterChange={this.handleStockFilterChange}
      />
      <ProductTable 
      products={this.state.products}
      searchName={this.state.searchName}
      stockFilter={this.state.stockFilter}
      />
      <p>Search name? {this.state.searchName}</p>
      <p>Only stock? {stockfilter}</p>
    </div>
    );
  }
}

class SearchBar extends React.Component{
  constructor(props){
    super(props);
    this.handleFilterChange = this.handleFilterChange.bind(this);
  }
  handleFilterChange(event){
    if(event.target.type === 'text'){
      this.props.handleNameFilterChange(event.target.value);
    }else{
      this.props.handleStockFilterChange(event.target.checked);
    }
  }
  render(){
    return (
      <div>
        <input 
        type="text"
        placeholder="Search..."
        onChange={this.handleFilterChange}
        />
        <br />
        <input 
        type="checkbox"
        onChange={this.handleFilterChange}
        />
        <label>Only show products in stock</label>
      </div>
    );
  }
}


const ProductTable = (props) => {
  const row = [];
  let lastCategory = null;
  let isStock = props.stockFilter;

  props.products.forEach((product) => {
    if(product.category !== lastCategory){
      row.push(
        <ProductCategoryRow 
        category={product.category}
        key={product.category} />
      );
    }
    if(isStock && !product.stocked){
      
    }else{
      if(product.name.match(props.searchName)){
        row.push(
          <ProductRow
          product={product}
          key={product.name}
          stockFilter={props.stockFilter}
          />
        );
      }else{

      }
    }
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