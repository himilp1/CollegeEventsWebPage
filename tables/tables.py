
from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class Users(db.Model):
    __tablename__ = 'Users'
    userId = db.Column(db.String(200), primary_key = True)
    email = db.Column(db.String(50), nullable = False)
    role = db.Column(db.String(20), nullable = False)

    def __init__(self, userId, role, email):
        self.userId = userId
        self.role = role
        self.email = email