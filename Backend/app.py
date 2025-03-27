from flask import Flask
from flask_cors import CORS
from models import db
from routes import app  # Import routes after creating the Flask app

# Initialize database before running the app
with app.app_context():
    db.create_all()

if __name__ == '__main__':
    app.run(debug=True)
