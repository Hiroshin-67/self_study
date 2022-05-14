var onigiri: string = 'onigiri',
calories: number = 200;

function todaysMeal(food:string, energy:number): string{
  return `My ${food} is ${energy} calories`;
}
console.log(todaysMeal(onigiri,calories))

interface Person {
  name : string,
  age: number
}

function intro(person:Person): string{
  return `My name is ${person.name}. I am ${person.age}!`;
}
const shin ={
  name: "Shinnosuke",
  age: 23
}

console.log(intro(shin));

class Menu {
  items: Array<string>;
  pages: number

  constructor(item_list:Array<string>, total_pages:number){
    this.items = item_list;
    this.pages = total_pages;
  }

  list():void {
    console.log("Our Menu for today");
    for(let i = 0; i < this.items.length; i++){
      console.log(this.items[i]);
    }
  }

}

let SundayMenu = new Menu(["pancakes", "waffles", "orange juice"], 1);
SundayMenu.list();