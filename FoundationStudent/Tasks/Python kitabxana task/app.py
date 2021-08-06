import json
# read json file
f = open('kitablar.json','rt')
data = json.loads(f)
print(data)

books = []

class Book:
     def __init__(self,_author,_countryName,_imagelink,_language,_link,_pages,_title,_year,_bookname):
          self.Bookname = _bookname
          self.Author = _author
          self.Countryname = _countryName
          self.ImageLink = _imagelink
          self.Language = _language
          self.Link = _link
          self.Pages = _pages
          self.Title = _title
          self.Year = _year

def findBookByName(_bookname):
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
 
    