const books = [
  {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    rating: 8.38,
  },
  {
    title: "На березі спокійних вод",
    author: "Роберт Шеклі",
    rating: 8.51,
  },
  {
    title: "Сон смішної людини",
    author: "Федір Достоєвський",
    rating: 7.75,
  },
];


for (const book of books) {
    console.log(book.title);
    console.log(book.rating);
};

const bookNames = [];
for (const book of books) {
    bookNames.push(book.title);
};
console.log(bookNames); /// ['The Last Kingdom', 'На березі спокійних вод', 'Сон смішної людини']

let totalRating = 0;
for (const book of books) {
    totalRating += book.rating;
};
const averageRating = (totalRating / books.length).toFixed(2);
console.log(averageRating);


/////////////////////


const atTheOldToad = {
  poisons: [
    {
      name: "Speed potion",
      price: 300,
    },
    {
      name: "Dragon breath",
      price: 700,
    },
    {
      name: "Stone skin",
      price: 1100,
    },
  ],
  getPoison() {
    return this.poisons;
  },

  addPoison(newPoison) {
    for (const poison of this.poisons) {
      if (poison.name === newPoison.name) {
        return `Poison ${newPoison.name} is already in your inventory!`;
      }
    }
    this.poisons.push(newPoison);
  },

  deletePoison(poisonName) {
    for (const [index, poison] of this.poisons.entries()) {
      if (poison.name === poisonName) {
        this.poisons.splice(index, 1);
        return ` ${poisonName} deleted`;
      }
    }
      return `${poisonName} not found`
  },

  deletePoisonSecondVariant(poisonName) {
    for (let i = 0; i < this.poisons.length; i += 1){
      const index = i;
      if (this.poisons[i].name === poisonName) {
        this.poisons.splice(index, 1);
         return ` ${poisonName} deleted`;
      }
    }
    return `${poisonName} not found`;
  },
  
 updatePotionName(oldName, newName) {
     for (const poison of this.poisons) {
         if (poison.name === oldName) {
             poison.name = newName
             return `Changed`
     }
     }
      return `${oldName} is not in inventory!`
    },
};

console.log(atTheOldToad.getPoison());
atTheOldToad.addPoison({ name: "Invisibility", price: 620 });
console.log(atTheOldToad.addPoison({ name: "Invisibility", price: 620 }));
console.log(atTheOldToad.deletePoison("Stone skin"));
atTheOldToad.updatePotionName("Speed potion", "Snake skin")
atTheOldToad.deletePoisonSecondVariant("Dragon breath");
console.log(atTheOldToad.getPoison());
