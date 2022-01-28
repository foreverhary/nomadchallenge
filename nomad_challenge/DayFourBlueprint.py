import os
import requests


print("Welcome to IsItDown.py!")
print("Please")
a = requests.get('http://google.com')
print(a.status_code)

os.system('cls')