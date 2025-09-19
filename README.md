# Django + Vue Contacts App

A full-stack web application with a **Django REST API backend** (MySQL database)
and a **Vue 3 frontend**.
Originally built with a plain HTML/JS frontend, now upgraded to Vue.

## Features

### Backend (Django)

* Django REST Framework API for creating, listing, and deleting contacts
* SQLite database integration
* Fully functional CRUD operations

### Frontend (Vue)

* Modern Vue 3 UI for submitting and viewing contacts
* Axios for API calls
* Automatically updates the list when new contacts are added
* Uses `v-model` for two-way data binding and `onMounted` for fetching initial data

## Tech Stack

* **Backend:** Python 3.x, Django 4.x, Django REST Framework, SQLite
* **Frontend:** Vue 3, Vite, Axios

## Getting Started

### 1. Clone Repository

```bash
git clone https://github.com/chplus2/django-vue-contacts.git
cd django-vue-contacts
```

### 2. Backend Setup

```bash
python -m venv venv
# Windows PowerShell
.\venv\Scripts\activate
# macOS/Linux
source venv/bin/activate

pip install -r requirements.txt
```

The project uses SQLite by default.  
No database configuration is needed unless you want to switch to another database.

Run migrations and start the server:

```bash
python manage.py makemigrations
python manage.py migrate
python manage.py runserver
```

Backend runs at **[http://127.0.0.1:8000/](http://127.0.0.1:8000/)**.

### 3. Frontend Setup

From the project root:

```bash
cd vue-contacts
npm install
npm run dev
```

Frontend runs at **[http://localhost:5173/](http://localhost:5173/)** and proxies API calls to the Django server.


## API Endpoints

* `GET /api/contacts/` – list all contacts
* `POST /api/contacts/` – create a new contact
* `DELETE /api/contacts/<id>/` – delete a contact

## What I Learned

* Integrating Django REST Framework with SQLite Database
* Building a Vue 3 app that consumes a REST API
* Using `ref`, `reactive`, and `v-model` for state management
* CRUD operations and handling CORS

## Notes

* CSRF protection is disabled in the API for simplicity—**do not use this setup in production**.
* The original plain-HTML frontend remains in the repo for reference but is replaced by Vue.
