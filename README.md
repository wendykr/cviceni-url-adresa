# Doporučené uložky na doma

Kurz Základy TypeScriptu

## 1. URL adresa

Vytvořte typ pro reprezentaci URL adresy. Postupujte podle následujících kroků:

1. Podle [tohoto článku](https://medium.com/@joseph.pyram/9-parts-of-a-url-that-you-should-know-89fea8e11713) si nastudujte, z jakých částí se skládá URL adresa.
2. Vytvořte typ `Url` s vlastnostmi pro jednotlivé části URL adresy. Dobře si rozmyslete typy jednotlivých vlastností a také, které z nich jsou nepovinné.
3. Vytvořte proměnnou typu `Url` a vložte do ní nějakou URL adresu. Vypište tento objekt pomocí `console.log`.
4. Vytvořte funkci `formatUrl`, která bude mít parametr typu `Url` a vrátí řetězec se správě zformátovanou URL adresou. Vyzkoušejte funkci na několika různých URL adresách a výsledky vypište pomocí `console.log`.

## Bonus
Pokud si věříte, vytvořte funkci `parseUrl`, která bude mít parametr typu `string` a vrátí objekt typu `Url`. Funkce vytáhne jednotlivé části URL adresy z řetězce a uloží je do objektu. Pokud v řetězci není smysluplná URL adresa, funkce vrátí `null`. Vyzkoušejte funkci na několika různých řetězcích a výsledky vypište pomocí `console.log`.