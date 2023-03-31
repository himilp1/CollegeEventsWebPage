# Flask web framework
from flask import Flask, request, redirect, jsonify, render_template

# Tables
from tables.tables import Users, db

# Firebase imports for Authenticating users
import firebase_admin
from firebase_admin import credentials, auth

#Initialzing Firebase
cred = credentials.Certificate("firebase_sdk.json")
firebase_admin.initialize_app(cred)

#initialzing flask web app
app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql+pymysql://root:@localhost/cop4710'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db.init_app(app)

@app.route('/')
def hello():
    return render_template('index.html')
    
    
@app.route('/login', methods = ['POST'])
def login_post():

    contents = request.json


    
# Done for now

@app.route('/register', methods = ['POST'])
def register_post():
    
    content = request.json
    
    try:
        user = auth.create_user(
            email = content['email'],
            password = content['password']
        )

        new_user = Users(user.uid, content['password'], content['email'])
        db.session.add(new_user)
        db.session.commit()

        return 
    
    except Exception as e:
        return jsonify({
                        "Success": False,
                        "Message": "User not able to registered" + str(e)
                       })

@app.route('/mainPage')
def mainPage():
    return render_template('mainPage.html')
    


if __name__ == '__main__':
    app.run(debug = True)

