import { getUserSession, logout } from '/mali-clear-clinic/scripts/auth/userSession.js';

class CustomNavbar extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
        <div class="sticky relative top-0">
            <nav class="items-center w-full z-30 bg-white py-4">
                <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto">
                    <a href="/mali-clear-clinic/index.html" class="flex items-center space-x-3 rtl:space-x-reverse">
                        <img src="/mali-clear-clinic/assets/images/maliclear-logo.png" class="h-16" alt="Logo">
                    </a>
                    <div class="hidden w-full md:block md:w-auto" id="navbar-default">
                        <ul class="font-medium flex flex-row rounded-lg text-gray-600 gap-4 text-lg font-semibold align-middle" id="navbar-links">
                            <li>
                                <a href="/mali-clear-clinic/index.html" class="py-2 px-3 transition-all duration-300 hover:text-yellow-400">
                                    Home
                                </a>
                            </li>
                            <li>
                                <a href="#" class="py-2 px-3 transition-all duration-300 hover:text-yellow-400">
                                    Services
                                </a>
                            </li>
                            <li>
                                <a href="#" class="py-2 px-3 transition-all duration-300 hover:text-yellow-400">
                                    Promotion
                                </a>
                            </li>
                            <li>
                                <a href="#" class="py-2 px-3 transition-all duration-300 hover:text-yellow-400">
                                    Blog & Tips
                                </a>
                            </li>
                            <li>
                                <a href="#" class="py-2 px-3 transition-all duration-300 hover:text-yellow-400">
                                    Contact Us
                                </a>
                            </li>
                            <li id="login-link">
                                <a href="/mali-clear-clinic/pages/login.html" class="py-2 px-4 border-2 rounded-[22px] transition-all duration-300 hover:bg-yellow-400 hover:text-black hover:fill-black">
                                    <svg class="inline-block h-5 -mt-1 align-middle" xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24">
                                        <path d="m3.866,18.965c-.186.32-.521.5-.867.5-.17,0-.342-.043-.5-.134-1.542-.892-2.5-2.551-2.5-4.331V7C0,4.243,2.243,2,5,2v-1c0-.552.448-1,1-1s1,.448,1,1v1h7v-1c0-.552.447-1,1-1s1,.448,1,1v1c2.757,0,5,2.243,5,5v8c0,.552-.447,1-1,1s-1-.448-1-1v-6h-1c-.553,0-1-.448-1-1s.447-1,1-1h1c0-1.654-1.346-3-3-3H5c-1.654,0-3,1.346-3,3h8c.552,0,1,.448,1,1s-.448,1-1,1H2v6c0,1.068.575,2.064,1.5,2.599.478.276.642.888.365,1.366Zm16.892-.385l-3.749-1.401v-5.045c0-1.516-1.076-2.834-2.503-3.066-.881-.143-1.768.102-2.439.673-.672.571-1.058,1.405-1.058,2.286v7.563l-1.015-.808c-.007-.006-.016-.006-.023-.012-1.211-1.053-3.049-.975-4.153.207-1.13,1.208-1.066,3.11.13,4.23l.558.538c.186.18.435.28.694.28.9,0,1.342-1.095.694-1.72l-.568-.548c-.403-.378-.424-1.013-.046-1.416.375-.402,1.008-.421,1.41-.048.01.009,2.697,2.151,2.697,2.151.301.24.713.285,1.057.119.346-.167.566-.517.566-.901v-9.638c0-.294.129-.572.353-.763.228-.193.518-.273.822-.223.463.076.825.556.825,1.093v5.739c0,.417.259.791.65.937l4.399,1.644c1.104.412,1.866,1.438,1.943,2.612.035.529.475.935.997.935.022,0,.044,0,.066-.002.551-.037.969-.513.933-1.063-.129-1.958-1.4-3.668-3.24-4.354Z"/>
                                    </svg>
                                    BOOK NOW
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
        `;
        
        this.checkUserLogin();
    }

    async checkUserLogin() {
        const user = await getUserSession();
        
        if (user) {
            this.updateNavbarWithUser(user);
        } else {
            // ถ้าผู้ใช้ยังไม่ล็อกอิน ให้แสดงปุ่มล็อกอิน
        }
    }

    updateNavbarWithUser(user) {
        // อัปเดต navbar ด้วยข้อมูลของผู้ใช้
        if (user.role === 'ADMIN') {
            document.getElementById("login-link").innerHTML = `
                <span>Welcome, ${user.username}</span>
                <a href="/mali-clear-clinic/pages/admin-booking.html" class="py-2 px-4 border-2 rounded-[22px] transition-all duration-300 hover:bg-yellow-400 hover:text-black hover:fill-black">
                    Admin Bookings
                </a>
                <a id="logout-btn" class="py-2 px-4 border-2 rounded-[22px] transition-all duration-300 hover:bg-yellow-400 hover:text-black hover:fill-black">
                    Logout
                </a>
            `;
        } else {
            document.getElementById("login-link").innerHTML = `
                <span>Welcome, ${user.username}</span>
                <a href="/mali-clear-clinic/pages/my-booking.html" class="py-2 px-4 border-2 rounded-[22px] transition-all duration-300 hover:bg-yellow-400 hover:text-black hover:fill-black">
                    My Bookings
                </a>
                <a id="logout-btn" class="py-2 px-4 border-2 rounded-[22px] transition-all duration-300 hover:bg-yellow-400 hover:text-black hover:fill-black">
                    Logout
                </a>
            `;
        }
        
        document.getElementById("logout-btn").addEventListener("click", async () => {
            await logout();
        });
    }
}

customElements.define("layout-navbar", CustomNavbar);
