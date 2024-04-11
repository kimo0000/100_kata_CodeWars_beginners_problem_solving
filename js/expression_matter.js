function expressionMater(a,b,c) {
return Math.max(a+b+c,
                a*b*c,
                a+(b*c),
                a*(b+c),
                b+(a*c),
                c+(b*a),
                (a+b)*c,
                (a+c)*b)
}

console.log(expressionMater(5,2,3));