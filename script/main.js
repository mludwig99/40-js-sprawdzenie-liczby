function partition(n) {
    if (n >= 100 && n <= 200) {
        return  'Liczba znajduje się w przedziale';
    } else {
        return 'Liczba nie znajduje się w przedziale.';
    }
}
console.log(partition(100));
console.log(partition(222));
