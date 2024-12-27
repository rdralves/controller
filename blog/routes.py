from flask import Blueprint, jsonify
from flask_cors import CORS

bp_crud = Blueprint('crud', __name__)

# Adicionando suporte a CORS ao Blueprint
CORS(bp_crud)


@bp_crud.route('/api/hello', methods=['GET'])
def hello_world():
    return jsonify({"message": "Hello, _Flask"})
