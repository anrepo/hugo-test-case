# Для разработчиков

В проекте используется:

- Scss
- Javascript (модули, IIFE)
- jQuery
- decap-server - для локальной работы с CMS

Без пост обработки стилей и скриптов!

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

Если произойдет конфликт порта сервера с другим приложением на ПК его можно изменить в файле `.env`

```
PORT=8082
```