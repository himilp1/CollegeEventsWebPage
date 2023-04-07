# Flask web framework
from flask import Flask, request, jsonify, render_template

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
def start():
    return render_template('index.html')

# UNIVERSITY FUNCTIONS
def addUniversity():
    pass

def delUniversity():
    pass

# USER FUNCTIONS
@app.post('/register')
def register_post():
    
    try:

        content = request.json

        user = auth.create_user(
            email = content['email'],
            password = content['password']
        )

        new_user = Users(user.uid, content['role'], content['email'], content['university'])
        db.session.add(new_user)
        db.session.commit()

        response = jsonify({
                    'Success': True,
                    'Message': 'User successfully registered!',
                })
        
        response.status_code = 200

        return response
    
    except Exception as e:

        return jsonify({
                        "Success": False,
                        "Message": "User not able to registered" + str(e)
                    })

@app.post('/joinRSO')
def joinRSO():
    pass


# EVENT FUNCTIONS
@app.get('/viewEvent')
def viewEvents():
    pass

@app.post('/addEvent')
def addEvent():
    pass
@app.delete('/delEvent')
def delEvent():
    pass

@app.put('/modifyEvent')
def modifyEvent():
    pass


# RSO FUNCTIONS
def createRSO():
    pass
def DelRSO():
    pass


if __name__ == '__main__':
    app.run(debug = True)

