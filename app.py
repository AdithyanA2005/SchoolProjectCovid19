from covid_stats.main import app
from covid_stats import views

if __name__ == '__main__':
    app.run(debug=True, port=3000)