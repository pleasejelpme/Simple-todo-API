# TO DO API (v1)

Simple ToDo API made with Django Rest Framework and implementation of JWT for authentication

## Table of Contents

- [General Info](#general-info)
- [Technologies Used](#tecnologies-used)
- [Setup](#setup)

## General Info

This project is a simple to do API developed with Django Rest Framework as a practice for me
to introduce myself into the development of APIs with DRF.

It has a User Authentication funcionality implemented with JWT, and the ability, for the authenticated
users, to make the basic CRUD funcionalities.

## Tecnologies Used

- [Django](https://www.djangoproject.com/start/overview/)
- [Django Rest Framework](https://www.django-rest-framework.org)
- [Simple JWT for DRF](https://django-rest-framework-simplejwt.readthedocs.io/en/latest/)
- [Django CORS for headers](https://pypi.org/project/django-cors-headers/)
- [Coreapi for API documentation](https://www.coreapi.org)

## Setup

1. Install the packages needed with pip.

```
    pip install -r requirements.txt
```

2.  Create a `.env` file in the root of the repository. Inside you must declare an enviroment variable called `SECRET_KEY` and asign it your own secret key.

```
    .env file

                SECRET_KEY=your_secret_key
```

3. Run the `makemigrations` and `migrate` commands in the shell, so django applies all the needed migrations of the models to the database (it is configured to be a SQLITE database)

```
    python manage.py makemigrations
    python manage.py migrate
```

4. Now the API is ready to receive and send data. To start using the application you must create an user sending a request with a tool like [postman](https://www.postman.com) or [thunder client for vscode](https://marketplace.visualstudio.com/items?itemName=rangav.vscode-thunder-client). Now run the django server in your shell.

```
    python manage.py runserver
```

5. With the server runing is all good to go. To make requests to the API check the documentation in `http://localhost:8000/api/docs/`, there you will find all the endpoints with their respectives allowed methods.
