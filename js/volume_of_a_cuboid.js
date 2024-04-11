class Kata {
    static get (length, width, height) {
        return length * width * height;
    }
}

console.log(Kata.get(10,10,10));