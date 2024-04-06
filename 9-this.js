function foo() {
    console.log(this);
};

foo(); /// undefined
/////////////

const petya = {
    name: 'Petya',

    showThis() {
    console.log(this);
  },
    showName() {
        console.log(this.name)
    }
};
petya.showName();/// Petya
petya.showThis(); /// {name: 'Petya', showThis: ƒ, showName: ƒ}

//////////////////

const user = {
    userName: 'Monica'
};

user.showContext = foo; /// function foo() {console.log(this);};

user.showContext(); /// { userName: 'Monica', showContext: ƒ }

