1. BACKEND

- MODELS

  - store and represent our internal applications data
  - keep the data in sync

- SERIALZERS (DRF ModelSerializer)

  - convert internal data to external transmittable data formats(JSON)
  - also converts incoming data (JSON) to internal representation (python, model records)

- VIEWS (DRF ViewSets)

  - handle requests and send out responses
  - work with serializers

- URLS (DRF DefaultRouter)
  - handle the routing of requests

2. FRONTEND

- ROUTER

  - handle our internal routing within our app

- PAGES

  - general content destinations

- COMPONENTS

  - presenting content, usually reflecting CRUD operations on resourse

- API Calls

  - handle getting and passing data to our backend API

- STYLING
  - make app look amazing

3. AUTHENTICATION

MODELS
-add user

SERIALIZER
-add a user serializer

VIEWS
-filter data by user(optionally)
-login/logout

URLS

- add support for new views
