let menuLoaded = false; 

const tabLinks = document.querySelectorAll('.tab-link');
const tabContents = document.querySelectorAll('.tab-content');

function showTab(tabId) {
    tabContents.forEach(content => content.classList.add('hidden'));
    tabLinks.forEach(link => link.classList.remove('active'));

    const selectedContent = document.getElementById(tabId);
    selectedContent.classList.remove('hidden');
    const selectedLink = document.querySelector(`[data-tab="${tabId}"]`);
    selectedLink.classList.add('active');

    if (tabId === 'menu' && !menuLoaded) {
        const menuItems = document.getElementById('menu-items');
        let html = "";
        window.menuData.platillos.forEach(platillo => {
            html += `
                <div class="card">
                    <img src="${platillo.imagen}" alt="${platillo.nombre}" class="w-full h-48 object-cover rounded-t-lg">
                    <h3 class="text-xl font-semibold">${platillo.nombre}</h3>
                    <p class="text-gray-600">${platillo.descripcion}</p>
                    <p class="text-red-600 font-bold">$${platillo.precio}</p>
                </div>`;
        });
        menuItems.innerHTML = html;
        menuLoaded = true;
    }
}

tabLinks.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        const tabId = link.getAttribute('data-tab');
        showTab(tabId);
    });
});

showTab('inicio');
