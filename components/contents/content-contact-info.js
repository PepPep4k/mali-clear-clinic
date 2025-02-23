class contactinfo extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
<!DOCTYPE html>
<html lang="th">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ติดต่อเรา</title>
    <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-gray-100">
    <div class="max-w-4xl mx-auto p-6">
        <h1 class="text-4xl font-bold text-center text-pink-400 mb-6">ติดต่อเรา</h1>
        
        <div class="bg-white p-6 rounded-lg shadow-lg mb-6">
            <h2 class="text-2xl font-semibold text-gray-700 mb-3">ที่อยู่</h2>
            <p class="text-gray-600">โรงแรมเอเซีย ชั้น 1 ห้อง C-4 เลขที่ 365/5-7 ถนนพญาไท แขวงถนนเพชรบุรี เขตราชเทวี กทม.</p>
        </div>

        <div class="bg-white p-6 rounded-lg shadow-lg mb-6">
            <h2 class="text-2x1 font-semibold text-gray-700 mb-3">แผนที่</h2>
            <iframe class="w-full h-[300px] rounded-lg mb-4" 
                src="https://www.google.com/maps?q=โรงแรมเอเซีย+กรุงเทพ&output=embed" 
                allowfullscreen="">
            </iframe>
        </div>

        <div class="bg-white p-6 rounded-lg shadow-lg mb-6">
            <h2 class="text-2xl font-semibold text-gray-700 mb-3">เวลาทำการ</h2>
            <ul class="text-gray-600 space-y-2">
                <li class="flex justify-between"><span>จันทร์ :</span> <span>12:00 AM - 06:00 PM</span></li>
                <li class="flex justify-between"><span>อังคาร :</span> <span>12:00 AM - 06:00 PM</span></li>
                <li class="flex justify-between"><span>พุธ :</span> <span>12:00 AM - 06:00 PM</span></li>
                <li class="flex justify-between"><span>พฤหัสบดี :</span> <span>12:00 AM - 06:00 PM</span></li>
                <li class="flex justify-between"><span>ศุกร์ :</span> <span>12:00 AM - 06:00 PM</span></li>
                <li class="flex justify-between"><span>เสาร์ :</span> <span>12:00 AM - 06:00 PM</span></li>
                <li class="flex justify-between"><span>อาทิตย์ :</span> <span class="text-red-500">ปิดทำการ</span></li>
            </ul>
        </div>
    </div>
</body>
</html>



        `;
    }
}

customElements.define("content-contact-info", contactinfo);