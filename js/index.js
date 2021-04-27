// элементы в DOM можно получить при помощи функции querySelector
const fruitsList = document.querySelector('.fruits__list'); // список карточек
const shuffleButton = document.querySelector('.shuffle__btn'); // кнопка перемешивания
const filterButton = document.querySelector('.filter__btn'); // кнопка фильтрации
const sortKindLabel = document.querySelector('.sort__kind'); // поле с названием сортировки
const sortTimeLabel = document.querySelector('.sort__time'); // поле с временем сортировки
const sortChangeButton = document.querySelector('.sort__change__btn'); // кнопка смены сортировки
const sortActionButton = document.querySelector('.sort__action__btn'); // кнопка сортировки
const kindInput = document.querySelector('.kind__input'); // поле с названием вида
const colorInput = document.querySelector('.color__input'); // поле с названием цвета
const weightInput = document.querySelector('.weight__input'); // поле с весом
const addActionButton = document.querySelector('.add__action__btn'); // кнопка добавления

// список фруктов в JSON формате
let fruitsJSON = `[
  {"kind": "Мангустин", "color": "фиолетовый", "weight": 13},
  {"kind": "Дуриан", "color": "зеленый", "weight": 35},
  {"kind": "Личи", "color": "розово-красный", "weight": 17},
  {"kind": "Карамбола", "color": "желтый", "weight": 28},
  {"kind": "Тамаринд", "color": "светло-коричневый", "weight": 22}
]`;

// преобразование JSON в объект JavaScript
let fruits = JSON.parse(fruitsJSON);

/*** ОТОБРАЖЕНИЕ ***/

// отрисовка карточек
const display = () => {
    // TODO: очищаем fruitsList от вложенных элементов,
    // чтобы заполнить актуальными данными из fruits

    for (let i = 0; i < fruits.length; i++) {
        let kind = fruits[i].kind;
        let color = fruits[i].color;
        let weight = fruits[i].weight;
        let loroDiv =
            (color === 'фиолетовый') ? 'fruit_violet' :
            (color === 'зеленый') ? 'fruit_green' :
            (color === 'розово-красный') ? 'fruit_carmazin' :
            (color === 'желтый') ? 'fruit_yellow' :
            (color === 'светло-коричневый') ? 'fruit_lightbrown' : '';
        let fruitItem = document.createElement('li');

        fruitItem.classList.add('fruit__item', loroDiv);
        fruitsList.appendChild(fruitItem);


        let fruitInfo = document.createElement('div');
        fruitInfo.classList.add('fruit__info');
        fruitItem.appendChild(fruitInfo);

        let indexElement = document.createElement('div');
        let indexText = document.createTextNode(`index: ${i}`);
        indexElement.appendChild(indexText);
        fruitInfo.appendChild(indexElement);

        let kindElement = document.createElement('div');
        let kindText = document.createTextNode(`kind: ${kind}`);
        kindElement.appendChild(kindText);
        fruitInfo.appendChild(kindElement);

        let colorElement = document.createElement('div');
        let colorText = document.createTextNode(`color: ${color}`);
        colorElement.appendChild(colorText);
        fruitInfo.appendChild(colorElement);

        let weightElement = document.createElement('div');
        let weightText = document.createTextNode(`weight: ${weight}`);
        weightElement.appendChild(weightText);
        fruitInfo.appendChild(weightElement);
    }
};

// первая отрисовка карточек
display();

/*** ПЕРЕМЕШИВАНИЕ ***/

// генерация случайного числа в заданном диапазоне
const getRandomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};
// перемешивание массива
const shuffleFruits = () => {
    let result = [];
    let i = 0;
    // ATTENTION: сейчас при клике вы запустите бесконечный цикл и браузер зависнет
    while (fruits.length > 0) {
        let random = getRandomInt(0, fruits.length - 1);
        let elem = fruits.splice(random, 1)[0];
        result.push(elem);
        i++;
    }
    fruits = result;
    console.log(result);
};

shuffleButton.addEventListener('click', () => {
    shuffleFruits();
    display();
});

/*** ФИЛЬТРАЦИЯ ***/

// фильтрация массива
const filterFruits = () => {
    fruits.filter((item) => {
        // TODO: допишите функцию
    });
};

filterButton.addEventListener('click', () => {
    filterFruits();
    display();
});

/*** СОРТИРОВКА ***/

let sortKind = 'bubbleSort'; // инициализация состояния вида сортировки
let sortTime = '-'; // инициализация состояния времени сортировки

const comparationColor = (a, b) => {
    // TODO: допишите функцию сравнения двух элементов по цвету
};

const sortAPI = {
    bubbleSort(arr, comparation) {
        // TODO: допишите функцию сортировки пузырьком
    },

    quickSort(arr, comparation) {
        // TODO: допишите функцию быстрой сортировки
    },

    // выполняет сортировку и производит замер времени
    startSort(sort, arr, comparation) {
        const start = new Date().getTime();
        sort(arr, comparation);
        const end = new Date().getTime();
        sortTime = `${end - start} ms`;
    },
};

// инициализация полей
sortKindLabel.textContent = sortKind;
sortTimeLabel.textContent = sortTime;

sortChangeButton.addEventListener('click', () => {
    // TODO: переключать значение sortKind между 'bubbleSort' / 'quickSort'
});

sortActionButton.addEventListener('click', () => {
    // TODO: вывести в sortTimeLabel значение 'sorting...'
    const sort = sortAPI[sortKind];
    sortAPI.startSort(sort, fruits, comparationColor);
    display();
    // TODO: вывести в sortTimeLabel значение sortTime
});

/*** ДОБАВИТЬ ФРУКТ ***/

addActionButton.addEventListener('click', () => {
    // TODO: создание и добавление нового фрукта в массив fruits
    // необходимые значения берем из kindInput, colorInput, weightInput
    display();
});