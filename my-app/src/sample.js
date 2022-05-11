import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Title extends React.Component{
  render(){
    return(
      <div>
        <p>子コンポーネント</p>
        <p>{this.props.title}</p>
      </div>
    );
  }
}

class App extends React.Component{
  render(){
    return(
      <div>
        <p>親コンポーネント</p>
        <Title title="初めてのprops"/>
      </div>
    );
  }
}
const test = ReactDOM.createRoot(
  document.getElementById('test')
);
test.render(<h1>hello World!</h1>);