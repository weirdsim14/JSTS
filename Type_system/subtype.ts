// sub1 type is a subtype of sup1 type
let sub1: 1 = 1;
let sup1: number = sub1;
sub1 = sup1; // error! Type 'number' is not assignable to type '1'.

// sub2 type is a subtype of sup2 type
let sub2: number[] = [1];
let sup2: object = sub2;

sub2 = sup2; // error! Type 'object' is not assignable to type 'number[]'.

// sub3 type is a subtype of sup3 type
let sub3: [number, number] = [1, 2];
let sup3: number[] = sub3;
sub3 = sup3; // error! Type 'number[]' is not assignable to type '[number, number]'. Target requires 2 element(s) but source may have fewer.

// sub4 type is a subtype of sup4 type
let sub4: number = 1;
let sup4: any = sub4;
sub4 = sup4; // ok

// sub5 type is a subtype of sup5 type
let sub5: never = 0 as never;
let sup5: number = sub5;
sub5 = sup5; // error! Type 'number' is not assignable to type 'never'.

class Animal {}
class Dog extends Animal {
  eat() {}
}

// sub6 type is a subtype of sup6 type
let sub6: Dog = new Dog();
let sup6: Animal = sub6;
sub6 = sup6; // error! Property 'eat' is missing in type 'Animal' but required in type 'Dog'.

// sub7 type is a subtype of sup7 type
let sub7: string = '';
let sup7: string | number = sub7;

// sub8 type is a subtype of sup8 type
let sub8: {a : string; b: number} = {a : '', b: 1};
let sup8: {a : string | number; b: number } = sub8;

class Person {}
class Developer extends Person {
  coding() {}
}

class StartupDeveloper extends Developer {
  burning() {}
}

function tellme(f: (d: Developer) => Developer) {}

// Developer => Developer is a subtype of Person => Developer
tellme(function dToD(d: Developer): Developer {
    return new Developer();
    }
);

// Developer => Developer is a subtype of Developer => Person
tellme(function pToD(d: Person): Developer {
    return new Developer();
    }
);

// Developer => Developer is a subtype of StartupDeveloper => Developer

tellme(function sToD(d: StartupDeveloper): Developer {
    return new Developer();
    }
);




