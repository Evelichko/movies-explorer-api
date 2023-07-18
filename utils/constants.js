const RESPONSE_MESSAGES = {
  201: {
    users: {
      registrationSuccess: 'Пользователь успешно зарегистрирован на сайте',
    }
  },

  400: {
    users: {
      cast: 'Передан неверный id пользователя',
      passwordRequirements: 'Пароль должен содержать не менее 8 символов, включая 1 букву латиницы, цифру и спецсимвол',
      validationRegistration: 'Переданы неверные данные при регистрации пользователя',
      validationUpdate: 'Переданы неверные данные при обновлении данных профиля',
    },

    movies: {
      validationSaving: 'Переданы неверные данные при сохранении фильма в личном кабинете пользователя',
    },
  },

  401: {
    users: {
      unathorized: 'Вы ввели неправильный пароль',
    },
  },

  403: {
    movies: {
      accessRightsDeletion: 'Для удаления фильма нет прав доступа',
    },
  },

  404: {
    users: {
      idNotFound: 'Пользователь с таким id не найден',
      emailRegistration: 'Пользователь с такой email не зарегистрирован',
    },

    movies: {
      userIdNotFound: 'Данные о фильмах пользователя с указанным id не найдены',
      dataNotFound: 'Данные по указанному id не найдены',
    },
  },

  409: {
    users: {
      emailDuplication: 'Пользователь с таким email уже существует',
    },
  },
};

module.exports = RESPONSE_MESSAGES;
