let x = { 
    a() { 
        return this; 
    }
}

x.a();


let z = x.a;
z();

let a = x.a;
a();
