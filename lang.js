const langArr = {
  hero: {
    title: {
      ru: "Лесневский Сергей",
      en: "Lesnevsky Sergey",
    },
  },
  profile: {
    goal: {
      ru: "Цель",
      en: "Goal",
    },
    title: {
      ru: "Профиль",
      en: "Profile",
    },
    desc: {
      ru: `
      Frontend разработчик, опыт создания веб-приложений 1 год.<br>
      Открыт к любым предложениям (работа в штате, по договору подряда, самозанятость). <br>
      Рассмотрю вариант стажировки.<br>
      Участвую в хакатонах и онлайн конкурсах по веб-разработке.<br> 
      Постоянно обучаюсь новым технологиям и улучшению существующих навыков.<br> 
      Свободное время посвящаю изучению современных тенденций в веб-разработке и участию в open-source проектах.<br> 
      GitHub: <a href="https://github.com/Sergey-Lesnevskiy">https://github.com/Sergey-Lesnevskiy</a>`,
      en: `
      Frontend developer, experience in creating web applications for 1 year. <br>
      Open to any offers (work in the state, on a contractual basis, self-employment). <br>
      I will consider an internship. <br>
      I participate in hackathons and online web development competitions.<br> 
      I am constantly learning new technologies and improving existing skills.<br> 
      I devote my free time to studying modern trends in web development and participating in open-source projects.<br> 
      GitHub: <a href="https://github.com/Sergey-Lesnevskiy">https://github.com/Sergey-Lesnevskiy</a> .`,
    },
  },
  certificates: {
    title: {
      ru: "Сертификаты",
      en: "Certificates",
    },
  },
  skills: {
    title: {
      ru: "Навыки",
      en: "Skills",
    },
    API: {
      ru: `Работа с API запросами, GraphQL`,
      en: `Work with API request, GraphQL`,
    },
    data: {
      ru: `Работа с базами данных`,
      en: `Work with database`,
    },
    adaptive: {
      ru: `Адаптивная и кросс-браузерная верстка`,
      en: `Adaptive and cross-browser layout`,
    },
  },

  education: {
    title: {
      ru: "Образование",
      en: "Education: ",
    },
    senla: {
      ru: "2020 Курсы QAQ в компании Senla(Java)",
      en: "2020 Courses Automated testing in the company Senla(Java)",
    },
    bgam: {
      ru: "2009 Высшее образование БГАМ",
      en: "2009 I graduated from the BGAM",
    },
  },
  experience: {
    title: {
      ru: "Опыт работы",
      en: "Work Experience",
    },
    pixel: {
      ru: `Создал двухстраничный адаптивный сайт по макету из Figma с точностью до пикселя
      (pixel perfect).`,
      en: `I created a two-page adaptive website based on a pixel-perfect layout from Figma
      (pixel perfect).`,
    },
    burger: {
      ru: `Реализовал функционал каруселей, бургер-меню и попапов с использованием
      JavaScript.`,
      en: `Implemented carousel, burger menu and popup functionality using
      JavaScript.`,
    },
    stack: {
      ru: `Стек:`,
      en: `Stack:`,
    },

    browser: {
      ru: `Обеспечил кросс-браузерную совместимость и адаптивность сайта.`,
      en: `Ensured cross-browser compatibility and adaptability of the site.`,
    },
    trainee: {
      ru: "стажировка",
      en: "trainee",
    },
    freelance: {
      ru: "Фриланс",
      en: "Freelance",
    },
    dmsh: {
      ru: "Сайт для музыкальной школы.",
      en: "Website for a music school.",
    },
    beCloud: {
      ru: `Изучил документацию по работе с виртуальным защищенным хостингом BeCloud и успешно перенес сайт на
      сервер.`,
      en: "Studied the BeCloud secure shared hosting documentation and successfully migrated the site to the server.",
    },
    wordPress: {
      ru: `Изучил документацию для работы с WordPress(установку, настройку и
        администрирование сайта).`,
      en: `Studied the documentation for working with WordPress(installing, configuring and administering the site).`,
    },
    optimized: {
      ru: `Оптимизировал производительность сайта и обеспечил его бесперебойную работу.`,
      en: `Optimized the performance of the website and ensured it ran smoothly.`,
    },
    PHP: {
      ru: `Добавлял компоненты на страницы с помощью PHP.`,
      en: `I added components to the pages with the help of PHP`,
    },
    stackD: {
      ru: `Стек:`,
      en: `Stack:`,
    },
    momentumServer: {
      ru: `Работал с серверными запросами и отображением данных на экране.`,
      en: `Worked with server requests and displaying data on the screen.`,
    },
    momentumInteractivity: {
      ru: `Создал минимальный интерактив с пользователем, обеспечив удобство использования
      приложения.`,
      en: `Created minimal interactivity with the user, ensuring the usability of the
      of the application.`,
    },
    momentumAudio: {
      ru: `Разработал кастомный аудиоплеер, интегрировав его в пользовательский интерфейс.`,
      en: `Developed a custom audio player, integrating it into the UI`,
    },
    stackMom: {
      ru: `Стек:`,
      en: `Stack:`,
    },
    pixel1: {
      ru: `Разработал одностраничный адаптивный сайт по макету из Figma с точностью до
  пикселя.`,
      en: `Developed a one-page adaptive website based on Figma layout with accuracy up to
  pixel.`
    },
    burgerP: {
      ru: `Реализовал бургер-меню и валидацию формы.`,
      en: `Implemented burger-menu and form validation`,
    },
    fake: {
      ru: `Реализовал 'fake' запросы на сервер для демонстрации взаимодействия с API.`,
      en: `Implemented ‘fake’ requests to the server to demonstrate interaction with the API.`
    },
    stackPort: {
      ru: `Стек:`,
      en: `Stack:`,
    },
    copy: {
      ru: `Создал копию игры в пятнашки, используя Canvas и JavaScript.`,
      en: `Created a copy of the game of spots using Canvas and JavaScript.`
    },
    animation: {
      ru: `Обеспечил интерактивное взаимодействие с пользователем и плавную анимацию.`,
      en: `Provided interactive user interaction and smooth animations.`
    },
    interactivity: {
      ru: `Создал минимальный интерактив с пользователем, обеспечив удобство использования приложения.`,
      en: `Created minimal interactivity with the user, ensuring the usability of the application.`
    },
    stackFif: {
      ru: `Стек:`,
      en: `Stack:`,
    },
    fifa: {
      ru: `Онлайн приложение для проведения турниров по FIFA. Игроки соревнуются между собой победами в матчах FIFA.`,
      en: `Online application for FIFA tournaments. Players compete by winning FIFA matches.`
    },
    admin: {
      ru: `Добавил раздел турниры в админ-панель.`,
      en: `Added a tournaments section to the admin panel.`
    },
    conditions: {
      ru: `Добавил разделы в админ-панели для изменения условий турнира.`,
      en: `Added sections in the admin panel for changing tournament conditions.`
    },
    ui: {
      ru: `Редактировал UI карточек игроков.`,
      en: `Edited the UI of the player cards.`
    },
    valid: {
      ru: `Добавил валидацию данных при смене пароля пользователем.`,
      en: `Added data validation when user changes password.`
    },
    stackFiFa: {
      ru: `Стек:`,
      en: `Stack:`,
    },
    oldData: {
      ru: `Редактировал отображение данных для сыгранных турниров.`,
      en: `Edited the data display for tournaments played.`
    },
    logic: {
      ru: `Разработал логическую часть онлайн-магазина (SPA) с использованием TypeScript.`,
      en: `Developed the logical part of an online shop (SPA) using TypeScript.`
    },
    sort: {
      ru: `Реализовал поиск, сортировку, добавление и удаление товаров в корзину.`,
      en: `Implemented searching, sorting, adding and removing items to the basket.`
    },
    routS: {
      ru: `Настроил роутинг для обеспечения плавной навигации по приложению.`,
      en: `Configured routing to ensure smooth navigation through the application.`
    },
    stackOnline: {
      ru: `Стек:`,
      en: `Stack:`,
    },
    study: {
      ru: `Учебные проекты:`,
      en: `Study Projects:`
    },
    database: {
      ru: `В рамках финального проекта курсов JS отвечал за работу с базой данных и backend.`,
      en: `As part of the final course project, JS was responsible for the database and backend.`
    },
    uniqueColor: {
      ru: `Реализовал рендеринг habits и их добавление с уникальным цветом для каждого.`,
      en: `Implemented rendering habits and adding them with a unique color for each.`
    },
    authorisationH: {
      ru: `Реализовал авторизацию и аутентификация
            пользователя.`,
      en: `Implemented user authorization and authentication.`
    },
    authorisationG: {
      ru: `Реализовал авторизацию и аутентификация
            пользователя.`,
      en: `Implemented user authorization and authentication.`
    },
    saveData: {
      ru: `Обеспечил сохранение данных и их восстановление при перезагрузке страницы.`,
      en: `Ensured that data is saved and restored when the page is reloaded.`
    },
    stackHabit: {
      ru: `Стек:`,
      en: `Stack:`,
    },
    finaleProject: {
      ru: `Финальный проект курса по React, включающий работу с GraphQL.`,
      en: `Final project for a course on React, including work with GraphQL.`
    },
    GraphQLOptimization: {
      ru: `Учебные проекты:`,
      en: `Integrated GraphQL to optimise server and client interaction.`
    },
    stackGraphQL: {
      ru: `Стек:`,
      en: `Stack:`,
    },
    stackForm: {
      ru: `Стек:`,
      en: `Stack:`,
    },
    reactApi: {
      ru: `Учебный проект на React, в котором была реализована работа с API.`,
      en: `A React tutorial project that involved working with an API.`
    },
    useForm: {
      ru: `Обеспечил работу формы через useRef и useForm, а также серверный рендеринг (SSR).`,
      en: `Ensured the operation of the form through RefObject and useForm, as well as server rendering (SSR)`
    },
    externalServices: {
      ru: `Настроил взаимодействие с внешними сервисами и обработку данных форм.`,
      en: `Configured interaction with external services and processing of form data.`
    },
  },
  footer: {
    googleDocx: {
      ru: `Ссылка на CV: &nbsp`,
      en: `Link to CV: &nbsp`
    },
    saveDocx: {
      ru: `Скачать CV (docx): &nbsp`,
      en: `Download the CV (docx): &nbsp`
    }
  }
};
