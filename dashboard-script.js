function getCurrentUser() {
  try {
    return JSON.parse(localStorage.getItem('currentUser'));
  } catch (error) {
    return null;
  }
}

function getUserOrders() {
  try {
    return JSON.parse(localStorage.getItem('userOrders')) || [];
  } catch (error) {
    return [];
  }
}

function formatCurrency(amount) {
  return '₹' + amount.toLocaleString('en-IN');
}

let currentOrderFilter = 'all';

function renderDashboard() {
  const user = getCurrentUser();
  if (!user || !user.loggedIn) {
    window.location.href = 'login.html';
    return;
  }

  const profileName = document.getElementById('profileName');
  const profileEmail = document.getElementById('profileEmail');
  const profileRole = document.getElementById('profileRole');
  const profileMember = document.getElementById('profileMember');
  const dashboardName = document.getElementById('dashboardName');
  const totalOrdersEl = document.getElementById('totalOrders');
  const pendingOrdersEl = document.getElementById('pendingOrders');
  const completedOrdersEl = document.getElementById('completedOrders');
  const totalSpentEl = document.getElementById('totalSpent');
  const pendingCard = document.getElementById('pendingCard');
  const completedCard = document.getElementById('completedCard');
  const spentCard = document.getElementById('spentCard');
  const typeCard = document.getElementById('typeCard');

  const orders = getUserOrders().filter((order) => order.userId === user.id);
  const pending = orders.filter((order) => order.status !== 'Completed' && order.status !== 'Delivered').length;
  const completed = orders.filter((order) => order.status === 'Completed' || order.status === 'Delivered').length;
  const totalSpent = orders.reduce((sum, order) => sum + (order.total || 0), 0);

  dashboardName.textContent = user.name || user.email || 'Rider';
  profileName.textContent = user.name || 'Rider';
  profileEmail.textContent = user.email || 'Not available';
  profileRole.textContent = user.type === 'mechanic' ? 'Mechanic' : 'Customer';
  profileMember.textContent = new Date(user.id).toLocaleDateString('en-IN');
  totalOrdersEl.textContent = orders.length;
  pendingOrdersEl.textContent = pending;
  completedOrdersEl.textContent = completed;
  totalSpentEl.textContent = formatCurrency(totalSpent);
  pendingCard.textContent = pending;
  completedCard.textContent = completed;
  spentCard.textContent = formatCurrency(totalSpent);
  typeCard.textContent = user.type === 'mechanic' ? 'Mechanic' : 'Customer';

  renderOrders(orders, currentOrderFilter);
}

function setOrderFilter(filter) {
  currentOrderFilter = filter;
  document.querySelectorAll('.filter-btn').forEach((button) => {
    button.classList.toggle('active', button.textContent.trim().toLowerCase() === filter);
  });
  const user = getCurrentUser();
  if (!user || !user.loggedIn) return;
  const orders = getUserOrders().filter((order) => order.userId === user.id);
  renderOrders(orders, filter);
}

function renderOrders(orders, filter) {
  const ordersList = document.getElementById('ordersList');
  const filtered = orders.filter((order) => {
    if (filter === 'pending') {
      return order.status !== 'Completed' && order.status !== 'Delivered';
    }
    if (filter === 'completed') {
      return order.status === 'Completed' || order.status === 'Delivered';
    }
    return true;
  });

  if (!filtered.length) {
    ordersList.innerHTML = `<p style="color: var(--gray); padding: 1.5rem; background: var(--bg-secondary); border-radius: 18px;">No ${filter} orders found.</p>`;
    return;
  }

  ordersList.innerHTML = filtered
    .map((order) => `
      <div class="order-item">
        <div style="display:flex;justify-content:space-between;align-items:flex-start;gap:1rem;flex-wrap:wrap;">
          <div>
            <strong>Order ID:</strong> ${order.id}<br>
            <strong>Status:</strong> ${order.status || 'Pending'}<br>
            <strong>Service:</strong> ${order.service || 'Spare parts order'}
          </div>
          <div style="text-align:right; color: var(--secondary); font-weight: 700; font-size: 1.05rem;">
            ${formatCurrency(order.total || 0)}
          </div>
        </div>
        <div class="order-tags">
          <span class="order-tag">ETA: ${order.eta || 'TBD'}</span>
          <span class="order-tag">Items: ${order.items ? order.items.length : 0}</span>
        </div>
        <div style="margin-top:0.75rem; color: var(--gray);">
          ${order.items ? order.items.map((item) => `${item.name} x${item.qty}`).join(' · ') : 'No item details available.'}
        </div>
      </div>
    `)
    .join('');
}

function logout() {
  localStorage.removeItem('currentUser');
  window.location.href = 'index.html';
}

window.addEventListener('DOMContentLoaded', renderDashboard);
