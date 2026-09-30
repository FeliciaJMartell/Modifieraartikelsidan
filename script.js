async function hamtaProdukter() {
    try {
        const response = await fetch("produkter.json");

        if (!response.ok) {
            throw new Error("Något gick fel vid hämtning");
        }

        const data = await response.json();
        let container = document.getElementById("produkter");

        data.produkter.forEach(produkt => {
            let kort = document.createElement("div");
            kort.innerHTML = `
            <img src="${produkt.bild}" alt="${produkt.namn}">
            <h2>${produkt.namn}</h2>
            <p>${produkt.beskrivning}</p>
            <p>${produkt.pris} kr</p>
            <p>${produkt.typ}</p>
            `;
            container.appendChild(kort);
        });

        

    } catch (error) {
        console.error("Fel:", error);
    }
}

hamtaProdukter();
