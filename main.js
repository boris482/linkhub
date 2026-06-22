// Скопійований код з минулого уроку
document.addEventListener('DOMContentLoaded', () => {
    
  // 1. БАЗА ДАНИХ (Виправлено одруки в назвах функцій)
  // Тема: КОСМОС. 3 рівні важкості по 12 питань = 36 питань!
  const questions = {
    1: [
      {
        question: "Яка планета в сонячній системі сама велика?",
        answers: ["Марс", "Венера", "Юпітер", "Сатурн"],
        correct: 2
      },
      {
        question: "Яка планета знаходиться найближче до Сонця?",
        answers: ["Меркурій", "Земля", "Нептун", "Плутон"],
        correct: 0
      },
      {
        question: "Яка планета відома як 'Червона планета'?",
        answers: ["Уран", "Марс", "Юпітер", "Венера"],
        correct: 1
      },
      {
        question: "Яка планета має найбільші та найяскравіші кільця?",
        answers: ["Сатурн", "Нептун", "Земля", "Марс"],
        correct: 0
      },
      {
        question: "Як називається природний супутник Землі?",
        answers: ["Фобос", "Титан", "Місяць", "Європа"],
        correct: 2
      },
      {
        question: "Яка зірка знаходиться в центрі нашої системи?",
        answers: ["Полярна", "Сонце", "Сіріус", "Бетельгейзе"],
        correct: 1
      },
      {
        question: "Хто був першою людиною, яка полетіла в космос?",
        answers: ["Ніл Армстронг", "Юрій Гагарін", "Базз Олдрін", "Ілон Маск"],
        correct: 1
      },
      {
        question: "Яка планета є нашою домівкою?",
        answers: ["Марс", "Земля", "Венера", "Сатурн"],
        correct: 1
      },
      {
        question: "Як називається одяг космонавта для виходу у відкритий космос?",
        answers: ["Комбінезон", "Гідрокостюм", "Скафандр", "Бронежилет"],
        correct: 2
      },
      {
        question: "Якого кольору Сонце насправді (якщо дивитися з космосу)?",
        answers: ["Жовтого", "Червоного", "Білого", "Помаранчевого"],
        correct: 2
      },
      {
        question: "Яка планета Сонячної системи є найяскравішою на нічному небі?",
        answers: ["Венера", "Марс", "Юпітер", "Меркурій"],
        correct: 0
      },
      {
        question: "Як називається спеціальний пристрій для спостереження за зірками?",
        answers: ["Мікроскоп", "Бінокль", "Телескоп", "Перископ"],
        correct: 2
      }
    ],
    2: [
      {
        question: "Яка планета раніше була в сонячній системі (а тепер карликова)?",
        answers: ["Церера", "Плутон", "Еріда", "Макемаке"],
        correct: 1
      },
      {
        question: "У якої планети більше всього супутників?",
        answers: ["Марс", "Сатурн", "Земля", "Уран"],
        correct: 1
      },
      {
        question: "Якою за рахунком є наша планета Земля від Сонця?",
        answers: ["Перша", "Друга", "Третя", "Четверта"],
        correct: 2
      },
      {
        question: "Яка планета сонячної системи є найхолоднішою?",
        answers: ["Уран", "Нептун", "Марс", "Сатурн"],
        correct: 0
      },
      {
        question: "Яка планета обертається навколо Сонця 'лежачи на боці'?",
        answers: ["Юпітер", "Уран", "Венера", "Меркурій"],
        correct: 1
      },
      {
        question: "Як називається наша галактика?",
        answers: ["Андромеда", "Чумацький Шлях", "Магелланова Хмара", "Боде"],
        correct: 1
      },
      {
        question: "Хто був першою людиною, яка ступила на поверхню Місяця?",
        answers: ["Юрій Гагарін", "Ніл Армстронг", "Олексій Леонов", "Джон Гленн"],
        correct: 1
      },
      {
        question: "Яка планета Сонячної системи є найгарячішою?",
        answers: ["Меркурій", "Венера", "Юпітер", "Марс"],
        correct: 1
      },
      {
        question: "Скільки планет входить до складу Сонячної системи?",
        answers: ["7", "8", "9", "10"],
        correct: 1
      },
      {
        question: "Як називається найбільший каньйон у Сонячній системі?",
        answers: ["Великий Каньйон", "Долина Марінера (Марс)", "Рівнина Еллада", "Каньйон Рифту"],
        correct: 1
      },
      {
        question: "Який космічний об'єкт має таку сильну гравітацію, що навіть світло не може з нього вирватися?",
        answers: ["Білий карлик", "Нейтронна зірка", "Чорна діра", "Астероїд"],
        correct: 2
      },
      {
        question: "Скільки часу потрібно сонячному світлу, щоб дійти до Землі?",
        answers: ["1 секунда", "8 хвилин", "1 година", "1 доба"],
        correct: 1
      }
    ],
    3: [
      {
        question: "Яка середня температура на поверхні Венери?",
        answers: ["близько +100°C", "близько +460°C", "близько 0°C", "близько -150°C"],
        correct: 1
      },
      {
        question: "Скільки триває один рік на Меркурії (оберт навколо Сонця)?",
        answers: ["88 земних днів", "365 земних днів", "12 земних років", "30 земних днів"],
        correct: 0
      },
      {
        question: "Який космічний апарат першим вийшов за межі Сонячної системи?",
        answers: ["Аполлон-11", "Хаббл", "Вояджер-1", "К'юріосіті"],
        correct: 2
      },
      {
        question: "Який найбільший вулкан у Сонячній системі і де він знаходиться?",
        answers: ["Олімп на Марсі", "Етна на Землі", "Мауна-Кеа на Землі", "Маат на Венері"],
        correct: 0
      },
      {
        question: "З чого переважно складаються хмари на Венері?",
        answers: ["З води", "З рідкого метану", "Зі сірчаної кислоти", "З вуглекислого газу"],
        correct: 2
      },
      {
        question: "Яка планета має найкоротшу добу (найшвидше обертається навколо осі)?",
        answers: ["Земля", "Юпітер", "Марс", "Меркурій"],
        correct: 1
      },
      {
        question: "Як називається межа чорної діри, за якою жодна подія не може вплинути на зовнішнього спостерігача?",
        answers: ["Точка сингулярності", "Ергосфера", "Горизонт подій", "Гравітаційний радіус"],
        correct: 2
      },
      {
        question: "Яка галактика є найближчою великою сусідкою нашого Чумацького Шляху?",
        answers: ["Галактика Андромеди", "Велика Магелланова Хмара", "Галактика Трикутника", "Водоворот"],
        correct: 0
      },
      {
        question: "Яка зірка є найближчою до нашої Сонячної системи?",
        answers: ["Сіріус", "Проксима Центавра", "Полярна зірка", "Вега"],
        correct: 1
      },
      {
        question: "Яке космічне тіло спричинило утворення кратера Чиксулуб, що призвело до вимирання динозаврів?",
        answers: ["Комета", "Астероїд", "Уламок Місяця", "Протопланета"],
        correct: 1
      },
      {
        question: "Яка речовина, згідно з теоріями вчених, складає близько 27% Всесвіту, але її не можна побачити?",
        answers: ["Космічний пил", "Темна матерія", "Антиматерія", "Водень"],
        correct: 1
      },
      {
        question: "В якому році було здійснено перший запуск штучного супутника Землі?",
        answers: ["1957 рік", "1961 рік", "1969 рік", "1975 рік"],
        correct: 0
      }
    ]
  };

  // Знаходження елементів (Виправлено ID та селектори під твій HTML!)
  const startScreen = document.querySelector('#start-screen');
  const quizScreen = document.querySelector('#quiz-screen');
  const resultScreen = document.querySelector('#result-screen');

  const startBtn = document.querySelector('#start-btn');
  const restartBtn = document.querySelector('#restart-btn');

  const resultText = document.querySelector('#result-text');
  const questionText = document.querySelector('#question-text');
  const answersContainer = document.querySelector('#answers-container');
  const timerDisplay = document.querySelector('#timer');
  const scoreDisplay = document.querySelector('#score-display');
  
  let questionIndex = 0;
  let score = 0;
  let timer = 15;
  let interval;

  // Змінні для вибору поточного рівня та збереження відфільтрованих питань
  let currentLevel = '1';
  let filteredQuestions = [];

  // ДОДАНО: Функція для правильного старту та керування екранами (CSS класи)
  function startGame() {
    questionIndex = 0;
    score = 0;
    if (scoreDisplay) scoreDisplay.innerText = `Бали: ${score}`;
    
    // Віконце вибору рівня перед стартом
    let levelChoice = prompt("Обери рівень важкості (1, 2, 3):", "1");
    if (levelChoice === '1' || levelChoice === '2' || levelChoice === '3') {
        currentLevel = levelChoice;
    } else {
        currentLevel = '1';
    }

    // Беремо масив питань саме для вибраного рівня
    filteredQuestions = questions[currentLevel];

    startScreen.classList.add('hide');
    resultScreen.classList.add('hide');
    quizScreen.classList.remove('hide');

    showQuestions(filteredQuestions[questionIndex]);
  }

  function showQuestions(ask) {
    clearInterval(interval); // Скидаємо попередній інтервал таймера
    startTimer();

    answersContainer.innerHTML = '';
    questionText.innerHTML = ask.question;

    for (let i = 0; i < ask.answers.length; i++) {
        const button = document.createElement('button');
        button.innerHTML = ask.answers[i];
        button.classList.add('answer-btn');

        // Виправлено: передаємо саму кнопку (e.target) та її індекс (i)
        button.addEventListener('click', (e) => checkAnswer(e.target, i));
        answersContainer.appendChild(button);
    }
  }

  function nextQuestion() {
    questionIndex++;
    if (questionIndex < filteredQuestions.length) {
        showQuestions(filteredQuestions[questionIndex]);
    } else {
        showResult(); // Перехід до фіналу
    }
  }

  function checkAnswer(button, index) {
    clearInterval(interval); // Зупиняємо таймер, бо відповідь уже дали
    
    
    // Виправлено: порівнюємо index з правильним значенням
    if (index === filteredQuestions[questionIndex].correct) {
        score++;
        button.classList.add('correct');
        scoreDisplay.innerText = `Бали: ${score}`;
    } else {
        button.classList.add('wrong');
    }

    // Блокуємо всі кнопки після вибору, щоб не клікали двічі
    document.querySelectorAll('.answer-btn').forEach(btn => {
        btn.disabled = true;
    });

    // Виправлено: Одноразовий setTimeout замість циклічного setInterval
    setTimeout(nextQuestion, 1000);
  }

  function startTimer() {
    timer = 15;
    timerDisplay.innerText = `Час: ${timer}`;
    interval = setInterval(() => {
        timer--;
        timerDisplay.innerText = `Час: ${timer}`;
        if (timer <= 0) {
            clearInterval(interval);
            nextQuestion(); // Якщо час вийшов — автоматично йдемо далі
        }
    }, 1000);
  }

  // ДОДАНО: Функція відображення результату
  function showResult() {
    clearInterval(interval);
    quizScreen.classList.add('hide');
    resultScreen.classList.remove('hide'); // Виправлено: видаляємо клас hide, щоб показати результат
    resultText.innerHTML = `Тест завершено! Твій результат: ${score} з ${filteredQuestions.length}`;
  }

  // Слухачі подій на кнопках (із захистом від помилок)
  if (startBtn) startBtn.addEventListener('click', startGame);
  if (restartBtn) restartBtn.addEventListener('click', startGame);

});