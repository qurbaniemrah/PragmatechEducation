from flask import Flask,render_template,request
from werkzeug.utils import redirect


books = []

app = Flask(__name__)

@app.route("/")

def index():
    return render_template('index.html')

@app.route("/create", methods = ['GET', 'POST'])
def create():
    if request.method == 'POST':
        Name = request.form['Name']
        Author = request.form['Author']
        Year = request.form['Year']
        Number = request.form['Number']
        Summary = request.form['Summary']
        Book  = {
             'id':Books.__len__(),
             'Name': Name,
             'Author': Author,
             'Year': Year,
             'Number': Number,
             'Summary': Summary
            
        }

    Book.append(book)
        return render_template("create.html")

@app.route("/result")
def result():
    return render_template("result.html")    


if __name__=="__main__":
    app.run(debug=True)    
