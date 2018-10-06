const factoriel = (number) => {
    if (number <= 1) {
        return 1;
    }
    return number * (factoriel(number - 1));
}
console.log(factoriel(5));




const reverse = (string) => {
    if (string === "") {
        return string;
    }
    let lastEl = string[string.length - 1];
    let subText = string.substring(0, string.length - 1)
    return lastEl + (reverse(subText));
}
console.log(reverse("Telerik"))