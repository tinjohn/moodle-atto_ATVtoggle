function invisibleAVT(div) {
    const collection = document.getElementsByTagName(div);
    for (let i = 0; i < collection.length; i++) {
        if (collection[i].style.visibility != "visible") {
            collection[i].style.visibility = "visible";
        } else {
            collection[i].style.visibility = "hidden";
        }
    }
}
