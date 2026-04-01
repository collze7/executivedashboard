// Commitments and Follow-ups Data
const commitmentsData = [
  {
    id: 1,
    title: "Follow-up: Accident Fund Holdings - Enstar Acquisition",
    description: "Schedule introductory call with new leadership team to discuss operational continuity during acquisition transition. Reference recent executive appointments and integration support opportunities.",
    dueDate: "2026-01-15",
    account: "Accident Fund Holdings",
    status: "overdue",
    priority: "high"
  },
  {
    id: 2,
    title: "Proposal: Acuity Insurance - Premium Audit Scaling",
    description: "Prepare proposal for premium audit services to support 10% growth trajectory. Highlight 30-40% turnaround improvement and capacity flexibility.",
    dueDate: "2026-01-17",
    account: "Acuity Insurance",
    status: "due-soon",
    priority: "high"
  },
  {
    id: 3,
    title: "Discovery Call: Selective Insurance - Technology Investment",
    description: "Connect with new leadership regarding operational support during core system transformation. Focus on continuity during COO/Chief Actuary transitions.",
    dueDate: "2026-01-18",
    account: "Selective Insurance Group",
    status: "due-soon",
    priority: "high"
  },
  {
    id: 4,
    title: "Research: EMPLOYERS - Excess WC Product Launch",
    description: "Deep-dive on new Excess Workers' Compensation product requirements. Assess premium audit and loss control infrastructure needs for coast-to-coast rollout.",
    dueDate: "2026-01-20",
    account: "EMPLOYERS Holdings",
    status: "pending",
    priority: "medium"
  },
  {
    id: 5,
    title: "Send Introduction: Encova - Core Modernization Support",
    description: "Draft personalized email to Encova leadership highlighting operational support during Guidewire Cloud migration and Duck Creek stabilization.",
    dueDate: "2026-01-22",
    account: "Encova Mutual Insurance",
    status: "pending",
    priority: "medium"
  },
  {
    id: 6,
    title: "Check-in: First Acceptance - Transformation Status",
    description: "Touch base with First Acceptance regarding process improvement initiatives and 9.5% growth target support needs.",
    dueDate: "2026-01-25",
    account: "First Acceptance Insurance",
    status: "pending",
    priority: "medium"
  },
  {
    id: 7,
    title: "Proposal Sent: EMC Insurance - Post-Transformation Optimization",
    description: "Submitted operational support proposal for post-transformation optimization phase. Awaiting response from claims leadership.",
    dueDate: "2026-01-10",
    account: "EMC Insurance Companies",
    status: "completed",
    priority: "low"
  },
  {
    id: 8,
    title: "Initial Outreach: Builders Mutual - VP Operations",
    description: "Sent LinkedIn connection request to Sherman McCoy (new VP of Operations). Follow up after connection accepted.",
    dueDate: "2026-01-12",
    account: "Builders Mutual Insurance",
    status: "completed",
    priority: "low"
  },
  {
    id: 9,
    title: "Research Complete: Accredited Insurance - Onex Integration",
    description: "Completed research on Onex acquisition and global expansion needs. Ready for outreach phase.",
    dueDate: "2026-01-08",
    account: "Accredited Insurance Holdings",
    status: "completed",
    priority: "low"
  },
  {
    id: 10,
    title: "Quarterly Review: 21st Century Insurance",
    description: "Monitor regulatory developments and rate filing outcomes. Reassess outreach timing based on settlement status.",
    dueDate: "2026-03-15",
    account: "21st Century Insurance",
    status: "pending",
    priority: "low"
  }
];

// Render commitments list
function renderCommitments() {
  const container = document.getElementById('commitmentsList');
  if (!container) return;
  
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  
  // Sort: overdue first, then by date
  const sorted = [...commitmentsData].sort((a, b) => {
    const dateA = new Date(a.dueDate);
    const dateB = new Date(b.dueDate);
    
    const isOverdueA = dateA < today && a.status !== 'completed';
    const isOverdueB = dateB < today && b.status !== 'completed';
    
    if (isOverdueA && !isOverdueB) return -1;
    if (!isOverdueA && isOverdueB) return 1;
    
    return dateA - dateB;
  });
  
  container.innerHTML = sorted.map(commitment => {
    const dueDate = new Date(commitment.dueDate);
    const isOverdue = dueDate < today && commitment.status !== 'completed';
    const dueSoon = !isOverdue && dueDate <= new Date(today.getTime() + 7 * 24 * 60 * 60 * 1000);
    
    let statusClass = commitment.status;
    if (isOverdue && commitment.status !== 'completed') statusClass = 'overdue';
    else if (dueSoon && commitment.status !== 'completed') statusClass = 'due-soon';
    
    return `
      <div class="commitment-card ${statusClass}" data-id="${commitment.id}">
        <div class="commitment-header">
          <h3 class="commitment-title">${commitment.title}</h3>
          <div class="commitment-meta">
            <span class="badge badge-${commitment.priority}">${commitment.priority}</span>
          </div>
        </div>
        <p class="commitment-description">${commitment.description}</p>
        <div class="commitment-footer">
          <div class="commitment-date">
            <i data-lucide="calendar"></i>
            <span>${formatCommitmentDate(commitment.dueDate, isOverdue, dueSoon)}</span>
          </div>
          <button class="btn-complete" onclick="toggleCommitment(${commitment.id})">
            <i data-lucide="${commitment.status === 'completed' ? 'check' : 'circle'}"></i>
            ${commitment.status === 'completed' ? 'Completed' : 'Mark Complete'}
          </button>
        </div>
      </div>
    `;
  }).join('');
  
  lucide.createIcons();
}

function formatCommitmentDate(dateStr, isOverdue, dueSoon) {
  const date = new Date(dateStr);
  const formatted = date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  
  if (isOverdue) return `<strong style="color: var(--danger);">OVERDUE</strong> - ${formatted}`;
  if (dueSoon) return `<strong style="color: var(--warning);">Due Soon</strong> - ${formatted}`;
  return formatted;
}

function toggleCommitment(id) {
  const commitment = commitmentsData.find(c => c.id === id);
  if (commitment) {
    commitment.status = commitment.status === 'completed' ? 'pending' : 'completed';
    renderCommitments();
    updateCommitmentsSummary();
  }
}

function updateCommitmentsSummary() {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const nextWeek = new Date(today.getTime() + 7 * 24 * 60 * 60 * 1000);
  
  const overdue = commitmentsData.filter(c => {
    return new Date(c.dueDate) < today && c.status !== 'completed';
  }).length;
  
  const dueThisWeek = commitmentsData.filter(c => {
    const due = new Date(c.dueDate);
    return due >= today && due <= nextWeek && c.status !== 'completed';
  }).length;
  
  const completed = commitmentsData.filter(c => c.status === 'completed').length;
  
  // Update summary cards
  const summaryCards = document.querySelectorAll('.summary-card');
  if (summaryCards[0]) summaryCards[0].querySelector('.summary-value').textContent = overdue;
  if (summaryCards[1]) summaryCards[1].querySelector('.summary-value').textContent = dueThisWeek;
  if (summaryCards[2]) summaryCards[2].querySelector('.summary-value').textContent = completed;
}

// Initialize on load
document.addEventListener('DOMContentLoaded', function() {
  renderCommitments();
  updateCommitmentsSummary();
});