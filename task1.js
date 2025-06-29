let items = [];

function addItem(item) {
    if (!items.includes(item)) {
        items.push(item);
        console.log(item + " əlavə olundu.");
    } else {
        console.log(item + " artıq var.");
    }
}

function listItems() {
    if (items.length === 0) {
        console.log("Siyahı boşdur.");
    } else {
        console.log("Siyahı:");
        for (let i = 0; i < items.length; i++) {
            console.log((i + 1) + ". " + items[i]);
        }
    }
}

addItem("Açar");
addItem("Telefon");
addItem("Açar");
listItems();
