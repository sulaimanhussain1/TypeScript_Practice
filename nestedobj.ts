
type Poem  = {
    author : {firstName:string , lastName:string};
    poemName : string;
    date : number
};

const poemMatch:Poem = {
    author : {firstName : "Allama" , lastName : "Iqbal" } , 
    poemName : "Dastan - e - Mout" , 
    date : 26_10_2001
};

console.log(poemMatch);