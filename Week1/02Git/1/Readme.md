1. หน้าที่ของ Branch คืออะไร
    - เพื่อให้การพัฒนานั้นเป็นรูปแบบที่มีประสิทธิภาพมากที่สุด ช่วยลดปัญหา
ต่างๆในการทํางานร่วมกันเป็นทีม และการ Conflict ที่อาจจะเกิดขึ้น โดยเราจะแบ่ง
Branch โดยอ้างอิงตามการออกแบบตาม Git-Flow

2. ในการพัฒนาตามหลัก Git-flow โดยมีทีม 2 คน ช่วยกันเขียนโค้ด โดยคนนึงเขียน API
และอีกคนเขียน Frontend เราจะแบ่ง Branch ออกเป็นแบบไหน  
    - Develop and Master และแยกตามฟีเจอร์ไปเลย แล้วรวมที่ Develop แล้วค่อยปล่อยเข้า Master
3. หากเกิดบัคขึ้นที่ระบบ Production ซึ่งจะต้องแก้โค้ดใหม่ เราจะต้องแก้จาก Branch ไหน และสร้างเป็น Branch ประเภทไหน และจะต้อง Merge ไปที่ไหนเมื่อแก้ไขเสร็จ
    - Hotfix merge เข้า Develop และ Master
4. สร้าง Git Repository ชื่อ MyWebProject พร้อมสร้างไฟล์ index.html ไว้ด้วย
    - ขอไม่สร้างนะครับ ผมใช้ git ในนี้อยู่แล้ว