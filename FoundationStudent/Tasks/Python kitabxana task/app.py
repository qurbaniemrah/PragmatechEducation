import json
# read json file
f = open('kitablar.json','r')
data = json.loads(f)

print(data('Author'))

books = []

class Book:
     def __init__(self,_author,_country,_imagelink,_language,_link,_pages,_title,_year):
          self.Author = _author
          self.Country = _country
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
 
    