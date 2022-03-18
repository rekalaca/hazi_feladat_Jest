const cserebere= require('./betuzo');

test ( 'A Táplálék szó esetén a megoldás Taplalek, illetve 3 betűt cserél le.', () =>{

    expect( cserebere("Táplálék")).toEqual({csere:"Taplalek", num:3});
    
    expect( cserebere("Táplálék")).not.toEqual({csere:"Taplalék", num:2});
})

