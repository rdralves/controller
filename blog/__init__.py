from flask import Flask
from.routes import bp_crud
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Ativa o CORS globalmente
app.register_blueprint(bp_crud)

