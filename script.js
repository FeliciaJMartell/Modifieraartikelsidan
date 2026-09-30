async function hamtaProdukter() { // bygger en funktion för att kunna hämta min json fil & göra om till JavaScript objekt
    try {
        const response = await fetch("produkter.json"); // hämtar min json fil 

        if (!response.ok) { // om filen som hämtas inte är OK, hoppar då ner till catch som skickar ut felmeddelande i console log. 
            throw new Error("Något gick fel vid hämtning");
        }

        const data = await response.json(); // gör om json filen till ett JavaScript object


        //Jag skapar en loop forEach som jag döper till produkt. Jag ber datorn loopa igenom varje artikel 
        //från min json fil och sätta alla värden från arrayen.
        //Med hjälp av elementtaggar så kommer jag senare få ut dom på min index sida.
        //Med hjälp av ${produkt.namn} så hämtar datorn värdet från json filen och lägger in värdet i texten 
        //jag skapar en ny varibel const kort och ger den ett värde direkt genom att skapa en ny div. 
        //Jag väljer att använda const eftersom värdet kort inte kommer att ändras. 
        //const kort = document.createElement("div"); skapar en ny div varje runda & kort.InnerHTML sätter innehållet med hjälp av element-taggarna.
        // så man kan säga att varje div är en låda och kort fyller lådan med innehåll (bild, namn, beskrivning & pris) som hämtas från json filen. 
        // jag valde att göra pris till en class då jag ville att det skulle vara i fetstil, som jag fixade i min css.  
        


        data.produkter.forEach(produkt => {
            const kort = document.createElement("div");
            kort.innerHTML = `
            <img src="${produkt.bild}" alt="${produkt.namn}">
            <h3>${produkt.namn}</h3>
            <p>${produkt.beskrivning}</p>
            <p class="pris">${produkt.pris} kr</p>
            
            `;

            // jag ville att man skulle kunna navigera enkelt till de olika produktkategorierna. Gjorde då en if eller else & kopplade
            // ihop det med mina divar i html filen. Jag hämtar id värdet från html filen kring vilken div varje värde ska ligga i & jag kopplar
            // ihop det med json filen utefter vilken typ de har.
            if (produkt.typ === "datorkomponent") {
                document.getElementById("produkt-komponenter").appendChild(kort);
            } else if (produkt.typ === "datortillbehör") {
                document.getElementById("produkt-tillbehor").appendChild(kort);
            }

        });

        // om något går fel i try-blocket, t.ex. att filen inte kan läsas eller hittas så fångas felet här & skickar ut i console log 
        // istället för att krascha sidan.
    } catch (error) { 
        console.error("Fel:", error); 
    }
}

hamtaProdukter(); // anropar funktion så att den börjar rulla
