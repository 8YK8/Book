/*let num;
do {
    num = prompt ("vvedite chislo bolshe 100","")
    } while (num <= 100 && num);*/


let num = prompt ("vvedite chislo bolshe 100","");
if (num >= 100) {
    alert ("It's true!");
    }if (num < 100){
        alert ("WRONG!!!")
    }else{
        alert ("Poprobuj eshe raz!");
    }

    let n =10;

    book:
    for (let i = 0; i<=n; i++){
        for (j = 2; j<i; j++){
            if (i%j==0) continue book;
        }
        alert (i);
    }