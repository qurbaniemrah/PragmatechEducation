import json
f = open('kitablar.json', 'rt')
data = json.load(f)


books = []
books.append(data)
print(books)

class Book:
     def __init__(self,_author,_countryName,_imagelink,_language,_link,_pages,_title,_year,):
          self.author = _author
          self.countryname = _countryName
          self.imageLink = _imagelink
          self.language = _language
          self.link = _link
          self.pages = _pages
          self.title = _title
          self.year = _year

def findBookByName(_author):
    # kitab adı daxil edildiyi zaman kitabın digər detallarını ekrana çap edin
   pass
   
    
       

def totalPaper():
    # bütün siyahıda var olan kitabların səhifə saylarının cəmini ekrana çap edin
       pass

def deleteByCountry(_countryName):
    # ölkə adı daxil edildiyi zaman o ölkəyə aid olan kitabların json faylından silinməsini təmin edin
       pass

def convertToList():
    # bütün kitabların list>object məntiqinə əsasən çevirin
       pass          
 