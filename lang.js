const langArr = {
  hero: {
    title: {
      ru: "Лесневский Сергей Викторович",
      en: "Lesnevsky Sergey",
    },
  },
  target: {
    title: {
      ru: "Цель",
      en: "Goal",
    },
    desc: {
      ru: `Начать карьеру разработчика ПО в Вашей компании, стать частью команды разработки.
      Приносить как можно больше пользы в компании, расширить персональный опыт и улучшить профессиональные навыки.`,
      en: `Start a software developer career in your company, become part of the development team,
      bring as much benefit to the company as possible, expand personal experience and improve professional
      skills.`,
    },
  },
  tools: {
    title: {
      ru: "Инструменты и технологии",
      en: "Tools and technologies",
    },
    html: {
      ru: `-HTML (9-10)`,
      en: `-HTML (9-10)`,
    },
    css: {
      ru: `-CSS (8-10) (знаю flex/grid(предпочитаю flex))`,
      en: `-CSS (8-10) (know flex/grid(prefer flex))`,
    },
    js: {
      ru: `-JS (9-10) (работа с запросами, промисами, событиями, spread и т.д.)`,
      en: `JS (9-10) (working with requests, promises, events, spread, etc.)`,
    },
    ts: {
      ru: `- TS (7-10) (создание интерфейсов, работа с enum и т.д.)`,
      en: `- TS (7-10) (creating interface, working with enum etc.)`,
    },
    react: {
      ru: `- React (7 -10) (Разработка на классах/функциях)`,
      en: `- React (7 -10) (development on classes/functions)`,
    },
    git: {
      ru: `- GIT (7-10) (создаю и перемещаюсь по веткам, работа с github)`,
      en: `- GIT (7-10) (creating and moving through branches, working with github)`,
    },
  },
  myself: {
    title: {
      ru: "О себе",
      en: "About me",
    },
    desc: {
      ru: `Большой опыт работы, в том числе и на руководящей позиции (заведующий отделением), сформировали такие навыки,
      как работа в команде, работа в режиме повышенной нагрузки и в условиях
      сжатых сроков.`,
      en: `Extensive work experience, including in a leadership position (head of the department of folk instruments)
      , has formed skills such as teamwork, working in a high-load mode and under
      tight deadlines.`,
    },
  },
  education: {
    title: {
      ru: "Образование",
      en: "Education and courses: ",
    },
    senla: {
      ru: "- Курсы QAQ в компании Senla(Java)",
      en: "- Courses Automated testing in the company Senla(Java)",
    },
    bgam: {
      ru: "- Высшее образование БГАМ",
      en: "- I graduated from the BGAM",
    },
  },
  experience: {
    title: {
      ru: "Опыт работы",
      en: "My experience",
    },
    redRover: {
      ru: "- 2024 - настоящее время веду уроки frontend в онлайн школе redRover",
      en: "- 2024 - current time redRover (teacher front-end)",
    },
    freelance: {
      ru: "- 2022 freelance разработал сайт для музыкальной школы на (wordpress)",
      en: "- 2022 freelance developed a website for a music school №6 (wordpress)",
    },
    FIFA: {
      ru: `- поддерживаю, вношу корректировки, добавляю новый функционала в проект по созданию турниров FIFA
    (React TS)(freelance)`,
      en: `- participated in making adjustments, adding new functionality to the tournament creation project FIFA
    (React TS)(freelance)`,
    },
    teacher: {
      ru: `- 2008 - настоящее время ДМШИ№6 г. Минск (преподаватель)`,
      en: `- 2008 - current time DMSHI№6 (teacher)`,
    },
    accompanist: {
      ru: "- 2005 - 2009 МГДДиМ г. Минск (аккомпаниатор)",
      en: "- 2005 - 2009 MGDDM (accompanist)",
    },
  },
  progects: {
    title: {
      ru: "Мои проекты: ",
      en: " My projects: ",
    },
    dmshi6: {
      ru: `Сайт для музыкальной школы.
  1) Я познакомился с виртуальным защищенным хостингом BeCloud и перенес сайт на сервер.
  2) Получил понимание работы wordpress.`,
      en: " Website for a music school (wordpress)",
    },
    momentum: {
      ru: "Работа с запросами к серверу и вывод данных на экран, минимальный интерактив с пользователем, создание кастомного аудиоплеерa",
      en: "Working with requests to the server and displaying data on the screen, minimal interaction with the user, creating a custom audio player",
    },
    keyboard: {
      ru: "Работа с событиями клавиатуры (JS)",
      en: "Working with keyboard events (JS)",
    },
    zoo: {
      ru: "Двухстраничный адаптивный сайт по макету из Figma (pixel perfect) реализация каруселей, бургер-меню, попап и т.д.(JS)",
      en:`Two-page adaptive website based on the layout of Figma (pixel perfect) implementation of carousels, burger
      menu,
      popup, etc. (JS)`,
    },
    portfolio: {
      ru: "Одностраничный адаптивный сайт по макету из Figma (pixel perfect) бургер-меню, валидацию формы, 'fake' запрос на сервер (JS)",
      en: `One-page adaptive website based on the layout of Figma (pixel perfect) burger menu, validation form, 'fake' server requests (JS)`,
    },
    fifteenth: {
      ru: "Копия игры в пятнашки, реализация на Canvas(JS)",
      en: "A copy of the tag game, implementation on Canvas(JS)",
    },
    store: {
      ru: `Работа представляет собой онлайн магазин(SPA), мной былa выполнена вся логика по работе с товаром (поиск,
    сортировка, добавление/удаление в корзину...), роутинг(TS)`,
      en: `The work is an online store (SPA), I have done all the logic for working with the product
      (search,
      sorting, adding/removing to the trash...), routing(TS)`,
    },
    habit: {
      ru: `Финальный проект курсов JS, в нем я отвечал за работу с базой данных и
      backend, также рендеринг habit
      и
      добавления для каждого, уникального цвета.(TS)`,
      en: `The final project of the courses, in which I was responsible for working with the database and backend,
      as well as rendering habit and
      adding for each unique color.(TS)`,
    },
    graph: {
      ru: `Финальный проект курса по React. GraphiQL — это инструмент с открытым
      исходным кодом Однако наше
      приложение также будет включать возможности авторизации/аутентификации, чтобы предоставить доступ к
      инструменту только авторизованным пользователям. (React)`,
      en: `The final draft of the React course. GraphiQL is an open source tool, however, our
      application will also include authorization/authentication capabilities to grant access to
      the tool only to authorized users. (React)`,
    },
    form: {
      ru: `Учебный проект на React. В нём реализована работа с API, с формой через RefObject и useForm, SSR`,
      en: "Educational project in React. It implements work with the API, with the form RefObject and useForm, SSR",
    },
  },
};
