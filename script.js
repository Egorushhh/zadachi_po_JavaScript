//Задача возведения в степень

/* let a = prompt('Введите ЧИСЛО которое будем возводить в степень:')
    a = a > 0 ? a : prompt('Вы ввели или ноль или не число, введите число:') // Тут должны быть проверки на ноль и не число

let b = prompt('Введите число, которое будет СТЕПЕНЬЮ ранее введенного числа:')
    b = b > 0 ? b : 2  

let x = 1

for(let i = 1; i <= b; i++)
{ 
   x = x * a;
}

alert('Ответ: ' + x) */

//============================================//

//Задача "Лестница"

let a = prompt('Введите КОЛИЧЕСТВО ветвей по высоте:')
//   a = 0 || isNaN(a) ? prompt('Вы ввели либо "0", либо не число. Введите число, отличное от нуля:') : a

let b = prompt('Введите СИМВОЛ, которым будет нарисованы ветви:')
//   b = undefined  ? prompt('Необходимо заполнить поле символом, которым будет нарисовыны ветви:') : b

let c = prompt('Введите СИМВОЛ, обозначающий окончание ветви:')
//   c = undefined  ? prompt('Необходимо заполнить поле символом, которым будет обозначено окончание ветви:') : c

let d = ''


for (let i = 1; i <= a; i++)

{
   if (i == 1) {
      console.log(c)
      continue;
   }

   d += b
   console.log(d + c)
}

//============================================//






















