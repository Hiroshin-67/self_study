export function hello():void{
  const root = document.getElementById('root');
  const p = document.createElement('p');
  p.textContent = "Hello TypeScript!";
  root?.appendChild(p);
}