/*
Összegzés algoritmusa

Összeg = 0
CIKLUS amíg van még szám, addig
    szám = következő elem
    Összeg  = Összeg 3 szám
Ciklus Vége
*/
let numericArray = [1, 3, 2, 5, 4, 7, 6, 9];
let sum = 0;
for (let i = 0; i < numericArray.length; i++) {
    sum += numericArray[i];
}
console.log("Szum: ", sum);



/*
Számlálás algoritmusa

Db = 0
CIKLUS amíg van még szám addig
    szám = következő elem
    Ha igaz a fetétel a számra, akkor
    db 7 db + 1
    Feltétel vége
Ciklus Vége
*/
let db = 0;
for (let i = 0; i < numericArray.length; i++) {
    if (numericArray[i] % 2 == 0) {
        db++;
    }
}
console.log("Páros számok: ", db);


/*
Szélső érték keresés algoritmusa

legnagyobb = első elem
Ciklus amíg van még szám addig
    szám = következő szám
    Ha a szám > legnagyobb, Akkor
        legynagyobb = szám
    Feltétel vége
Ciklus vége
*/
let biggest = numericArray[0];
for (let i = 0; i < numericArray.length; i++) {
    if (numericArray[i] > biggest) {    
        biggest = numericArray[i];
    }   
}
console.log("Legnagyobb: ", biggest)



/*
Eldöntés algoritmusa

találat = Hamis
Ciklus amíg van elem és találat = hamis
    szám = következő elem
    Ha igaz a feltétel a számra, akkor
        találat = igaz
    Feltétel vége
Ciklus vége
*/
let contains = false;
for (let i = 0; i < numericArray.length; i++) {
    if (numericArray[i] == 5) {
        contains = true;
    }
}
console.log("Tartalmazza az 5-öt? ", contains)