# Django REST Contact Form

A simple web application demonstrating a Django REST API backend with a MySQL database and a basic HTML/JavaScript frontend. Users can submit contact messages through the form, which are stored in the database and displayed in real time.

## Features

- Django REST Framework API for creating, listing, and deleting contacts
- MySQL database integration
- Plain HTML/JavaScript frontend using `fetch` to interact with the API
- Fully functional CRUD operations for learning purposes

## Tech Stack

- Python 3.x
- Django 4.x
- Django REST Framework
- MySQL
- HTML / JavaScript

## Installation & Running

1. **Clone the repository**
   ```bash
   git clone https://github.com/chplus2/django-api-demo.git
   cd django-api-demo
   ```

2. **Create and activate a virtual environment**

   ```bash
   python -m venv venv

   # Windows PowerShell / VS Code terminal
   # (Optional: PowerShell command, only needed the first time if script execution is blocked)
   # Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
   .\venv\Scripts\Activate.ps1
   
   # Windows CMD
   venv\Scripts\activate
   
   # macOS/Linux
   source venv/bin/activate
   ```

3. **Install dependencies**

   ```bash
   pip install -r requirements.txt
   ```

4. **Configure MySQL database**
   Update `myproject/settings.py` with your database name, user, and password.

5. **Run migrations**

   ```bash
   python manage.py makemigrations
   python manage.py migrate
   ```

6. **Start the development server**

   ```bash
   python manage.py runserver
   ```

7. **Open in browser**
   Visit `http://127.0.0.1:8000/` to use the contact form.

## Usage

* Fill in the name, email, and message fields in the frontend form.
* Submitted messages are saved to the database and displayed below the form.
* You can also interact with the API directly via endpoints:

  * `GET /api/contacts/` – list all contacts
  * `POST /api/contacts/` – create a new contact
  * `DELETE /api/contacts/<id>/` – delete a contact

## What I Learned

* Setting up a Django REST Framework project
* Connecting Django with MySQL
* Building a simple frontend that consumes a JSON API
* CRUD operations and handling POST requests in Django

## Notes

* This project started as a learning exercise; all code was manually typed and understood.
* CSRF protection is disabled in the API for simplicity—do not use this setup in production.
