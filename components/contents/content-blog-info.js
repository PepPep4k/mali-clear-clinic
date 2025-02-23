class bloginfo extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
            <div class="bg-white p-6 rounded-lg shadow-lg mb-6">
                <img src="../assets/images/tr6.jpg" alt="ผิวมัน" class="w-full rounded-lg mb-4">
                <h2 class="text-xl font-semibold text-pink-500 mb-3">1️⃣ ผิวมัน (Oily Skin)</h2>
                    <ul class="list-disc list-inside">
                        <li>รูขุมขนกว้าง ผิวหน้ามันวาวโดยเฉพาะบริเวณ T-Zone</li>
                        <li>มีแนวโน้มเกิดสิวง่าย</li>
                        <li>ควรเลือกผลิตภัณฑ์ที่ควบคุมความมันและไม่ทำให้รูขุมขนอุดตัน</li>
                    </ul>
            </div>

            <div class="bg-white p-6 rounded-lg shadow-lg mb-6">
                <img src="../assets/images/tr5.jpg" alt="ผิวแห้ง" class="w-full rounded-lg mb-4">
                <h2 class="text-xl font-semibold text-pink-500 mb-3">2️⃣ ผิวแห้ง (Dry Skin)</h2>
                    <ul class="list-disc list-inside">
                        <li>ผิวลอก แห้งตึงหลังล้างหน้า</li>
                        <li>อาจมีริ้วรอยก่อนวัย</li>
                        <li>ควรเลือกผลิตภัณฑ์ที่มีมอยส์เจอไรเซอร์เข้มข้น เติมความชุ่มชื้น</li>
                    </ul>
            </div>

            <div class="bg-white p-6 rounded-lg shadow-lg mb-6">
                <img src="../assets/images/tr4.jpg" alt="ผิวผสม" class="w-full rounded-lg mb-4">
                <h2 class="text-xl font-semibold text-pink-500 mb-3">3️⃣ ผิวผสม (Combination Skin)</h2>
                    <ul class="list-disc list-inside">
                        <li>ผิวมันบริเวณ T-Zone แต่แห้งบริเวณแก้ม</li>
                        <li>ควรใช้สกินแคร์ที่สมดุล ไม่ทำให้ผิวแห้งเกินไปหรือมันเกินไป</li>
                    </ul>
            </div>

            <div class="bg-white p-6 rounded-lg shadow-lg mb-6">
                <img src="../assets/images/tr2.jpg" alt="ผิวแพ้ง่าย" class="w-full rounded-lg mb-4">
                <h2 class="text-xl font-semibold text-pink-500 mb-3">4️⃣ ผิวแพ้ง่าย (Sensitive Skin)</h2>
                    <ul class="list-disc list-inside">
                        <li>ไวต่อการระคายเคือง มีผื่นแดงหรือสิวอักเสบง่าย</li>
                        <li>ควรเลือกผลิตภัณฑ์ที่ไม่มีแอลกอฮอล์ น้ำหอม และสารระคายเคือง</li>
                    </ul>
            </div>
                    `;
    }
}

customElements.define("content-blog-info", bloginfo);