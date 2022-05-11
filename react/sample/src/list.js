import React from "react";

export const numbers = [1,2,3,4,5];

const ListItem = (props) => {
  return <li>{props.value}</li>;
}

export const NumberList = (props) => {
  const numbers = props.numbers
  // const listItems = numbers.map((number) =>
  //   <ListItem value={number} key={number.toString()} />
  // );
  return(
    <ul>
      {numbers.map((number) =>
    <ListItem value={number} key={number.toString()} />
    )}
    </ul>
  );
}

export const Blog = (props) => {
  const sidebar = (
    <ul>
      {props.posts.map((post) => 
      <li key={post.id}>
        {post.title}
      </li>)}
    </ul>
  );
  const content = props.posts.map((post) =>
    <div key={post.id}>
      <h3>{post.title}</h3>
      <p>{post.content}</p>
    </div>
  );
  return (
    <div>
      {sidebar}
      <hr />
      {content}
    </div>
  )
}

export const posts = [
  {id: 1, title: 'Hello World', content: 'Welcome to learning React!'},
  {id: 2, title: 'Installation', content: 'You can install React from npm.'}
];