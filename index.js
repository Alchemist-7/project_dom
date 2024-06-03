const products = [
  {
    name: 'HP Essentials 255 G8 AMD',
    price: 289,
    stars: 4,
    reviews: 250,
    seller: 'PcComponentes',
    image:
      'https://thumb.pccomponentes.com/w-300-300/articles/1005/10057282/1639-hp-essential-255-g8-amd-3020e-8gb-256gb-ssd-156.jpg'
  },
  {
    name: 'ASUS VivoBook 15 M1502YA-NJ153W AMD Ryzen 7 7730U/16GB/512GB SSD/15.',
    price: 649,
    stars: 4,
    reviews: 108,
    seller: 'Electronica barata',
    image:
      'https://thumb.pccomponentes.com/w-530-530/articles/1072/10727018/180-asus-vivobook-15-m1502ya-nj153w-amd-ryzen-7-7730u-16gb-512gb-ssd-156-4142a3f1-d938-4452-b0e5-f9c5d4a91915.jpg'
  },
  {
    name: 'ASUS VivoBook 15 F1502ZA-EJ1302 Intel Core i5-1235U/16GB/512GB SSD/15.6',
    price: 469,
    stars: 5,
    reviews: 1204,
    seller: 'PcComponentes',
    image:
      'https://thumb.pccomponentes.com/w-530-530/articles/1073/10736944/1266-asus-vivobook-15-f1502za-ej1302-intel-core-i5-1235u-16gb-512gb-ssd-156.jpg'
  },
  {
    name: 'HP Victus 15-fa0012ns Intel Core i5-12500H/16GB/512G SSD/RTX 3050/15.6',
    price: 749,
    stars: 3,
    reviews: 89,
    seller: 'PcComponentes',
    image:
      'https://thumb.pccomponentes.com/w-530-530/articles/1072/10720423/123-asus-rog-strix-g16-g614ji-n3163-intel-core-i7-13650hx-32gb-1tb-ssd-rtx-4070-16.jpg'
  },
  {
    name: 'ASUS ROG Strix G16 G614Jl-N3163 Intel Core i7-13650HX/32GB/1TB SSD/RTX 4070/16"',
    price: 1569,
    stars: 5,
    reviews: 307,
    seller: 'Eden Technology',
    image:
      'https://thumb.pccomponentes.com/w-530-530/articles/1073/10733266/1752-hp-15-fd0076ns-intel-core-i5-1335u-16gb-512gb-ssd-156.jpg'
  },
  {
    name: 'HP 15-fd0076ns Intel Core i5-1335U/16GB/512GB SSD/15.6"',
    price: 589,
    stars: 2,
    reviews: 144,
    seller: 'PcComponentes',
    image:
      'https://thumb.pccomponentes.com/w-300-300/articles/1080/10804909/1145-xiaomi-redmi-note-13-pro-8-256gb-negro-libre.jpg'
  },
  {
    name: 'Xiaomi Redmi Note 13 Pro 8/256GB Negro',
    price: '265,89',
    stars: 5,
    reviews: 725,
    seller: 'Pepe Phone',
    image:
      'https://thumb.pccomponentes.com/w-300-300/articles/1080/10805959/1512-samsung-galaxy-s24-ultra-12-512gb-gris-titanium-libre.jpg'
  },
  {
    name: 'Samsung Galaxy S24 Ultra 12/512GB Gris Titanium',
    price: 1579,
    stars: 3,
    reviews: 52,
    seller: 'nanoChip',
    image:
      'https://thumb.pccomponentes.com/w-300-300/articles/1077/10777794/1158-apple-iphone-15-plus-128gb-rosa-libre.jpg'
  },
  {
    name: 'Apple iPhone 15 Plus 128GB Rosa',
    price: 1019,
    stars: 4,
    reviews: 887,
    seller: 'PcComponentes',
    image:
      'https://thumb.pccomponentes.com/w-300-300/articles/1067/10673828/1839-samsung-galaxy-a34-5g-8-256gb-negro-libre-protector-pantalla.jpg'
  },
  {
    name: 'Samsung Galaxy A34 5G 8/256GB Negro',
    price: 349,
    stars: 1,
    reviews: 12,
    seller: 'PcComponentes',
    image:
      'https://thumb.pccomponentes.com/w-300-300/articles/1067/10673828/1839-samsung-galaxy-a34-5g-8-256gb-negro-libre-protector-pantalla.jpg'
  }
]
const header = document.createElement('header')
header.innerHTML = `
    
    <img src="assets/logo-pccomponentes.png">
    <h1>PC COMPONENTES</h1>
    <nav>
        <ul>
            <li><a href="#home">Inicio</a></li>
            <li><a href="#about">Catálogo</a></li>
            <li><a href="#contact">Contacto</a></li>
            <li><a href="#services">Mi cuenta</a></li>
            <li><a href="#contact">Mi cesta</a></li>
        </ul>
    </nav>
`
document.getElementById('header-container').appendChild(header)

const productsContainer = document.getElementById('products-container')

products.forEach((product) => {
  const productDiv = document.createElement('div')
  productDiv.classList.add('product')
  productDiv.innerHTML = `
    <img src="${product.image}" alt="${product.name}">
    <h2>${product.name}</h2>
    <p>Precio: €${product.price}</p>
    <p>Estrellas: ${product.stars} / 5</p>
    <p>Reseñas: ${product.reviews}</p>
    <p>Vendedor: ${product.seller}</p>
  `
  productsContainer.appendChild(productDiv)
})
const filtersContainer = document.getElementById('filters')

const sellerFilter = document.createElement('select')
const sellers = [...new Set(products.map((product) => product.seller))]
sellerFilter.innerHTML = sellers
  .map((seller) => `<option value="${seller}">${seller}</option>`)
  .join('')
filtersContainer.appendChild(sellerFilter)

const priceFilter = document.createElement('input')
priceFilter.type = 'number'
priceFilter.placeholder = 'Máximo precio'
filtersContainer.appendChild(priceFilter)

const priceFilterButton = document.createElement('button')
priceFilterButton.textContent = 'Buscar'
filtersContainer.appendChild(priceFilterButton)

const clearFiltersButton = document.createElement('button')
clearFiltersButton.textContent = 'Limpiar Filtros'
filtersContainer.appendChild(clearFiltersButton)

const productContainer = document.getElementById('products-container')
const noProductsMessage = document.getElementById('no-products-message')
const suggestedContainer = document.getElementById('suggested-container')

function displayProducts(products) {
  productContainer.innerHTML = ''
  products.forEach((product) => {
    const productDiv = document.createElement('div')
    productDiv.classList.add('product')
    productDiv.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <h2>${product.name}</h2>
      <p>Precio: €${product.price}</p>
      <p>Estrellas: ${product.stars} / 5</p>
      <p>Reseñas: ${product.reviews}</p>
      <p>Vendedor: ${product.seller}</p>
    `
    productContainer.appendChild(productDiv)
  })
}

function displaySuggestedProducts() {
  const suggestedProducts = products.sort(() => 0.5 - Math.random()).slice(0, 3)
  suggestedContainer.innerHTML = ''
  suggestedProducts.forEach((product) => {
    const productDiv = document.createElement('div')
    productDiv.classList.add('product')
    productDiv.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <h2>${product.name}</h2>
      <p>Precio: €${product.price}</p>
      <p>Estrellas: ${product.stars} / 5</p>
      <p>Reseñas: ${product.reviews}</p>
      <p>Vendedor: ${product.seller}</p>
    `
    suggestedContainer.appendChild(productDiv)
  })
}

displayProducts(products)

sellerFilter.addEventListener('change', () => {
  const selectedSeller = sellerFilter.value
  const filteredProducts = products.filter(
    (product) => product.seller === selectedSeller
  )
  if (filteredProducts.length > 0) {
    noProductsMessage.style.display = 'none'
    displayProducts(filteredProducts)
  } else {
    productContainer.innerHTML = ''
    noProductsMessage.style.display = 'block'
    displaySuggestedProducts()
  }
})

priceFilterButton.addEventListener('click', () => {
  const maxPrice = parseFloat(priceFilter.value)
  const filteredProducts = products.filter(
    (product) => product.price <= maxPrice
  )
  if (filteredProducts.length > 0) {
    noProductsMessage.style.display = 'none'
    displayProducts(filteredProducts)
  } else {
    productContainer.innerHTML = ''
    noProductsMessage.style.display = 'block'
    displaySuggestedProducts()
  }
})

clearFiltersButton.addEventListener('click', () => {
  sellerFilter.value = ''
  priceFilter.value = ''
  noProductsMessage.style.display = 'none'
  displayProducts(products)
})

const commitmentImages = [
  'assets/quienes-somos.png',
  'assets/compromisos.png',
  'assets/opina sobre nosotros.png',
  'assets/servicios.png'
]

const aside = document.createElement('aside')
aside.id = 'commitments'

const h2 = document.createElement('h2')
h2.textContent = 'Compromisos con el cliente'
aside.appendChild(h2)

const imagesDiv = document.createElement('div')
imagesDiv.id = 'commitment-images'

commitmentImages.forEach((src) => {
  const img = document.createElement('img')
  img.src = src
  imagesDiv.appendChild(img)
})

aside.appendChild(imagesDiv)

document.getElementById('products-container').appendChild(aside)

const footer = document.createElement('footer')
footer.id = 'footer'
footer.classList.add('footer')

const footerContent = `
  <ul class="footer-list">
    <li><a href="#faq">Preguntas frecuentes</a></li>
    <li><a href="#work-with-us">Trabaja con nosotros</a></li>
    <li><a href="#legal-notice">Aviso legal</a></li>
    <li><a href="#privacy">Privacidad</a></li>
    <li><a href="#cookies-policy">Política de cookies</a></li>
  </ul>
`

footer.innerHTML = footerContent

document.body.appendChild(footer)
