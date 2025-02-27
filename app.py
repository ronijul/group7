from flask import Flask, render_template, request, jsonify
from db_connector import save_customer_to_db  # Correct import

app = Flask(__name__)
app.config.from_pyfile('settings.py')

@app.route('/')
def PART_Bfun():
    return render_template('PART_B.html')

if __name__ == '__main__':
    app.run(debug=True)
