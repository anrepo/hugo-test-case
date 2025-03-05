# Hugo Test Case

Проект выполнен на связке Hugo + GitHub + Netlify.

* Репозиторий (исходники): [GitHub](https://github.com/anrepo/hugo-test-case)

## Инструкции

* [Как авторизоваться?](authorized.md)
* [Добавление контента](how-create-new-post.md)

## Запуск в режиме разработки

> `hugo server -w -D -E -F`

или можно воспользоваться run.bat в cmd (Windows)

> `run`

## Сборка проекта

> `hugo`

## Запуск локального сервера CMS

Для работы с локальным git-репозиторием используем прокси-сервер `decap-server`.

```
npx decap-server
```

Если произойдет конфликт сервера с другим приложением на ПК его можно изменить в файле `.env`

```
PORT=8082
```

## Доступ в CMS

Доступ в админку предоставляется по инвайту на почту. После чего нужно подтвердить почту пройдя по ссылке. И ввести желаемый пароль.

Для входа в CMS дописываем в конце адреса `/admin/`

```
https://perx-hugo-test-case.netlify.app/admin/
```

Для демонстрации создан временный аккаунт.

* mail: dev-tester@list.ru
* password: 123test321

## Список источников

* [Документация по Hugo](https://gohugo.io/)
* [Используемая CMS](https://decapcms.org/)
* [Система контроля версий GitHub](https://github.com/)
* [Деплой проекта Netlify](https://app.netlify.com/)
* [Инструкция по настройке Decap Server](https://decapcms.org/docs/working-with-a-local-git-repository/)
