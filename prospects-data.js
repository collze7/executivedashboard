// Current calendar state
let currentDate = new Date();
let calendarEvents = [];

// Navigation
function navigateTo(page) {
  // Update nav links
  document.querySelectorAll('.nav-link').forEach(link => {
    link.classList.remove('active');
    if (link.dataset.page === page) {
      link.classList.add('active');
    }
  });
  
  // Update pages
  document.querySelectorAll('.page').forEach(p => {
    p.classList.remove('active');
  });
  const targetPage = document.getElementById(`page-${page}`);
  if (targetPage) {
    targetPage.classList.add('active');
  }
}

// Refresh Dashboard
function refreshDashboard() {
  const btn = event.target.closest('button');
  const icon = btn.querySelector('i');
  icon.style.animation = 'spin 1s linear';
  setTimeout(() => {
    icon.style.animation = '';
    lucide.createIcons();
  }, 1000);
}

function refreshProspectsFeed() {
  const btn = event.target.closest('button');
  if (btn) {
    const icon = btn.querySelector('i');
    if (icon) {
      icon.style.animation = 'spin 1s linear';
      setTimeout(() => {
        icon.style.animation = '';
        lucide.createIcons();
      }, 1000);
    }
  }
}

function refreshCommitments() {
  const btn = event.target.closest('button');
  if (btn) {
    const icon = btn.querySelector('i');
    if (icon) {
      icon.style.animation = 'spin 1s linear';
      setTimeout(() => {
        icon.style.animation = '';
        renderCommitments();
        lucide.createIcons();
      }, 1000);
    }
  }
}

// Filter Prospects
function filterProspects(filter) {
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  event.target.closest('button').classList.add('active');
  
  document.querySelectorAll('.account-card').forEach(card => {
    if (filter === 'all') {
      card.style.display = '';
    } else {
      card.style.display = card.dataset.urgency === filter ? '' : 'none';
    }
  });
}

// Calendar Functions
function renderCalendar() {
  const monthYear = document.getElementById('calendarMonthYear');
  const daysContainer = document.getElementById('calendarDays');
  
  if (!monthYear || !daysContainer) return;
  
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();
  
  monthYear.textContent = currentDate.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
  
  const firstDay = new Date(year, month, 1);
  const lastDay = new Date(year, month + 1, 0);
  const prevLastDay = new Date(year, month, 0);
  
  const firstDayWeek = firstDay.getDay();
  const lastDate = lastDay.getDate();
  const prevLastDate = prevLastDay.getDate();
  
  let days = '';
  
  // Previous month days
  for (let i = firstDayWeek - 1; i >= 0; i--) {
    days += `<div class="calendar-day other-month">${prevLastDate - i}</div>`;
  }
  
  // Current month days
  const today = new Date();
  for (let i = 1; i <= lastDate; i++) {
    const isToday = i === today.getDate() && month === today.getMonth() && year === today.getFullYear();
    const dateStr = `${year}-${String(month + 1).padStart(2, '0')}-${String(i).padStart(2, '0')}`;
    const hasEvent = calendarEvents.some(e => e.date === dateStr);
    const classes = ['calendar-day'];
    if (isToday) classes.push('today');
    if (hasEvent) classes.push('has-event');
    days += `<div class="${classes.join(' ')}" data-date="${dateStr}">${i}</div>`;
  }
  
  // Next month days
  const totalCells = Math.ceil((firstDayWeek + lastDate) / 7) * 7;
  const nextDays = totalCells - (firstDayWeek + lastDate);
  for (let i = 1; i <= nextDays; i++) {
    days += `<div class="calendar-day other-month">${i}</div>`;
  }
  
  daysContainer.innerHTML = days;
}

function changeMonth(delta) {
  currentDate.setMonth(currentDate.getMonth() + delta);
  renderCalendar();
}

function renderUpcomingEvents() {
  const container = document.getElementById('upcomingEventsList');
  if (!container) return;
  
  const today = new Date();
  const upcoming = calendarEvents
    .filter(e => new Date(e.date) >= today)
    .sort((a, b) => new Date(a.date) - new Date(b.date))
    .slice(0, 5);
  
  if (upcoming.length === 0) {
    container.innerHTML = '<div class="no-events">No upcoming events</div>';
    return;
  }
  
  container.innerHTML = upcoming.map(event => `
    <div class="event-item">
      <div class="event-time">${formatEventDate(event.date)} ${event.time || ''}</div>
      <div class="event-title">${event.title}</div>
    </div>
  `).join('');
}

function formatEventDate(dateStr) {
  const date = new Date(dateStr);
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);
  
  if (date.toDateString() === today.toDateString()) return 'Today';
  if (date.toDateString() === tomorrow.toDateString()) return 'Tomorrow';
  return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
}

async function syncOutlookCalendar() {
  const btn = event.target.closest('button');
  const icon = btn.querySelector('i');
  icon.style.animation = 'spin 1s linear';
  
  // Placeholder for future Outlook integration
  setTimeout(() => {
    icon.style.animation = '';
    lucide.createIcons();
    // Add sample event for demo
    const today = new Date();
    const sampleDate = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}-${String(today.getDate() + 2).padStart(2, '0')}`;
    if (!calendarEvents.some(e => e.date === sampleDate)) {
      calendarEvents.push({
        date: sampleDate,
        time: '2:00 PM',
        title: 'Follow-up: Acuity Insurance'
      });
      renderCalendar();
      renderUpcomingEvents();
    }
  }, 1000);
}

// Render top opportunities on overview page
function renderTopOpportunities() {
  const grid = document.getElementById('opportunitiesGrid');
  if (!grid || typeof accountsData === 'undefined') return;
  
  const highPriority = accountsData.filter(a => a.urgency === 'high').slice(0, 4);
  
  grid.innerHTML = highPriority.map(account => `
    <div class="opportunity-card ${account.urgency === 'high' ? 'high-priority' : ''}">
      <div class="opportunity-header">
        <h3>${account.name}</h3>
        <span class="badge badge-${account.urgency}">${account.urgency === 'high' ? 'High Priority' : account.urgency}</span>
      </div>
      <p class="opportunity-trigger"><strong>Key Trigger:</strong> ${account.triggers[0]}</p>
      <p class="opportunity-value"><strong>Why Now:</strong> ${account.challenges.split('.')[0]}.</p>
      <button class="btn-view" onclick="navigateTo('prospects')">
        <i data-lucide="arrow-right"></i> View Details
      </button>
    </div>
  `).join('');
  
  lucide.createIcons();
}

// Initialize on load
document.addEventListener('DOMContentLoaded', function() {
  // Set current date
  const dateEl = document.getElementById('currentDate');
  if (dateEl) {
    dateEl.textContent = new Date().toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric', 
      year: 'numeric' 
    });
  }
  
  // Initialize calendar
  renderCalendar();
  renderUpcomingEvents();
  
  // Render overview opportunities
  renderTopOpportunities();
  
  // Initialize Lucide icons
  lucide.createIcons();
  
  // Search functionality
  const searchInput = document.getElementById('searchInput');
  if (searchInput) {
    searchInput.addEventListener('input', function(e) {
      const query = e.target.value.toLowerCase();
      document.querySelectorAll('.account-card').forEach(card => {
        const text = card.textContent.toLowerCase();
        card.style.display = text.includes(query) ? '' : 'none';
      });
    });
  }
});