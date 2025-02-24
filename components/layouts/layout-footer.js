class CustomFooter extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
            <footer class="bg-pink-400 text-white py-6">
                <div class="container mx-auto text-center">
                    <div class="flex justify-center">
                        <div class="md:w-1/3">
                            <h5 class="text-xl font-semibold mb-4">Contact Us</h5>
                            <a href="/mali-clear-clinic/pages/contact.html" class="bg-transparent border-2 border-white text-white py-2 px-4 rounded-lg hover:bg-white hover:text-pink-400 transition duration-300 inline-block">
                                ติดต่อเรา
                            </a>
                        </div>
                    </div>
                    <hr class="my-6 border-white opacity-30">
                    <p class="text-sm">&copy; 2025 MaliClearClinic. All rights reserved.</p>
                </div>
            </footer>
        `;
    }
}

customElements.define("layout-footer", CustomFooter);
