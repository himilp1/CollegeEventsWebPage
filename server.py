from flask import Flask, request, jsonify, render_template
from flask_sqlalchemy import SQLAlchemy
import firebase_admin
from firebase_admin import credentials
from firebase_admin import auth

cred = credentials.Certificate("firebase_sdk.json")
firebase_admin.initialize_app(cred)

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql+pymysql://root:@localhost/cop4710'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)


class Users(db.Model):
    __tablename__ = 'Users'
    userId = db.Column(db.Integer, primary_key = True)
    password = db.Column(db.String(50), nullable=False)
    email = db.Column(db.String(50), nullable=False)

    def __init__(self, password, email):
        self.userId = 2
        self.password = password
        self.email = email
    

@app.route('/')
def hello():
    return render_template('index.html')
    
    
@app.route('/login', methods = ['POST'])
def login_post():

    username = request['username']
    password = request['password']

    

@app.route('/register', methods = ['POST'])
def register_post():
    
    content = request.json

    
    try:
        user = auth.create_user(
            email = content['email'],
            password = content['password']
        )

        new_user = Users(content['password'], content['email'])
        db.session.add(new_user)
        db.session.commit()

        return jsonify({
                        "Success": True,
                        "Message": "User was able to registered"
                       })
    
    except:
        return jsonify({
                        "Success": False,
                        "Message": "User not able to registered"
                       })

    
    return "User Registered."
    


if __name__ == '__main__':
    app.run(debug = True)

