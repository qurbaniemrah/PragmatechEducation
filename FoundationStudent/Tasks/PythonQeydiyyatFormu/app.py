users = []

class user:
    def __init__(self,_ad,_soyad,_email,_username, _password):
        self.Ad= _ad
        self.Soyad =_soyad
        self.Email = _email
        self.Username = _username
        self.Password = _password
        users.append(self)
    def qeydiyyatdanKec(self):
        print(f'{self.Ad} | {self.Soyad} | {self.Email} | {self.Username} | {self.Password}')