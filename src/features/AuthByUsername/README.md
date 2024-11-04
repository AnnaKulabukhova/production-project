## Фича для авторизации по имени пользователя

#### Описание:

Фича LoginForm предоставляет форму для входа в систему, позволяя пользователю ввести имя пользователя и пароль и инициировать процесс авторизации. Данные формы сохраняются в Redux. Компонент использует асинхронный thunk  для отправки данных авторизации на сервер и обновления состояния пользователя при успешном входе.

#### Public api

- components  
`LoginModal`- компонент, содержащий форму для входа в систему  

- types   
`LoginSchema`- тип, описывающий состояние формы для входа