from flask import Blueprint

bp_crud = Blueprint('crud', __name__)


@bp_crud.route('/')
def index():
    return 'Hello, World'