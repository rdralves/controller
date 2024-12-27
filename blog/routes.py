from flask import Blueprint, jsonify

bp_crud = Blueprint('crud', __name__)


@bp_crud.route('/api/hello', methods=['GET'])
def hello_world():
    return jsonify({"message": "Hello, World"})