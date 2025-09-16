# Django + React Contacts App

A full-stack web application with a **Django REST API backend** (MySQL database)  
and a **React frontend**.  
Originally built with a plain HTML/JS frontend, now upgraded to React.

---

## Features

### Backend (Django)
- Django REST Framework API for creating, listing, and deleting contacts
- MySQL database integration
- Fully functional CRUD operations

### Frontend (React)
- Modern React UI for submitting and viewing contacts
- Axios for API calls
- Automatically updates the list when new contacts are added

---

## Tech Stack
- **Backend:** Python 3.x, Django 4.x, Django REST Framework, MySQL  
- **Frontend:** React 19, Axios, React Scripts 5

---

## Getting Started

### 1. Clone Repository
```bash
git clone https://github.com/<chplus2>/<django-rest-contacts>.git
cd django-rest-contacts
````

### 2. Backend Setup

```bash
python -m venv venv
# Windows PowerShell
.\venv\Scripts\activate
# macOS/Linux
source venv/bin/activate

pip install -r requirements.txt
```

Edit `myproject/settings.py` to match your MySQL credentials.

Run migrations and start the server:

```bash
python manage.py makemigrations
python manage.py migrate
python manage.py runserver
```

Backend runs at **[http://127.0.0.1:8000/](http://127.0.0.1:8000/)**.

---

### 3. Frontend Setup

From the root folder:

```bash
cd react-contacts
npm install
npm start
```

Frontend runs at **[http://localhost:3000/](http://localhost:3000/)** and proxies API calls to the Django server.

---

## API Endpoints

* `GET /api/contacts/` – list all contacts
* `POST /api/contacts/` – create a new contact
* `DELETE /api/contacts/<id>/` – delete a contact

---

## What I Learned

* Setting up Django REST Framework with MySQL
* Building a React app that consumes a REST API
* Handling state, hooks, and form submissions in React
* CRUD operations and cross-origin requests (CORS)

---

## Notes

* CSRF protection is disabled in the API for simplicity—**do not use this setup in production**.
* Original plain-HTML frontend remains in the repo for reference but is replaced by React.
