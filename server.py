from flask import Flask, request, jsonify, render_template
from flask_sqlalchemy import SQLAlchemy
#testing 
app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql+pymysql://root:@localhost/cop4710'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)


class Users(db.Model):
    __tablename__ = 'Users'
    userId = db.Column(db.Integer, primary_key = True)
    username = db.Column(db.String(50), nullable=False)
    password = db.Column(db.String(50), nullable=False)
    email = db.Column(db.String(50), nullable=False)

    def __init__(self, username, password, email):
        self.userId = 1
        self.username = username
        self.password = password
        self.email = email
    

@app.route('/')
def hello():
    return render_template('index.html')
    
    
@app.route('/', methods = ['POST'])
def login():

    username = request['username']
    password = request['password']



@app.route('/registerUser')
def login_pos():
    role = request['role']
    username = 'Nick1052'
    password = 'test123'
    email = 'Nick1052@gmail.com'
    


    new_user = Users(username, password, email)

    db.session.add(new_user)
    db.session.commit()

    return "User Registered."
    


if __name__ == '__main__':
    app.run(debug = True)

