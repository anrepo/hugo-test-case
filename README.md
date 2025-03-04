# Hugo Test Case

## Запуск в режиме разработки

> `hugo server -D -E -F`

или можно воспользоваться run.bat в cmd (Windows)

> `run`

## Сборка проекта

> `hugo`

## Запуск локального сервера CMS

Для работы с локальным git-репозиторием используем `decap-server`.

```
npx decap-server
```

Порт локального сервера указан в файле `.env`

```
PORT=8082
```

http://localhost:<port>/admin

## Список источников

* [Документация по Hugo](https://gohugo.io/)
* [Используемая CMS](https://decapcms.org/)
* [Система контроля версий GitHub](https://github.com/)
* [Деплой проекта Netlify](https://app.netlify.com/)
* [Инструкция по настройке Decap Server](https://decapcms.org/docs/working-with-a-local-git-repository/)
