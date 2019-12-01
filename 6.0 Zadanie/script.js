function pierwsza(a) {
    if (a%2==0) {
        console.log('Liczba : '+a+' jest parzysta');
    }else {
        console.log('Liczba : '+a+' jest nieparzysta');
    }

}

pierwsza(5);

function druga() {
    for (i=0; i<100;i++) {
        if(i%3==0) {
            console.log(i);
        }
    }
}
druga();