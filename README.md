# Hugo Test Case

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

## Список источников

* [Документация по Hugo](https://gohugo.io/)
* [Используемая CMS](https://decapcms.org/)
* [Система контроля версий GitHub](https://github.com/)
* [Деплой проекта Netlify](https://app.netlify.com/)
* [Инструкция по настройке Decap Server](https://decapcms.org/docs/working-with-a-local-git-repository/)
