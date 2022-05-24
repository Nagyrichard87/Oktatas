// Global scope
var globalName = "Joe";

function something() {
    var globalName = "Jack";
    console.log(globalName);
}
something();

console.log(globalName);

// let nél számít a blokk {}, blokkon belül és kivül is lehet azonons nevű változó, de nem érdemes ugyyanazt használni.
//const változó neve NAGYBETŰS