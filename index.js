// -------------------------Треугольник

const triangle_a = +prompt('Укажите сторону треугольника', 'см.');
const triangle_h = +prompt('Укажите высоту треугольника', 'см.');

const triangle = 0.5*(triangle_a*triangle_h);

console.log('Площадь треугольника - ' +triangle+ ' см. кв.');


// ---------------------------Трапеция

const trapezoid_a = +prompt('Укажите первую сторону трапеции', 'см.');
const trapezoid_b = +prompt('Укажите вторую сторону трапеции', 'см.');
const trapezoid_h = +prompt('Укажите высоту трапеции', 'см.');

const trapezoid = ((trapezoid_a+trapezoid_b)/2)*trapezoid_h;

console.log('Площадь трапеции - ' +trapezoid+ ' см. кв.');


// ----------------------------Круг

const circle_r = +prompt('Укажите радиус круга', 'см.');

const circle = (Math.PI*circle_r**2);

console.log('Площадь круга - ' +circle+ ' см. кв.');

// -----------------------Параллелограмм

const parallelogram_a = +prompt('Укажите сторону параллелограмма', 'см.');
const parallelogram_h = +prompt('Укажите высоту параллелограмма', 'см.');

const parallelogram = parallelogram_a*parallelogram_h;

console.log('Площадь параллелограмма - ' +parallelogram+ ' см. кв.');

// ---------------------------Цилиндр

  const cylinder_h = +prompt('Укажите высоту цилиндра', 'см.');
  const cylinder_r = +prompt('Укажите радиус цилиндра', 'см.');

  const cylinder = 2*(Math.PI*cylinder_r)*(cylinder_h+cylinder_r);

  console.log('Площадь цилиндра - ' +cylinder+ ' см. кв.');


// --------------------------Сфера 

  const sfera_r = +prompt('Укажите радиус cферы', 'см.');

  const sfera =4/3*(Math.PI*sfera_r**3);

  console.log('Обьем cферы - ' +sfera+ ' см. куб.');

