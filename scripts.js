"Use strict";

//  task 1

// Выведите числа от 1 до 50 и от 35 до 8.

{
    for (let i=1; i<=50; i++) {
        console.log(i);
    }

    for (let i=35; i>=8; i--) {
        console.log(i);
    }
}

//  task 2
// С помощью цикла найдите сумму чисел от 0 до 100.

{
    let sum =0;

    for (let i=0; i<=100; i++) {
        sum +=i;
    }
    console.log(sum);
}

// task 3
// Найдите сумму чисел в каждом числе от 1 до 5, например: в числе 3 сумма составляет 6
// (1+2+3).

{
    let sum = 0;

    for (let i=1; i<=5; i++) {
       sum = 0;
     for (let j=1; j<=i; j++) {
        sum += j;
     }
    }
    console.log(sum);
}

//  task 4
// Выведите чётные числа от 8 до 56. Решить задание через while и for.

{
    for (let i=8; i<=56; i++) {
        if (i%2==0){
            console.log(i);
        }
    }
}