1
1. GET /static -> return “Hello World”  
2. GET /staticJSON -> return JSON of {text:”Hello World”}  
3. GET /echo?text=Heyyyy -> return any string in text variable, i.e., “Heyyyy”  
4. GET /plus?a=3&b=5 -> return the sum of a + b, i.e., 8  
5. GET /plusByJSON?jsonText={a:3,b:5} -> return the sum of a+b, parsed the json object from jsonText variable, thus, it should be answer 8  
6. GET /plus/6/7 -> return the sum of 6+7, which is 13  
7. GET /checkEvenNumber/3  
8. Return the Bad input (400) response code if the input number is not even. (in this case, it is 3) thus it is return 400 response code.  
9. Return the Success (200) response code if the input number is a even.  
10. POST /number/1 for saving a input number, return the all saved numbers as a JSON array. For example  
11. POST /number/1 -> [1]  
12. POST /number/2 -> [1,2]  
13. POST /number/5 -> [1,2,5]  
14. DELETE /number/1, remove the number in the array  
15. DELETE /number/1 -> [2,5]  
16. DELETE /number/2 → [5]  
17. PUT /number/5/10, change the number in the array  
18. PUT /number/5/10 -> [10]  
19. POST /countFields for counting the number of fields that submit via req.body (raw as the JSON object) for example,  
20. POST /countFields BODY {“a”:1,”b”:2,”c”:3} -> 3  
21. POST /countFields BODY {“a”:1,”b”:2,”c”:3,”d”:5} -> 4  

2
// เขียน Express แบบ MVC แต่ตอนทำงาน จะเรียก reqres.in แบบ 1 resource (User)

// เขียน Insertion Sort

// เขียน Merge Sort

// ทำโจทย์ programming.in.th ข้อ 0011 ถึง 0020
// https://programming.in.th/task/rev2_problemset.php
