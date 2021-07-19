#istediyimiz bir eded secirik eger bu eded 10 dan kicikdirse ekranda cap olunsun deyilse bu eded kicik deyil yazilsin

a=45

if a<10:
  print(a)
else:
  print('kicik deyil')

#Qeydiyyat formu 
ad = input('adinizi daxil edin:')
if 3<len(ad)<11:
   print('ad duzdur')
   soyad = input('soyadinizi daxil edin: ')
   if 5<len(soyad)<15:
      print('soyad duzdur')
      il = input('ili daxil edin: ')
      if 0<len(il)<5:
          print('dogrudur')
      else:
          print('simbol sayi sehfdir')    
   else:
       print('soyad duz deyil') 
       
else:
    print('duz deyil')

