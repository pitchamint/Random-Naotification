//control Random Process
const btn =document.querySelector('.btn')
const container = document.querySelector('.container')
const messages = [
    "Good Morning",
    "Good Afternoon",
    "Good Night",
    "I'm cute",
    "Hello world",
    "Wow Wow Wow",
    "Pitchamint"
]
//ทำหลังจากสร้างฟังก์ชั่นสุ่ม
btn.addEventListener("click",()=>createNotification()) //เริ่มต้นสร้างกล่องแจ้งเตือนโดยสร้างผ่านตัว div
function createNotification(){
    const notificationEl = document.createElement("div") 
    notificationEl.classList.add("notification") //คลาสนี้จะเอาไปกำหนดสไตล์อีกที
    notificationEl.innerText = randomMessage() //สุ่มข้อความอะไรได้ก็เอามาใส่ในตัวแปร notificationEl
    //ยัด notificationEl ไว้ใน div.container โดยคำสั่ง appendchild
    container.appendChild(notificationEl)
    setTimeout(()=>{
        notificationEl.remove() //หมายความว่าถ้าเวลา 3 วิ ลบข้อความที่สุ่มออก
    },3000)
}

//ทำอันนี้ก่อน
//สุ่มข้อความ 
function randomMessage(){
    //สุ่มตั้งแต่ 0 - 4
    return messages[Math.floor(Math.random()*messages.length)]
}
randomMessage()