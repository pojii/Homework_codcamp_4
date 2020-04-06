1. คิดว่าทําไมถึงยังต้องเรียนเกี่ยวกับ jQuery ทั้งที่ปัจจุบัน Javascript ปกติก็เขียนได้ง่ายขึ้น และมีตัวช่วยอื่นมากขึ้น แถม jQuery ยังเป็นต้นเหตุที่ทําให้เว็บช้าลงด้วย

```
 - js เขียนแต่ละครั้งยาวมาก ๆ
 - มี Framework ทำให้ทำงานได้ง่ายขึ้น
```

2. $(“ul.product.list”).html(“Product list”) ได้ผลลัพธ์อย่างไร
```
    <ul class="product list"> <-- เลือกอันออกเอร์ลิส คลาสโปรดัก และ คลาสลิส
        Product list <-- html ให้ข้อความเปลี่ยนไป
    </ul>
```
3. $(“a[target=_blank]”).addClass(“popup-link”) ได้ผลลัพธ์อย่างไร
```
    <a target="_blank">
    </a>

    change to
    <a target="_blank" class="popup-link>
    </a>
```

4. $(“img”).hide() ได้ผลลัพธ์อย่างไร
```
    img tag element is hided
```
5. ใช้ jsFiddle เขียนหน้าแบบฟอร์มล็อกอินโดยใช้ Bootstrap + jQuery เพื่อสร้างหน้า โดยมีช่องกรอก Username, Password และปุ่ม Login เมื่อคลิกปุ่ม Login แล้วจะต้อง Alert ค่า Username และ Password ที่กรอกลงไป ดังภาพตัวอย่าง
```
    https://jsfiddle.net/saffile/a14y05cp/8/
```
