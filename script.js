

async function hamtaProdukter() {
    try {
        const response = await fetch("produkter.json");

        if (!response.ok) {
            throw new Error("Något gick fel vid hämtning");
        }

        const data = await response.json();
     

        data.produkter.forEach(produkt => {
            let kort = document.createElement("div");
            kort.innerHTML = `
            <img src="${produkt.bild}" alt="${produkt.namn}">
            <h3>${produkt.namn}</h3>
            <p>${produkt.beskrivning}</p>
            <p class="pris">${produkt.pris} kr</p>
            
            `;

            if (produkt.typ === "datorkomponent") {
                document.getElementById("produkt-komponenter").appendChild(kort);
            } else if (produkt.typ === "datortillbehör") {
                document.getElementById("produkt-tillbehor").appendChild(kort);
            }
           
        });

        

    } catch (error) {
        console.error("Fel:", error);
    }
}

hamtaProdukter();
