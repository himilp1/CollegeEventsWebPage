
from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class Users(db.Model):
    __tablename__ = 'Users'
    userId = db.Column(db.Integer, primary_key = True)
    password = db.Column(db.String(50), nullable=False)
    email = db.Column(db.String(50), nullable=False)

    def __init__(self, password, email):
        self.password = password
        self.email = email