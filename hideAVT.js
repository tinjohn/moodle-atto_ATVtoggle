function hideAVT(div) {
    const collection = document.getElementsByTagName(div);
    for (let i = 0; i < collection.length; i++) {
        if (collection[i].style.display != "none") {
            collection[i].style.display = "none";
        } else {
            collection[i].style.display = "inherit";
        }
    }
}
