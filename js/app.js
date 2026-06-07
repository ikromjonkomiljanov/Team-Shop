document.addEventListener("DOMContentLoaded", () => {
  // === 1. DOM Elementlarni chaqirib olish ===
  const searchToggle = document.getElementById("mobile-search-toggle");
  const mobileSearchBar = document.getElementById("mobile-search-bar");

  const desktopSearch = document.getElementById("desktop-search");
  const mobileSearch = document.getElementById("mobile-search");
  const desktopSearchBtn = document.getElementById("desktop-search-btn");
  const mobileSearchBtn = document.getElementById("mobile-search-btn");

  const bottomNav = document.getElementById("mobile-bottom-nav");
  const productsContainer = document.getElementById("products");

  const slides = document.querySelectorAll(".slide-item");
  const dots = document.querySelectorAll(".slide-dot");
  const prevBtn = document.getElementById("prev-slide");
  const nextBtn = document.getElementById("next-slide");

  // === 2. Navbar va Qidiruv Logikasi ===

  // Mobil qidiruvni ochish/yopish
  searchToggle.addEventListener("click", () => {
    mobileSearchBar.classList.toggle("hidden");
    if (!mobileSearchBar.classList.contains("hidden")) {
      mobileSearch.focus();
    }
  });

  // Scroll effekti (Mobil pastki menu uchun)
  let lastScrollTop = 0;
  window.addEventListener("scroll", () => {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop && scrollTop > 50) {
      bottomNav.classList.remove("translate-y-0");
      bottomNav.classList.add("translate-y-full");
    } else {
      bottomNav.classList.remove("translate-y-full");
      bottomNav.classList.add("translate-y-0");
    }

    if (scrollTop <= 10) {
      bottomNav.classList.remove("translate-y-full");
      bottomNav.classList.add("translate-y-0");
    }
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
  });

  // === 3. Slayder Logikasi ===
  let currentSlide = 0;
  const totalSlides = slides.length;

  function updateSlider(index) {
    slides.forEach((slide, i) => {
      if (i === index) {
        slide.classList.remove("hidden", "opacity-0");
        slide.classList.add("block", "opacity-100");
      } else {
        slide.classList.remove("block", "opacity-100");
        slide.classList.add("hidden", "opacity-0");
      }
    });

    dots.forEach((dot, i) => {
      if (i === index) {
        dot.classList.remove("bg-gray-300");
        dot.classList.add("bg-[#272343]", "w-5");
      } else {
        dot.classList.remove("bg-[#272343]", "w-5");
        dot.classList.add("bg-gray-300");
      }
    });
  }

  nextBtn.addEventListener("click", () => {
    currentSlide = (currentSlide + 1) % totalSlides;
    updateSlider(currentSlide);
  });

  prevBtn.addEventListener("click", () => {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    updateSlider(currentSlide);
  });

  dots.forEach((dot) => {
    dot.addEventListener("click", (e) => {
      currentSlide = parseInt(e.target.getAttribute("data-index"));
      updateSlider(currentSlide);
    });
  });

  setInterval(() => {
    currentSlide = (currentSlide + 1) % totalSlides;
    updateSlider(currentSlide);
  }, 5000);

  updateSlider(currentSlide);

  // === 4. Mahsulotlar (Kengaytirilgan Baza) ===
  const productsData = [
    {
      id: 1,
      title: "Library Stool Chair",
      price: 20,
      oldPrice: null,
      badge: { text: "New", color: "bg-[#2EA531]" },
      image:
        "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?q=80&w=400&auto=format&fit=crop",
      isFavorite: false,
    },
    {
      id: 2,
      title: "Library Stool Chair",
      price: 20,
      oldPrice: 30,
      badge: { text: "Sales", color: "bg-[#FE9A3E]" },
      image:
        "https://images.unsplash.com/photo-1592078615290-033ee584e267?q=80&w=400&auto=format&fit=crop",
      isFavorite: true,
    },
    {
      id: 3,
      title: "Library Stool Chair",
      price: 20,
      oldPrice: null,
      badge: null,
      image:
        "https://images.unsplash.com/photo-1503602642458-232111445657?q=80&w=400&auto=format&fit=crop",
      isFavorite: false,
    },
    {
      id: 4,
      title: "Library Stool Chair",
      price: 20,
      oldPrice: null,
      badge: null,
      image:
        "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=400&auto=format&fit=crop",
      isFavorite: false,
    },
    {
      id: 5,
      title: "Premium Lounge Chair",
      price: 35,
      oldPrice: 50,
      badge: { text: "Sales", color: "bg-[#FE9A3E]" },
      image:
        "https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?q=80&w=400&auto=format&fit=crop",
      isFavorite: false,
    },
    {
      id: 6,
      title: "Nordic Minimalist Chair",
      price: 25,
      oldPrice: null,
      badge: { text: "New", color: "bg-[#2EA531]" },
      image:
        "https://images.unsplash.com/photo-1580481072645-022f9a6dbf27?q=80&w=400&auto=format&fit=crop",
      isFavorite: false,
    },
    {
      id: 7,
      title: "Modern Dining Chair",
      price: 18,
      oldPrice: 25,
      badge: null,
      image:
        "https://images.unsplash.com/photo-1519947486511-46149fa0a254?q=80&w=400&auto=format&fit=crop",
      isFavorite: false,
    },
    {
      id: 8,
      title: "Wooden Accent Chair",
      price: 45,
      oldPrice: null,
      badge: null,
      image:
        "https://images.unsplash.com/photo-1541558869434-2840d308329a?q=80&w=400&auto=format&fit=crop",
      isFavorite: false,
    },
    {
      id: 9,
      title: "Ergonomic Office Chair",
      price: 60,
      oldPrice: 85,
      badge: { text: "Sales", color: "bg-[#FE9A3E]" },
      image:
        "https://images.unsplash.com/photo-1505797149-43b0069ec26b?q=80&w=400&auto=format&fit=crop",
      isFavorite: false,
    },
    {
      id: 10,
      title: "Luxury Velvet Armchair",
      price: 120,
      oldPrice: null,
      badge: null,
      image:
        "https://images.unsplash.com/photo-1586105251261-72a756497a11?q=80&w=400&auto=format&fit=crop",
      isFavorite: false,
    },
    {
      id: 11,
      title: "Simple Cafe Chair",
      price: 15,
      oldPrice: null,
      badge: { text: "New", color: "bg-[#2EA531]" },
      image:
        "https://images.unsplash.com/photo-1561677978-583a8c7a4b43?q=80&w=400&auto=format&fit=crop",
      isFavorite: false,
    },
    {
      id: 12,
      title: "Vintage Rocking Chair",
      price: 55,
      oldPrice: 70,
      badge: null,
      image:
        "https://images.unsplash.com/photo-1501183007986-d0d080b147f9?q=80&w=400&auto=format&fit=crop",
      isFavorite: false,
    },
  ];

  // === 5. Mahsulotlarni chizish (Responsive dizayn yaxshilandi) ===
  function renderProducts(products) {
    productsContainer.innerHTML = "";

    if (products.length === 0) {
      productsContainer.className =
        "col-span-full text-center py-12 text-gray-400 text-lg";
      productsContainer.innerHTML = `
        <i class="fa-solid fa-magnifying-glass text-4xl mb-3 text-gray-300 block"></i>
        No products found matching your search.
      `;
      return;
    }

    // Tiqilishib qolmasligi uchun mobile o'lchamda 1 ta yoki joy bo'lsa 2 ta mahsulot, gap-larni ham kattalashtirdik.
    productsContainer.className =
      "grid grid-cols-1 min-[500px]:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-10";

    products.forEach((product) => {
      const badgeHTML = product.badge
        ? `<span class="absolute top-3 left-3 md:top-4 md:left-4 ${product.badge.color} text-white text-[10px] md:text-[11px] font-semibold uppercase tracking-wider px-2 md:px-2.5 py-1 rounded-md z-10 shadow-xs">${product.badge.text}</span>`
        : "";

      const heartIconClass = product.isFavorite
        ? "fa-solid fa-heart text-red-500"
        : "fa-regular fa-heart text-gray-400";

      const priceHTML = product.oldPrice
        ? `<div class="flex items-center gap-2 mt-0.5">
             <span class="text-[#272343] font-bold text-sm md:text-base">$${product.price}</span>
             <span class="text-gray-400 line-through text-xs font-normal">$${product.oldPrice}</span>
           </div>`
        : `<span class="text-[#272343] font-bold text-sm md:text-base mt-0.5">$${product.price}</span>`;

      const card = document.createElement("div");
      card.className =
        "w-full bg-white rounded-2xl overflow-hidden flex flex-col group transition-all duration-300";

      card.innerHTML = `
        <div class="relative aspect-square bg-[#F0F2F3] rounded-2xl overflow-hidden flex items-center justify-center">
          ${badgeHTML}
          <button class="favorite-btn absolute top-3 right-3 md:top-4 md:right-4 bg-white hover:bg-gray-50 w-8 h-8 md:w-9 md:h-9 rounded-xl flex items-center justify-center shadow-xs hover:shadow-md transition-all duration-200 z-10 cursor-pointer md:opacity-0 md:group-hover:opacity-100" data-id="${product.id}">
            <i class="${heartIconClass} text-sm md:text-base transition-transform active:scale-90"></i>
          </button>
          <img src="${product.image}" alt="${product.title}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 select-none" />
        </div>
        <div class="mt-4 flex items-center justify-between gap-2 px-1">
          <div class="flex flex-col min-w-0">
            <h3 class="text-[#272343] group-hover:text-[#029FAE] transition-colors duration-200 text-[13px] sm:text-sm font-medium truncate">${product.title}</h3>
            ${priceHTML}
          </div>
          <button class="bg-gray-100 text-gray-600 group-hover:bg-[#029FAE] group-hover:text-white w-9 h-9 md:w-10 md:h-10 rounded-xl flex items-center justify-center shadow-xs transition-all duration-300 shrink-0 cursor-pointer">
            <i class="fa-solid fa-cart-shopping text-xs md:text-sm"></i>
          </button>
        </div>
      `;
      productsContainer.appendChild(card);
    });

    setupFavoriteEvents();
  }

  function setupFavoriteEvents() {
    document.querySelectorAll(".favorite-btn").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        e.preventDefault();
        const prodId = parseInt(btn.getAttribute("data-id"));
        const product = productsData.find((p) => p.id === prodId);

        if (product) {
          product.isFavorite = !product.isFavorite;
          const icon = btn.querySelector("i");
          icon.className = product.isFavorite
            ? "fa-solid fa-heart text-red-500 text-sm md:text-base transition-transform active:scale-90"
            : "fa-regular fa-heart text-gray-400 text-sm md:text-base transition-transform active:scale-90";
        }
      });
    });
  }

  // === 6. Qidiruvni ishga tushirish (Tugma bosilganda yoki Enter bosilganda) ===
  function executeSearch(inputElement) {
    const query = inputElement.value.toLowerCase().trim();
    const filteredProducts = productsData.filter((product) =>
      product.title.toLowerCase().includes(query),
    );
    renderProducts(filteredProducts);
  }

  // Desktop Qidiruv
  desktopSearchBtn.addEventListener("click", () =>
    executeSearch(desktopSearch),
  );
  desktopSearch.addEventListener("keypress", (e) => {
    if (e.key === "Enter") executeSearch(desktopSearch);
  });

  // Mobil Qidiruv
  mobileSearchBtn.addEventListener("click", () => executeSearch(mobileSearch));
  mobileSearch.addEventListener("keypress", (e) => {
    if (e.key === "Enter") executeSearch(mobileSearch);
  });

  // Dastlabki render
  renderProducts(productsData);
});
