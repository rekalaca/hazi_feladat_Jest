const cserebere = require('./betuzo');

/*
Az első teszt eset simán egy ékezeteket is tartalmazó szó. Lecseréli, megszámolja. 
A hibás értéknél egy betű nincs cserélve, ami valóban helytelen, így annak megszámlálása is.
*/
test('A Táplálék szó esetén a megoldás Taplalek, illetve 3 betűt cserél le.', () => {

    expect(cserebere("Táplálék")).toEqual({ csere: "Taplalek", num: 3 });

    expect(cserebere("Táplálék")).not.toEqual({ csere: "Taplalék", num: 2 });
})

/*
A második esetben olyan szó szerepel, amiben nincs egyetlen ékezetes betű sem, így nincs mit lecserélni.
Ez is jól fut le. A hibás sornál nem cserél le semmit, de hibás a mennyiség.
*/

test('Az Almafa nem tartalmaz ékezetes betűt, így nincs mit cserélni, megszámolnva 0', () => {

    expect(cserebere("Almafa")).toEqual({ csere: "Almafa", num: 0 });

    expect(cserebere("Almafa")).not.toEqual({ csere: "Almafa", num: 2 });
})

/*
A harmadik szó ékezetes, a hibás sor tesztesetben a betűket jól cseréli, de a megszámlálás hibás
*/

test('A Tökfőzelék szó esetén a megoldás Tokfozelek, illetve 3 betűt cserél le.', () => {

    expect(cserebere("Tökfőzelék")).toEqual({ csere: "Tokfozelek", num: 3 });

    expect(cserebere("Tökfőzelék")).not.toEqual({ csere: "Tokfozelek", num: 2 });
})

/*
A negyedik teszt esetben azt teszteltem, hogy ha hibás a betűcsere és a megszámlálás is...
*/

test('A Hókotró szó esetén a megoldás Hokotro, illetve 2 betűt cserél le.', () => {

    expect(cserebere("Hókotró")).toEqual({ csere: "Hokotro", num: 2 });

    expect(cserebere("Hókotró")).not.toEqual({ csere: "Hokotró", num: 4 });
})

/*
A következő teszt eset már egy mondatot dolgoz fel...
*/

test('A Készítem a házi feladatot mondat esetén a megoldás Keszitem a hazi feladatot, illetve 3 betűt cserél le.', () => {

    expect(cserebere("Készítem a házi feladatot")).toEqual({ csere: "Keszitem a hazi feladatot", num: 3 });

    expect(cserebere("Készítem a házi feladatot")).not.toEqual({ csere: "Készítem a hazi feladatot", num: 1 });
})

/*
Az utolsó pedig az üres String esetét vizsgálja
*/

test('Az üres String esetén is jól működik, nullát ad vissza.', () => {

    expect(cserebere("")).toEqual({ csere: "", num: 0 });

    expect(cserebere("")).not.toEqual({ csere: "", num: 1 });
})