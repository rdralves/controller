from flask import Flask
from.routes import bp_crud


app = Flask(__name__)
app.register_blueprint(bp_crud)

