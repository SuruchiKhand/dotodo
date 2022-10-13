# dotodo

Backend
Steps: cd backend after making backend folder
python -m venv .venv
source .venv/bin/activate
pip install django psycopg2 djangorestframework
pip freeze > requirements.txt
django-admin startproject dotodo_proj . (donot forget this period otherwise it will create nested folders)
python manage.py startapp dotodo_app
createdb dotodo_db1
in project settings, add installed apps and database name
python manage.py migrate
python manage.py runserver
make models, python manage.py makemigrations
ython manage.py migrate
