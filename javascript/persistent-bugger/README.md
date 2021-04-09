# Persistent Bugger
## 📌 Instruksi
Buat sebuah function, `persistence`, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.

- Buat sebuah function `persistance`, yang mengmabil nilai positif dari parameter `num` dan mengembalikan `multiplicative persistence`.
- **multiplicative persistence** adalah mengalikan setiap angka secara berulang, jika hasil perkalian angka masih lebih dari 1 digit, maka hasil dari angka tersebut dikalikan lagi, hingga menghasilkan 1 digit angka saja.

## 🤔 Contoh
```javascript
 persistence(39) === 3 // karena 3*9 = 27, 2*7 = 14, 1*4=4
                       // dan 4 hanya 1 digit
                 
 persistence(999) === 4 // karena 9*9*9 = 729, 7*2*9 = 126,
                        // 1*2*6 = 12, dan akhirnya 1*2 = 2
                  
 persistence(4) === 0 // karena 4 sudah 1 digit
```




