'use strict'

// // PROTOTYPICAL INHERITENCE  vs CLASSICAL INHERITENCE
// // OLOO === objects linked to other object
//
// // PROTOTYPICAL INHERITENCE
// // Homosapien === Object with no protoype
// let Homosapien = Object.create(null);
// // Human === Object with a protype of Homosapien
// let Human = Object.create(Homosapien);
// // Female === Object with a protype of Human
// let Female = Object.create(Human);
// let Male = Object.create(Human);
// let Parents = Object.create(Human)
// let Dads = Object.create(Parents);
// let Moms = Object.create(Parents);
//
// Homosapien.hasXChromosome = true;
// Male.hasYChromosome = true;
// Female.hasYChromosome = false;
//
// let Susan = Object.create(Female);
// Susan.name = 'Susan';
// Susan.age = 30;
// Susan.longHair = true;
// Susan.hasChildren = 4;
// Susan.job = 'Web Developer';
//
// let Fin = Object.create(Male);
// Fin.name = 'Fin';
// Fin.age = 12;
// Fin.longHair = true;
// Fin.hasChildren = false;
// Fin.job = 'Adventurer';
//
// let Carl = Object.create(Fin);





// VERSUS

// FUNCTIONAL PROGRAMMING
