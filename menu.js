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
        <div class="card" onclick="openModal('${platillo.nombre}', '${platillo.descripcion}', '${platillo.precio}', '${platillo.imagen}')">
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

// MODAL PRODUCTO
function openModal(nombre, descripcion, precio, imagen) {
  document.getElementById('modal-title').innerText = nombre;
  document.getElementById('modal-description').innerText = descripcion;
  document.getElementById('modal-price').innerText = `$${precio}`;
  document.getElementById('modal-image').src = imagen;
  
  document.getElementById('product-modal').classList.remove('hidden');
}

// Cerrar modal
document.getElementById('close-modal').addEventListener('click', () => {
  document.getElementById('product-modal').classList.add('hidden');
});

// Cerrar modal clic fuera
document.getElementById('product-modal').addEventListener('click', (e) => {
  if (e.target.id === 'product-modal') {
    document.getElementById('product-modal').classList.add('hidden');
  }
});
