from models import db
from routes import app 

with app.app_context():
    db.create_all()

if __name__ == '__main__':
    app.run(debug=True)
