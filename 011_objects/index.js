// let nav = "kani";

// console.log( nav );

const mirov = {
    nav: "kani 2",
    pashnav: "mani",
    temen: 23,
    navupashnav: function() {
        return this.nav + " " + this.pashnav;
    }
}
console.log(mirov.nav);
console.log(mirov["pashnav"]);
console.log( "Navee min "+ mirov.navupashnav() + " ye");

const x = mirov;
x.nav = "welat";
console.log(mirov.nav);


const mirov1 = {};

mirov1.nav = "roni";
mirov1.pashnav = "moni";
mirov1.temen = 45;
mirov1.bejn = 180;

const person = new Object();

