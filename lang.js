const langArr = {
  hero: {
    title: {
      ru: "Лесневский Сергей",
      en: "Lesnevsky Sergey",
    },
  },
  profile: {
    title: {
      ru: "Профиль",
      en: "Profile",
    },
    desc: {
      ru: `Участвую в хакатонах и онлайн конкурсах по веб-разработке.<br> 
      Постоянно обучаюсь новым технологиям и улучшению существующих навыков.<br> 
      Свободное время посвящаю изучению современных тенденций в веб-разработке и участию в open-source проектах.<br> 
      Ссылки на проекты можно найти на моем GitHub: <a href="https://github.com/Sergey-Lesnevskiy">https://github.com/Sergey-Lesnevskiy</a>`,
      en: ` I participate in hackathons and online web development competitions.<br> 
      I am constantly learning new technologies and improving existing skills.<br> 
      I devote my free time to studying modern trends in web development and participating in open-source projects.<br> 
      Links to projects can be found on my GitHub: <a href="https://github.com/Sergey-Lesnevskiy">https://github.com/Sergey-Lesnevskiy</a> .`,
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
      ru: "Курсы QAQ в компании Senla(Java)",
      en: "Courses Automated testing in the company Senla(Java)",
    },
    bgam: {
      ru: "2009 Высшее образование БГАМ",
      en: "2020 I graduated from the BGAM",
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
    pixel1: {
      ru: `Разработал одностраничный адаптивный сайт по макету из Figma с точностью до
  пикселя.`,
      en: `Developed a one-page adaptive website based on Figma layout with accuracy up to
  pixel.`
    },
    fake: {
      ru: `Реализовал 'fake' запросы на сервер для демонстрации взаимодействия с API.`,
      en: `Implemented ‘fake’ requests to the server to demonstrate interaction with the API.`
    },
    stack: {
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
    oldData: {
      ru: `Редактировал корректное отображение данных для сыгранных турниров.`,
      en: `Edited the correct data display for tournaments played.`
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

    study: {
      ru: `Учебные проекты:`,
      en: `Study Projects:`
    },
    database: {
      ru: `В рамках финального проекта курсов JS отвечал за работу с базой данных и backend.`,
      en: `As part of the final course project, JS was responsible for the database and backend.`
    },
    uniqueColor: {
      ru: `Реализовал авторизацию и аутентификация пользователя.`,
      en: `Implemented rendering habits and adding them with a unique color for each.`
    },
    saveData: {
      ru: `Обеспечил сохранение данных и их восстановление при перезагрузке страницы.`,
      en: `Ensured that data is saved and restored when the page is reloaded.`
    },
    finaleProject: {
      ru: `Финальный проект курса по React, включающий работу с GraphQL.`,
      en: `Final project for a course on React, including work with GraphQL.`
    },
    GraphQLOptimization: {
      ru: `Учебные проекты:`,
      en: `Integrated GraphQL to optimise server and client interaction.`
    },
    reactApi: {
      ru: `Учебный проект на React, в котором была реализована работа с API.`,
      en: `A React tutorial project that involved working with an API.`
    },
    useForm: {
      ru: `Обеспечил работу формы через RefObject и useForm, а также серверный рендеринг (SSR).`,
      en: `Study Projects:`
    },
    externalServices: {
      ru: `Настроил взаимодействие с внешними сервисами и обработку данных форм.`,
      en: `Configured interaction with external services and processing of form data.`
    },
  },
  footer: {
    googleDocx: {
      ru: `Ссылка СV на docs.google.com:`,
      en: `Link to docs.google.com:`
    },
    saveDocx: {
      ru: `Скачать CV в формате docx:`,
      en: `Download the CV in docx format:`
    }
  }
};
