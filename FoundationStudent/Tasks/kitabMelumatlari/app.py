from flask import Flask,render_template



app = Flask(__name__)

@app.route("/")

def index():
    books = []   
    books.append(Book) 

class Book:
    def __init__(self, name, pages):
        self.name = name
        self.pages = pages


@app.route("/about.html")
def about():
    return render_template("/about.html")
    
if __name__ =="__main__":
    app.run(debug=True)


      
