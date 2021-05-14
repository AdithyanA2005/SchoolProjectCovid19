from flask import render_template
from covid_stats.main import app

@app.route("/")
def index():
    # todo_list = Todo.query.all()
    return render_template('index.html')
