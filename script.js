// ====================== DATA ======================
const mechanics = [
  {
    id: 1,
    name: "Rajesh Kumar",
    shop: "RK Bike Works",
    rating: 4.9,
    reviews: 234,
    experience: 12,
    distance: 1.2,
    available: true,
    specialties: ["Royal Enfield", "Honda", "Engine Work"],
    avatar: "RK",
  },
  {
    id: 2,
    name: "Suresh Patel",
    shop: "Speedy Motors",
    rating: 4.7,
    reviews: 189,
    experience: 8,
    distance: 2.5,
    available: true,
    specialties: ["Bajaj", "KTM", "Electrical"],
    avatar: "SP",
  },
  {
    id: 3,
    name: "Mohammed Ali",
    shop: "Ali Auto Care",
    rating: 4.8,
    reviews: 312,
    experience: 15,
    distance: 3.1,
    available: false,
    specialties: ["Yamaha", "Suzuki", "Carburetor"],
    avatar: "MA",
  },
  {
    id: 4,
    name: "Vikram Singh",
    shop: "VS Bike Service",
    rating: 4.6,
    reviews: 156,
    experience: 6,
    distance: 1.8,
    available: true,
    specialties: ["TVS", "Hero", "Brakes"],
    avatar: "VS",
  },
  {
    id: 5,
    name: "Anand Sharma",
    shop: "Sharma Garage",
    rating: 4.9,
    reviews: 278,
    experience: 10,
    distance: 4.2,
    available: true,
    specialties: ["All Brands", "Major Repairs"],
    avatar: "AS",
  },
  {
    id: 6,
    name: "Karthik Reddy",
    shop: "KR Motors",
    rating: 4.5,
    reviews: 98,
    experience: 5,
    distance: 2.8,
    available: true,
    specialties: ["KTM", "Duke", "Sports Bikes"],
    avatar: "KR",
  },
];

const bikeModels = {
  honda: [
    "Activa 6G",
    "Shine",
    "SP 125",
    "Unicorn",
    "Hornet 2.0",
    "CB350",
    "Dio",
  ],
  yamaha: ["FZ-S", "R15 V4", "MT-15", "Fascino", "Ray ZR", "FZ-X"],
  bajaj: [
    "Pulsar 150",
    "Pulsar NS200",
    "Dominar 400",
    "Platina",
    "CT 110",
    "Avenger",
  ],
  tvs: [
    "Apache RTR 160",
    "Apache RR 310",
    "Jupiter",
    "Ntorq",
    "Raider",
    "Ronin",
  ],
  royalenfield: [
    "Classic 350",
    "Bullet 350",
    "Meteor 350",
    "Hunter 350",
    "Himalayan",
    "Continental GT",
  ],
  ktm: [
    "Duke 200",
    "Duke 390",
    "RC 200",
    "RC 390",
    "Adventure 250",
    "Adventure 390",
  ],
  suzuki: ["Gixxer", "Access 125", "Burgman", "Intruder", "Gixxer SF"],
  hero: [
    "Splendor Plus",
    "HF Deluxe",
    "Passion Pro",
    "Glamour",
    "Xtreme 160R",
    "XPulse 200",
  ],
};

const spareParts = [
  {
    id: 1,
    name: "Engine Oil (1L)",
    category: "engine",
    brand: "honda",
    price: 450,
    badge: "Best Seller",
    icon: "fa-oil-can",
    compatible: "All Honda Models",
  },
  {
    id: 2,
    name: "Brake Pads (Front)",
    category: "brakes",
    brand: "bajaj",
    price: 380,
    badge: null,
    icon: "fa-compact-disc",
    compatible: "Pulsar Series",
  },
  {
    id: 3,
    name: "Air Filter",
    category: "filters",
    brand: "yamaha",
    price: 290,
    badge: "New",
    icon: "fa-wind",
    compatible: "FZ & R15 Series",
  },
  {
    id: 4,
    name: "Spark Plug (NGK)",
    category: "engine",
    brand: "honda",
    price: 180,
    badge: null,
    icon: "fa-bolt",
    compatible: "Universal",
  },
  {
    id: 5,
    name: "Chain Sprocket Kit",
    category: "engine",
    brand: "bajaj",
    price: 1250,
    badge: "Popular",
    icon: "fa-cog",
    compatible: "Pulsar 150/180",
  },
  {
    id: 6,
    name: "Headlight Assembly",
    category: "electrical",
    brand: "royalenfield",
    price: 2800,
    badge: null,
    icon: "fa-lightbulb",
    compatible: "Classic 350",
  },
  {
    id: 7,
    name: "Side Mirror (Pair)",
    category: "body",
    brand: "tvs",
    price: 450,
    badge: null,
    icon: "fa-car-side",
    compatible: "Apache Series",
  },
  {
    id: 8,
    name: "Battery (MF)",
    category: "electrical",
    brand: "honda",
    price: 1650,
    badge: "Top Rated",
    icon: "fa-car-battery",
    compatible: "Activa, Dio",
  },
  {
    id: 9,
    name: "Clutch Plate",
    category: "engine",
    brand: "yamaha",
    price: 850,
    badge: null,
    icon: "fa-circle",
    compatible: "FZ Series",
  },
  {
    id: 10,
    name: "Rear Shock Absorber",
    category: "suspension",
    brand: "ktm",
    price: 3200,
    badge: "Premium",
    icon: "fa-arrows-alt-v",
    compatible: "Duke Series",
  },
  {
    id: 11,
    name: "Oil Filter",
    category: "filters",
    brand: "royalenfield",
    price: 320,
    badge: null,
    icon: "fa-filter",
    compatible: "All RE Models",
  },
  {
    id: 12,
    name: "Indicator Set",
    category: "electrical",
    brand: "hero",
    price: 280,
    badge: null,
    icon: "fa-directions",
    compatible: "Splendor, Passion",
  },
];

const chatbotResponses = {
  "strange noise": {
    response:
      "Strange noises can indicate several issues:\n\n🔧 **Ticking noise**: Usually low oil level or valve adjustment needed\n🔧 **Rattling**: Loose parts or chain tension issue\n🔧 **Grinding**: Brake pads worn out\n🔧 **Knocking**: Engine problem — needs immediate attention\n\nWould you like to book a diagnostic checkup?",
    quickReplies: ["Book checkup", "More about engine noise", "Pricing"],
  },
  "not starting": {
    response:
      "If your bike won't start, try these quick checks:\n\n1️⃣ **Kill switch** — Make sure it's in ON position\n2️⃣ **Fuel** — Check if there's enough fuel\n3️⃣ **Battery** — Listen for clicking sound\n4️⃣ **Kickstart** — Try kickstart if available\n\nIf none work, I can help book a mechanic!",
    quickReplies: [
      "Book emergency service",
      "Battery replacement",
      "Spark plug check",
    ],
  },
  pricing: {
    response:
      "Here's our service pricing:\n\n✅ **Routine Checkup**: ₹499\n✅ **Minor Service**: ₹999\n✅ **Major Service**: ₹2,499\n\n*Spare parts charged extra at MRP*",
    quickReplies: ["Book routine", "Book minor", "Book major"],
  },
  book: {
    response:
      "Great! I can help you book a service.\n\n1️⃣ Use the **Book Service** button above\n2️⃣ Or tell me your preferred date and I'll guide you\n\nWhat type of service do you need?",
    quickReplies: ["Routine checkup", "Minor service", "Major service"],
  },
  "oil change": {
    response:
      "Oil change is crucial for engine health!\n\n📍 **Frequency**: Every 2000–3000 km or 3 months\n💰 **Cost**: ₹300–600 (including oil)\n⏱️ **Time**: 20–30 minutes\n\nOur minor service includes oil change!",
    quickReplies: ["Book oil change", "Minor service"],
  },
  brake: {
    response:
      "Brake issues need immediate attention!\n\n⚠️ **Squealing**: Brake pads wearing out\n⚠️ **Soft lever**: Air in lines or fluid low\n⚠️ **Pulling to side**: Uneven pad wear\n⚠️ **Vibration**: Warped disc\n\nBrake pad replacement: ₹300–800",
    quickReplies: ["Book brake service", "Full service"],
  },
  default: {
    response:
      "I'm not sure I understood that. Here are some things I can help with:\n\n• Diagnosing bike problems\n• Service pricing & booking\n• Spare parts information\n• Maintenance tips\n\nTry asking about a specific issue!",
    quickReplies: [
      "Strange noise",
      "Bike not starting",
      "Service pricing",
      "Book service",
    ],
  },
};

let cart = [];

function getCurrentUser() {
  try {
    return JSON.parse(localStorage.getItem("currentUser"));
  } catch (error) {
    return null;
  }
}

function handleAuthClick(event) {
  const user = getCurrentUser();
  const authMenu = document.getElementById("authMenu");
  if (user && user.loggedIn) {
    event.stopPropagation();
    authMenu.style.display = authMenu.style.display === "block" ? "none" : "block";
    return;
  }
  window.location.href = "login.html";
}

function closeAuthMenu() {
  const authMenu = document.getElementById("authMenu");
  if (authMenu) authMenu.style.display = "none";
}

function updateAuthButton() {
  const authBtn = document.getElementById("authBtn");
  const user = getCurrentUser();
  if (!authBtn) return;
  if (user && user.loggedIn) {
    const displayName = user.name || user.email || "User";
    authBtn.innerHTML = `<i class="fas fa-user"></i> ${displayName} <i class="fas fa-chevron-down"></i>`;
    authBtn.classList.remove("btn-secondary");
    authBtn.classList.add("btn-primary");
  } else {
    authBtn.innerHTML = `<i class="fas fa-sign-in-alt"></i> Login`;
    authBtn.classList.remove("btn-primary");
    authBtn.classList.add("btn-secondary");
  }
}

function goToDashboard() {
  closeAuthMenu();
  window.location.href = "dashboard.html";
}

function logout() {
  localStorage.removeItem("currentUser");
  closeAuthMenu();
  updateAuthButton();
  showToast("You have been logged out", "success");
  setTimeout(() => {
    window.location.href = "index.html";
  }, 900);
}

function getUserOrders() {
  try {
    return JSON.parse(localStorage.getItem("userOrders")) || [];
  } catch (error) {
    return [];
  }
}

function openProfileModal() {
  const user = getCurrentUser();
  if (!user || !user.loggedIn) {
    window.location.href = "login.html";
    return;
  }

  document.getElementById("profileName").textContent = `${user.name || user.email || 'Your'} Profile`;
  document.getElementById("profileRole").textContent = `Role: ${user.type === 'mechanic' ? 'Mechanic' : 'Customer'}`;

  const orders = getUserOrders().filter((order) => order.userId === user.id);
  if (!orders.length) {
    document.getElementById("profileSummary").innerHTML = `
      <p><strong>No orders or service bookings found yet.</strong></p>
      <p>Once you place an order or book a service, it will appear here with status updates.</p>
      <ul style="margin-top:1rem;line-height:1.8;">
        <li>Customer: Browse products, add to cart, checkout</li>
        <li>Mechanic: Register and view assigned services</li>
      </ul>
    `;
  } else {
    document.getElementById("profileSummary").innerHTML = orders
      .map(
        (order) => `
          <div style="margin-bottom:1rem;padding:0.95rem 1rem;border:1px solid var(--muted);border-radius:12px;">
            <strong>Order ID:</strong> ${order.id}<br>
            <strong>Status:</strong> ${order.status || 'Pending'}<br>
            <strong>Total:</strong> ₹${order.total.toLocaleString('en-IN')}<br>
            <strong>Service:</strong> ${order.service || 'N/A'}<br>
            <strong>Delivery / Booking:</strong> ${order.eta || 'Upcoming'}
          </div>
        `,
      )
      .join("");
  }

  document.getElementById("profileModal").classList.add("active");
}

function closeProfileModal() {
  document.getElementById("profileModal").classList.remove("active");
}

function addToCart(partId) {
  const part = spareParts.find((p) => p.id === partId);
  if (!part) return;
  const existing = cart.find((i) => i.id === partId);
  if (existing) existing.quantity++;
  else cart.push({ ...part, quantity: 1 });
  updateCartUI();
  showToast(`✓ ${part.name} added to cart`, "success");
}

function removeFromCart(partId) {
  cart = cart.filter((i) => i.id !== partId);
  updateCartUI();
  showToast("Item removed from cart", "success");
}

function updateCartUI() {
  const total = cart.reduce((s, i) => s + i.price * i.quantity, 0);
  document.getElementById("cartCount").textContent = cart.reduce(
    (s, i) => s + i.quantity,
    0,
  );
  document.getElementById("cartTotal").textContent =
    "₹" + total.toLocaleString("en-IN");
  const cartItems = document.getElementById("cartItems");
  if (!cart.length) {
    cartItems.innerHTML =
      '<p style="text-align:center;color:var(--gray);padding:2rem;">Your cart is empty</p>';
    return;
  }
  cartItems.innerHTML = cart
    .map(
      (item) => `
        <div class="cart-item">
            <div class="cart-item-image"><i class="fas ${item.icon}" style="color:var(--secondary);font-size:1.4rem;"></i></div>
            <div class="cart-item-details">
                <div class="cart-item-title">${item.name}</div>
                <div style="font-size:0.82rem;color:var(--gray);">Qty: ${item.quantity}</div>
                <div class="cart-item-price">₹${(item.price * item.quantity).toLocaleString("en-IN")}</div>
            </div>
            <i class="fas fa-trash-alt cart-item-remove" onclick="removeFromCart(${item.id})"></i>
        </div>
    `,
    )
    .join("");
}

function toggleCart() {
  document.getElementById("cartSidebar").classList.toggle("active");
  document.getElementById("cartOverlay").classList.toggle("active");
}

function checkout() {
  const user = getCurrentUser();
  if (!cart.length) {
    showToast("Your cart is empty", "error");
    return;
  }
  if (!user || !user.loggedIn) {
    showToast("Please login to confirm checkout", "error");
    setTimeout(() => {
      window.location.href = "login.html";
    }, 1200);
    return;
  }
  showToast("Proceeding to checkout...", "success");
  setTimeout(() => {
    document.getElementById("successModal").classList.add("active");
    document.getElementById("modalMessage").textContent =
      "Your order has been placed! We will contact you within 2 hours for delivery confirmation.";
    const orders = getUserOrders();
    const total = cart.reduce((s, i) => s + i.price * i.quantity, 0);
    orders.push({
      id: Date.now(),
      userId: user.id,
      service: "Spare parts order",
      status: "Confirmed",
      eta: "2-4 days",
      total,
      items: cart.map((i) => ({ name: i.name, qty: i.quantity })),
    });
    localStorage.setItem("userOrders", JSON.stringify(orders));
    cart = [];
    updateCartUI();
    toggleCart();
  }, 1200);
}

function renderMechanics(list = mechanics) {
  const grid = document.getElementById("mechanicsGrid");
  grid.innerHTML = list
    .map(
      (m) => `
        <div class="mechanic-card">
            <div class="mechanic-header">
                <div class="mechanic-avatar">${m.avatar}</div>
                <div class="mechanic-info">
                    <h3>${m.name}</h3>
                    <p><i class="fas fa-store" style="font-size:0.8rem;margin-right:4px;"></i>${m.shop}</p>
                </div>
            </div>
            <div class="mechanic-body">
                <div class="mechanic-stats">
                    <div class="mechanic-stat">
                        <div class="mechanic-stat-value rating"><i class="fas fa-star"></i> ${m.rating}</div>
                        <div class="mechanic-stat-label">${m.reviews} reviews</div>
                    </div>
                    <div class="mechanic-stat">
                        <div class="mechanic-stat-value">${m.experience} yrs</div>
                        <div class="mechanic-stat-label">Experience</div>
                    </div>
                    <div class="mechanic-stat">
                        <div class="mechanic-stat-value">${m.distance} km</div>
                        <div class="mechanic-stat-label">Distance</div>
                    </div>
                </div>
                <div class="availability">
                    <div class="availability-dot ${m.available ? "" : "busy"}"></div>
                    <span style="color:${m.available ? "var(--success)" : "var(--primary)"}; font-weight:600;">${m.available ? "Available Now" : "Busy · Available in ~2 hrs"}</span>
                </div>
                <div class="mechanic-specialties">${m.specialties.map((s) => `<span class="specialty-tag">${s}</span>`).join("")}</div>
                <div class="mechanic-actions">
                    <button class="btn btn-outline-primary" style="border-color:var(--light-gray);color:var(--gray);font-size:0.85rem;" onclick="showToast('Calling ${m.name}...','success')">
                        <i class="fas fa-phone"></i> Call
                    </button>
                    <button class="btn btn-primary" onclick="selectMechanic(${m.id})">
                        <i class="fas fa-calendar-check"></i> Book
                    </button>
                </div>
            </div>
        </div>
    `,
    )
    .join("");
  const sel = document.getElementById("preferredMechanic");
  if (sel) {
    sel.innerHTML =
      '<option value="">Any Available</option>' +
      mechanics
        .filter((m) => m.available)
        .map(
          (m) => `<option value="${m.id}">${m.name} — ${m.shop}</option>`,
        )
        .join("");
  }
}

function searchMechanics() {
  const loc = document.getElementById("locationInput").value.trim();
  if (!loc) {
    showToast("Please enter a location", "error");
    return;
  }
  showToast("Searching mechanics near " + loc + "...", "success");
  const shuffled = [...mechanics]
    .sort(() => Math.random() - 0.5)
    .map((m) => ({
      ...m,
      distance: +(Math.random() * 5 + 0.5).toFixed(1),
    }))
    .sort((a, b) => a.distance - b.distance);
  setTimeout(() => {
    renderMechanics(shuffled);
    showToast(`Found ${shuffled.length} mechanics near ${loc}`, "success");
  }, 800);
}

function getCurrentLocation() {
  if (!navigator.geolocation) {
    showToast("Geolocation not supported", "error");
    return;
  }
  showToast("Getting your location...", "success");
  navigator.geolocation.getCurrentPosition(
    () => {
      document.getElementById("locationInput").value = "Current Location";
      searchMechanics();
    },
    () =>
      showToast(
        "Could not get location. Please enter manually.",
        "error",
      ),
  );
}

function selectMechanic(id) {
  const m = mechanics.find((x) => x.id === id);
  if (!m) return;
  const sel = document.getElementById("preferredMechanic");
  if (sel) sel.value = id;
  document.querySelector('a[href="#booking"]')?.click();
  showToast(`Selected ${m.name} as your mechanic`, "success");
}

function renderParts(list = spareParts) {
  document.getElementById("partsGrid").innerHTML = list
    .map(
      (p) => `
        <div class="part-card">
            <div class="part-image">
                <i class="fas ${p.icon}"></i>
                ${p.badge ? `<span class="part-badge">${p.badge}</span>` : ""}
            </div>
            <div class="part-details">
                <h3>${p.name}</h3>
                <p>${p.compatible}</p>
                <p class="part-compatibility"><i class="fas fa-tag"></i> ${p.category.charAt(0).toUpperCase() + p.category.slice(1)}</p>
                <div class="part-price-row">
                    <span class="part-price">₹${p.price.toLocaleString("en-IN")}</span>
                    <button class="btn-add-cart" onclick="addToCart(${p.id})">
                        <i class="fas fa-cart-plus"></i> Add
                    </button>
                </div>
            </div>
        </div>
    `,
    )
    .join("");
}

function filterParts() {
  const brand = document.getElementById("brandFilter").value;
  const category = document.getElementById("categoryFilter").value;
  const search = document
    .getElementById("searchParts")
    .value.toLowerCase();

  if (brand) {
    const models = bikeModels[brand] || [];
    document.getElementById("modelFilter").innerHTML =
      '<option value="">All Models</option>' +
      models
        .map((m) => `<option value="${m.toLowerCase()}">${m}</option>`)
        .join("");
  }

  let filtered = spareParts;
  if (brand) filtered = filtered.filter((p) => p.brand === brand);
  if (category)
    filtered = filtered.filter((p) => p.category === category);
  if (search)
    filtered = filtered.filter(
      (p) =>
        p.name.toLowerCase().includes(search) ||
        p.compatible.toLowerCase().includes(search),
    );
  renderParts(filtered);
}

let currentStep = 1;
let bookingData = {};

function nextStep() {
  if (!validateStep(currentStep)) return;
  saveStepData();
  if (currentStep < 4) {
    document
      .getElementById(`step${currentStep}`)
      .classList.remove("active");
    document
      .querySelector(`.step[data-step="${currentStep}"]`)
      .classList.remove("active");
    document
      .querySelector(`.step[data-step="${currentStep}"]`)
      .classList.add("completed");
    currentStep++;
    document.getElementById(`step${currentStep}`).classList.add("active");
    document
      .querySelector(`.step[data-step="${currentStep}"]`)
      .classList.add("active");
    if (currentStep === 4) {
      renderBookingSummary();
      document.getElementById("nextBtn").innerHTML =
        '<i class="fas fa-check"></i> Confirm Booking';
    }
    document.getElementById("prevBtn").style.display = "inline-flex";
  } else {
    submitBooking();
  }
}

function prevStep() {
  if (currentStep <= 1) return;
  document
    .getElementById(`step${currentStep}`)
    .classList.remove("active");
  document
    .querySelector(`.step[data-step="${currentStep}"]`)
    .classList.remove("active");
  currentStep--;
  document.getElementById(`step${currentStep}`).classList.add("active");
  document
    .querySelector(`.step[data-step="${currentStep}"]`)
    .classList.add("active");
  document
    .querySelector(`.step[data-step="${currentStep}"]`)
    .classList.remove("completed");
  document.getElementById("nextBtn").innerHTML =
    'Next <i class="fas fa-arrow-right"></i>';
  if (currentStep === 1)
    document.getElementById("prevBtn").style.display = "none";
}

function validateStep(step) {
  const err = (msg) => {
    showToast(msg, "error");
    return false;
  };
  if (step === 1 && !document.getElementById("serviceType").value)
    return err("Please select a service type");
  if (step === 2) {
    const name = document.getElementById("customerName").value.trim();
    const phone = document.getElementById("customerPhone").value.trim();
    const email = document.getElementById("customerEmail").value.trim();
    const brand = document.getElementById("bikeBrand").value;
    const model = document.getElementById("bikeModel").value.trim();
    if (!name || !phone || !email || !brand || !model)
      return err("Please fill all required fields");
    if (!/^\d{10}$/.test(phone))
      return err("Please enter a valid 10-digit phone number");
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      return err("Please enter a valid email address");
  }
  if (step === 3) {
    if (!document.getElementById("serviceDate").value)
      return err("Please select a date");
    if (!document.querySelector(".time-slot.selected"))
      return err("Please select a time slot");
  }
  return true;
}

function saveStepData() {
  const sel = document.getElementById("serviceType");
  if (currentStep === 1) {
    bookingData.service =
      sel.options[sel.selectedIndex].text.split(" — ")[0];
    bookingData.servicePrice =
      parseInt(sel.options[sel.selectedIndex].dataset.price) || 0;
    bookingData.addons = [];
    document.querySelectorAll(".addon:checked").forEach((cb) => {
      bookingData.addons.push({
        name: cb.parentElement.textContent.trim().split("+")[0].trim(),
        price: parseInt(cb.value),
      });
    });
  }
  if (currentStep === 2) {
    bookingData.name = document.getElementById("customerName").value;
    bookingData.phone = document.getElementById("customerPhone").value;
    bookingData.email = document.getElementById("customerEmail").value;
    bookingData.bikeBrand = document.getElementById("bikeBrand").value;
    bookingData.bikeModel = document.getElementById("bikeModel").value;
    bookingData.regNo = document.getElementById("bikeRegNo").value;
    bookingData.address = document.getElementById("serviceAddress").value;
  }
  if (currentStep === 3) {
    bookingData.date = document.getElementById("serviceDate").value;
    bookingData.time =
      document.querySelector(".time-slot.selected")?.dataset.time || "";
    bookingData.mechanic =
      document.getElementById("preferredMechanic").value;
    bookingData.notes = document.getElementById(
      "specialInstructions",
    ).value;
  }
}

function renderBookingSummary() {
  const addonsTotal = (bookingData.addons || []).reduce(
    (s, a) => s + a.price,
    0,
  );
  const total = bookingData.servicePrice + addonsTotal;
  const mech = mechanics.find((m) => m.id == bookingData.mechanic);
  document.getElementById("bookingSummary").innerHTML = `
        <div class="summary-item"><span>Service Type</span><span>${bookingData.service}</span></div>
        <div class="summary-item"><span>Service Charge</span><span>₹${bookingData.servicePrice}</span></div>
        ${(bookingData.addons || []).map((a) => `<div class="summary-item"><span>${a.name}</span><span>₹${a.price}</span></div>`).join("")}
        <div class="summary-item"><span>Bike</span><span>${bookingData.bikeBrand} ${bookingData.bikeModel}</span></div>
        <div class="summary-item"><span>Date & Time</span><span>${formatDate(bookingData.date)} at ${formatTime(bookingData.time)}</span></div>
        <div class="summary-item"><span>Mechanic</span><span>${mech ? mech.name : "Any Available"}</span></div>
        <div class="summary-item"><span>Contact</span><span>${bookingData.phone}</span></div>
        <div class="summary-item summary-total"><span>Total Amount</span><span>₹${total.toLocaleString("en-IN")}</span></div>
        <p style="font-size:0.82rem;color:var(--gray);margin-top:0.8rem;"><i class="fas fa-info-circle"></i> Spare parts and additional repairs charged extra at actual cost</p>
    `;
}

function submitBooking() {
  showToast("Processing your booking...", "success");
  setTimeout(() => {
    document.getElementById("modalMessage").textContent =
      `Your ${bookingData.service} has been confirmed for ${formatDate(bookingData.date)} at ${formatTime(bookingData.time)}. Confirmation sent to ${bookingData.phone}.`;
    document.getElementById("successModal").classList.add("active");
    resetBookingForm();
  }, 1400);
}

function resetBookingForm() {
  currentStep = 1;
  bookingData = {};
  document
    .querySelectorAll(".booking-form")
    .forEach((f) => f.classList.remove("active"));
  document.getElementById("step1").classList.add("active");
  document
    .querySelectorAll(".step")
    .forEach((s) => s.classList.remove("active", "completed"));
  document.querySelector('.step[data-step="1"]').classList.add("active");
  document.getElementById("prevBtn").style.display = "none";
  document.getElementById("nextBtn").innerHTML =
    'Next <i class="fas fa-arrow-right"></i>';
  document
    .querySelectorAll(
      "#booking input, #booking select, #booking textarea",
    )
    .forEach((el) => {
      if (el.type === "checkbox") el.checked = false;
      else el.value = "";
    });
  document
    .querySelectorAll(".time-slot")
    .forEach((ts) => ts.classList.remove("selected"));
}

function formatDate(s) {
  if (!s) return "";
  return new Date(s).toLocaleDateString("en-IN", {
    weekday: "short",
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}
function formatTime(s) {
  if (!s) return "";
  const [h, m] = s.split(":");
  const hr = parseInt(h);
  return `${hr % 12 || 12}:${m || "00"} ${hr >= 12 ? "PM" : "AM"}`;
}

function updateBookingModels() {
  /* kept for compatibility */
}

function toggleChatbot() {
  const c = document.getElementById("chatbot");
  c.classList.toggle("active");
  const icon = document.getElementById("chatToggleIcon");
  icon.className = c.classList.contains("active")
    ? "fas fa-times"
    : "fas fa-comments";
}

function sendMessage() {
  const input = document.getElementById("chatInput");
  const msg = input.value.trim();
  if (!msg) return;
  addMessage(msg, "user");
  input.value = "";
  showTypingIndicator();
  setTimeout(
    () => {
      removeTypingIndicator();
      const res = getChatbotResponse(msg);
      addMessage(res.response, "bot", res.quickReplies);
    },
    800 + Math.random() * 700,
  );
}

function sendQuickReply(msg) {
  document.getElementById("chatInput").value = msg;
  sendMessage();
}

function handleChatKeypress(e) {
  if (e.key === "Enter") sendMessage();
}

function addMessage(text, type, quickReplies = null) {
  const c = document.getElementById("chatMessages");
  const div = document.createElement("div");
  div.className = `message ${type}`;
  div.innerHTML = text
    .replace(/\n/g, "<br>")
    .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");
  if (quickReplies) {
    const qr = document.createElement("div");
    qr.className = "quick-replies";
    qr.innerHTML = quickReplies
      .map(
        (r) =>
          `<span class="quick-reply" onclick="sendQuickReply('${r}')">${r}</span>`,
      )
      .join("");
    div.appendChild(qr);
  }
  c.appendChild(div);
  c.scrollTop = c.scrollHeight;
}

function showTypingIndicator() {
  const c = document.getElementById("chatMessages");
  const t = document.createElement("div");
  t.className = "typing-indicator";
  t.id = "typingIndicator";
  t.innerHTML = "<span></span><span></span><span></span>";
  c.appendChild(t);
  c.scrollTop = c.scrollHeight;
}
function removeTypingIndicator() {
  document.getElementById("typingIndicator")?.remove();
}

function getChatbotResponse(msg) {
  const lower = msg.toLowerCase();
  for (const [key, data] of Object.entries(chatbotResponses)) {
    if (key !== "default" && lower.includes(key)) return data;
  }
  if (/^(hi|hello|hey|namaste)/.test(lower))
    return {
      response:
        "Hello! 👋 Welcome to BikeWrench Pro. How can I help with your bike today?",
      quickReplies: [
        "Book service",
        "Find mechanic",
        "Check pricing",
        "Strange noise",
      ],
    };
  if (lower.includes("thank"))
    return {
      response:
        "You're welcome! 😊 Is there anything else I can help you with?",
      quickReplies: ["Book service", "Find mechanic"],
    };
  return chatbotResponses.default;
}

function submitContactForm(e) {
  e.preventDefault();
  const phone = document.getElementById("contactPhone").value;
  if (!/^\d{10}$/.test(phone)) {
    showToast("Please enter a valid 10-digit phone number", "error");
    return;
  }
  const name = document.getElementById("contactName").value;
  showToast("Submitting your request...", "success");
  setTimeout(() => {
    document.getElementById("modalMessage").textContent =
      `Thank you, ${name}! A mechanic will call you at ${phone} within 2 hours.`;
    document.getElementById("successModal").classList.add("active");
    document.getElementById("contactForm").reset();
  }, 1200);
}

function toggleMobileMenu() {
  const nl = document.getElementById("navLinks");
  nl.classList.toggle("active");
  document.getElementById("menuIcon").className = nl.classList.contains(
    "active",
  )
    ? "fas fa-times"
    : "fas fa-bars";
}

function closeModal() {
  document.getElementById("successModal").classList.remove("active");
}

function showToast(message, type = "success") {
  const t = document.getElementById("toast");
  t.textContent = message;
  t.className = `toast ${type} show`;
  clearTimeout(t._timer);
  t._timer = setTimeout(() => t.classList.remove("show"), 3200);
}

function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
  const isDark = document.body.classList.contains("dark-mode");
  document.getElementById("darkIcon").className = isDark
    ? "fas fa-sun"
    : "fas fa-moon";
  localStorage.setItem("bwp-dark", isDark ? "1" : "0");
}

function initScrollEffects() {
  window.addEventListener(
    "scroll",
    () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      document.getElementById("scrollProgress").style.width =
        (scrollTop / docHeight) * 100 + "%";

      document
        .getElementById("navbar")
        .classList.toggle("scrolled", scrollTop > 60);

      document
        .getElementById("backToTop")
        .classList.toggle("visible", scrollTop > 400);

      const sections = document.querySelectorAll("section[id], .stats");
      let current = "";
      sections.forEach((s) => {
        if (window.scrollY >= s.offsetTop - 100) current = s.id;
      });
      document.querySelectorAll(".nav-link").forEach((a) => {
        a.classList.toggle(
          "active",
          a.getAttribute("href") === "#" + current,
        );
      });
    },
    { passive: true },
  );

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          const num = entry.target.querySelector("[data-target]");
          if (num && !num.dataset.counted) {
            num.dataset.counted = "1";
            animateCount(num);
          }
        }
      });
    },
    { threshold: 0.15 },
  );

  document
    .querySelectorAll(".reveal")
    .forEach((el) => observer.observe(el));
  document
    .querySelectorAll(".stat-item")
    .forEach((el) => observer.observe(el));
}

function animateCount(el) {
  const target = parseFloat(el.dataset.target);
  const isDecimal = el.dataset.decimal === "1";
  const duration = 1800;
  const start = performance.now();
  const update = (time) => {
    const elapsed = time - start;
    const progress = Math.min(elapsed / duration, 1);
    const ease = 1 - Math.pow(1 - progress, 3);
    const value = target * ease;
    el.textContent = isDecimal
      ? value.toFixed(1)
      : target >= 1000
        ? Math.floor(value).toLocaleString("en-IN")
        : Math.floor(value);
    if (progress < 1) requestAnimationFrame(update);
    else
      el.textContent = isDecimal
        ? target.toFixed(1)
        : target >= 1000
          ? target.toLocaleString("en-IN")
          : target;
  };
  requestAnimationFrame(update);
}

function initParticles() {
  const container = document.getElementById("heroParticles");
  for (let i = 0; i < 22; i++) {
    const span = document.createElement("span");
    span.style.cssText = `
            left: ${Math.random() * 100}%;
            top: ${30 + Math.random() * 60}%;
            --dur: ${5 + Math.random() * 8}s;
            --delay: ${Math.random() * 6}s;
            width: ${2 + Math.random() * 5}px;
            height: ${2 + Math.random() * 5}px;
            opacity: ${0.3 + Math.random() * 0.5};
        `;
    container.appendChild(span);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  if (localStorage.getItem("bwp-dark") === "1") {
    document.body.classList.add("dark-mode");
    document.getElementById("darkIcon").className = "fas fa-sun";
  }

  renderMechanics();
  renderParts();
  updateAuthButton();
  initScrollEffects();
  initParticles();

  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  document.getElementById("serviceDate").min = tomorrow
    .toISOString()
    .split("T")[0];

  document.querySelectorAll(".service-card").forEach((card) => {
    card.addEventListener("click", function (e) {
      if (e.target.tagName === "A" || e.target.closest("a")) return;
      document
        .querySelectorAll(".service-card")
        .forEach((c) => c.classList.remove("selected"));
      this.classList.add("selected");
      const serviceType = document.getElementById("serviceType");
      for (const opt of serviceType.options) {
        if (opt.value === this.dataset.service) {
          opt.selected = true;
          break;
        }
      }
    });
  });

  document.querySelectorAll(".time-slot").forEach((slot) => {
    slot.addEventListener("click", function () {
      if (this.classList.contains("unavailable")) return;
      document
        .querySelectorAll(".time-slot")
        .forEach((s) => s.classList.remove("selected"));
      this.classList.add("selected");
    });
  });

  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      const href = this.getAttribute("href");
      if (href === "#") return;
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
        document.getElementById("navLinks").classList.remove("active");
        document.getElementById("menuIcon").className = "fas fa-bars";
      }
    });
  });

  document.addEventListener("click", (event) => {
    if (!event.target.closest("#authDropdown")) {
      closeAuthMenu();
    }
  });
});
