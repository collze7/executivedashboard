// Prospect Intelligence Data
const accountsData = [
  {
    name: "Accident Fund Holdings / AF Group",
    subtitle: "Workers' Compensation · Lansing, MI · Multi-state",
    urgency: "high",
    badges: [
      { text: "High Priority", class: "badge-high" },
      { text: "Acquisition", class: "badge-medium" },
      { text: "Leadership Change", class: "badge-medium" }
    ],
    news: [
      {
        title: "Blue Cross Blue Shield of Michigan Positions AF Group for Future Success with Sale to Enstar Group",
        content: "Enstar Group signed a definitive stock purchase agreement to acquire 100% of Accident Fund Holdings. AF Group will operate under Enstar's P&C platform, bringing claims management expertise and operational synergies. 【web-spglobal-d49223ee】",
        relevance: "high",
        source: "S&P Global Ratings"
      },
      {
        title: "Mike Valiante Named President, Commercial Markets",
        content: "Appointed February 2026 to lead Commercial Markets team and create a market-centric model rooted in workers' compensation expertise. Goal is to transform products and service offerings, deliver specialized multiline solutions, and deepen agent partnerships. 【web-accidentfund-79724eaa】",
        relevance: "high",
        source: "Accident Fund"
      },
      {
        title: "Executive Promotions Across Leadership Team",
        content: "Patrick Stewart promoted to CFO, Olivia Rogers to VP and Chief Risk Officer, Jason Foreman to VP of Binding in Specialty Lines. Reflects strong leadership driving organizational success. 【web-accidentfund-c25fc01a】",
        relevance: "high",
        source: "Accident Fund"
      },
      {
        title: "Kriss Barronton Named Chief Operating Officer",
        content: "Appointed April 2024 to oversee operational strategy and execution across the AF Group organization. 【web-accidentfund-cb647fb5】",
        relevance: "medium",
        source: "Accident Fund"
      }
    ],
    triggers: [
      "Ownership transition to Enstar — New parent will likely restructure operations, creating openings for outsourced premium audit and BPM services",
      "Multiple executive appointments — New leadership team establishing fresh operational priorities and vendor relationships",
      "Commercial Markets transformation — New President driving product/service transformation requires scalable operations support",
      "Claims management integration — Enstar's claims expertise focus creates opportunity for complementary operational efficiency services"
    ],
    challenges: "Managing acquisition integration, achieving expected operational efficiencies, transforming commercial market products while maintaining service quality, and integrating with Enstar's claims management platform.",
    outreach: "With Enstar's acquisition of AF Group and the significant operational restructuring underway, this is a pivotal moment for your workers' compensation platform. Organizations navigating ownership transitions often discover that outsourcing premium audit and back-office operations delivers measurable efficiency gains without disrupting policyholder service quality. ReSource Pro partners with carriers in exactly this position — our dedicated premium audit teams handle physical, virtual, and desk audits at scale, reducing turnaround times by 30-40% while improving accuracy. We also support policy processing, loss control coordination, and data management. I'd welcome a brief conversation about how we've helped similar WC-focused carriers maintain operational excellence through transitions like yours."
  },
  {
    name: "Acuity, A Mutual Insurance Company",
    subtitle: "Multi-line P&C · Sheboygan, WI · 30+ states",
    urgency: "high",
    badges: [
      { text: "High Priority", class: "badge-high" },
      { text: "CEO Transition", class: "badge-high" },
      { text: "10% Growth", class: "badge-medium" }
    ],
    news: [
      {
        title: "Melissa Winter Named President & CEO — March 2026",
        content: "Acuity completed its multiyear leadership transition with Melissa Winter succeeding Ben Salzmann. Seven additional executive appointments made simultaneously, including new CUO, CMO, CFO, and VP of Enterprise Technology. 【web-acuity-a5a4f75b】",
        relevance: "high",
        source: "Acuity Insurance"
      },
      {
        title: "Strong Financial Performance — 2025",
        content: "Combined ratio of 96.3%, nearly 10% growth in written premium YoY. Over $3B in annual written premium and $8.5B+ in assets. 24th consecutive A+ (Superior) AM Best rating. 【web-acuity-9d519933】",
        relevance: "high",
        source: "Acuity Insurance"
      },
      {
        title: "Keith Baierl Named VP of Enterprise Technology",
        content: "New technology leadership signals investment in operational modernization and digital transformation priorities under new CEO. 【web-iireporter-f3aacb26】",
        relevance: "medium",
        source: "Insurance Innovation Reporter"
      }
    ],
    triggers: [
      "Comprehensive CEO transition + 7 executive appointments — New leadership team setting fresh operational priorities, creating openings for new vendor partnerships",
      "10% premium growth — Rapid volume growth strains internal audit and processing capacity; outsourcing can absorb volume without headcount increases",
      "New VP of Enterprise Technology — Technology modernization typically surfaces opportunities to outsource manual processes like premium audit",
      "$3B+ in written premium — Scale requires efficient operational support to maintain profitability"
    ],
    challenges: "Scaling operations to match 10% premium growth trajectory, establishing new executive team's strategic priorities, integrating new technology leadership vision, and maintaining A+ rating during leadership transition.",
    outreach: "Congratulations on Acuity's leadership transition and the impressive 10% premium growth in 2025. As your new executive team establishes strategic priorities, scaling operations to match that growth trajectory becomes critical. ReSource Pro supports fast-growing P&C carriers by providing dedicated premium audit, policy processing, and loss control survey teams that flex with volume — so your internal teams can focus on underwriting excellence and agent relationships. Our clients typically see 30-40% improvement in audit turnaround time and measurable accuracy gains. With over $3 billion in written premium and expansion across 30+ states, Acuity's operational demands are significant. I'd appreciate the opportunity to share how we help carriers at your scale maintain quality and efficiency while sustaining growth momentum."
  },
  {
    name: "Selective Insurance Group, Inc.",
    subtitle: "Commercial Lines · Branchville, NJ · NASDAQ: SIGI",
    urgency: "high",
    badges: [
      { text: "High Priority", class: "badge-high" },
      { text: "COO Retiring", class: "badge-high" },
      { text: "AI Investment", class: "badge-medium" }
    ],
    news: [
      {
        title: "Q4 2025 Results — 100th Anniversary Year",
        content: "Combined ratio improved to 93.8%, NPW grew 4% with 8.3% renewal pure price increases. Net investment income up 17% to $114M after-tax. CEO emphasized strategic technology investments to enhance efficiency. 【web-selective-d097be8a】",
        relevance: "high",
        source: "Selective Insurance IR"
      },
      {
        title: "Chief Actuary Retirement & COO Transition",
        content: "Vincent Senia retiring as EVP & Chief Actuary. Brenda Hall, Standard Lines EVP & COO, announced planned retirement after 24 years. Julie Parsons appointed as independent director. 【web-selective-68e80757】",
        relevance: "high",
        source: "Selective Insurance IR"
      },
      {
        title: "Strategic AI & Technology Investment",
        content: "Expense ratio expected to increase ~0.5 points in 2026 due to strategic technology investments. Expanding geographic footprint and broadening E&S distribution. AI investments improving underwriting and pricing accuracy. 【web-carriermanagement-21b3e032】",
        relevance: "medium",
        source: "Carrier Management"
      }
    ],
    triggers: [
      "COO and Chief Actuary retirements — Key operational leadership gaps create immediate need for reliable operational support partners",
      "0.5-point expense ratio increase for tech investments — Cost pressure from technology spend creates need to offset through operational outsourcing",
      "Geographic expansion — New-state launches increase premium audit and policy processing volume across unfamiliar regulatory environments",
      "AI-driven transformation — Technology modernization creates opportunity for process automation and outsourcing"
    ],
    challenges: "Managing leadership transitions for COO and Chief Actuary, offsetting expense ratio increases from technology investments, scaling operations for geographic expansion, and maintaining profitability during AI transformation.",
    outreach: "As Selective celebrates its 100th anniversary and invests in AI-driven underwriting and pricing capabilities, the operational demands of geographic expansion and technology transformation are substantial. With the retirements of your Chief Actuary and Standard Lines COO, ensuring continuity in premium audit, policy processing, and back-office operations is critical. ReSource Pro specializes in helping commercial-lines carriers like Selective scale efficiently — our teams handle premium audit across multiple state regulatory frameworks, support policy checking and issuance, and provide loss control survey coordination. This lets your internal teams focus on the strategic technology investments driving your growth. I'd welcome a conversation about how we've helped similar publicly traded carriers maintain operational discipline while investing in transformation."
  },
  {
    name: "EMPLOYERS Holdings, Inc.",
    subtitle: "Workers' Compensation Specialist · Reno, NV · NYSE: EIG",
    urgency: "medium",
    badges: [
      { text: "Medium Priority", class: "badge-medium" },
      { text: "New Product Launch", class: "badge-medium" },
      { text: "Digital Platform", class: "badge-low" }
    ],
    news: [
      {
        title: "Excess Workers' Comp Product Launch — February 2026",
        content: "New product for large self-insured employers combines specific/aggregate coverage with predictive analytics and real-time claims reporting. Available coast-to-coast. 【web-quiverquant-ec1ab10c】",
        relevance: "high",
        source: "Globe Newswire"
      },
      {
        title: "Strong 2025 Financial Results",
        content: "NPE and policies in-force grew 2%. Commission expense ratio improved to 12.8% (from 13.5%), underwriting expense ratio to 21.7% (from 23.5%). Returned $215.4M to shareholders. AM Best upgraded to A (Excellent). 【web-finance-cfce2749】",
        relevance: "medium",
        source: "Yahoo Finance"
      },
      {
        title: "Cerity Digital Platform Expansion",
        content: "Digital-first, direct-to-consumer WC platform continues expansion. $125M recapitalization plan announced Q3 2025. 【web-employers-8840a0ef】",
        relevance: "medium",
        source: "EMPLOYERS.com"
      }
    ],
    triggers: [
      "New Excess WC product launch — New product line requires premium audit, loss control, and claims support infrastructure that may exceed internal capacity",
      "Expense ratio improvement focus — Outsourcing operational functions is a proven lever for further expense ratio reduction",
      "Digital-first Cerity platform scaling — Digital channels increase policy volume, requiring scalable back-office operations support",
      "Large self-insured employer focus — Complex premium audit and loss control requirements"
    ],
    challenges: "Scaling new product line infrastructure coast-to-coast, maintaining improved expense ratios, supporting Cerity platform growth, and managing large self-insured employer audit complexity.",
    outreach: "The launch of EMPLOYERS' Excess Workers' Compensation product is a significant strategic move. Scaling a new product line coast-to-coast — especially one involving large self-insured employers — demands robust premium audit, loss control, and claims support infrastructure. ReSource Pro specializes in providing that operational backbone for WC-focused carriers. We help manage premium audit workflows, loss control survey coordination, and policy processing that integrates with your predictive analytics and real-time reporting tools. With your impressive expense ratio improvements and the Cerity platform driving digital growth, maintaining operational discipline at scale is key. I'd welcome a conversation about how we help WC specialists like EMPLOYERS expand product lines without proportional overhead increases."
  },
  {
    name: "Encova Mutual Insurance Group",
    subtitle: "Multi-line P&C · Columbus, OH · Super-regional",
    urgency: "medium",
    badges: [
      { text: "Medium Priority", class: "badge-medium" },
      { text: "Core Modernization", class: "badge-medium" },
      { text: "CIO Promoted", class: "badge-low" }
    ],
    news: [
      {
        title: "Casey Jordan Promoted to EVP & CIO — January 2026",
        content: "Led retirement of legacy mainframe systems and migration to Guidewire Cloud. Championed enterprise data management and core systems modernization. 【web-encova-15f7ba20】",
        relevance: "high",
        source: "Encova Insurance"
      },
      {
        title: "Duck Creek Distribution Management Go-Live — March 2025",
        content: "Encova went live on upgraded Duck Creek Distribution Management, unifying agency operations across all lines of business with automation and self-service tools. 【web-duckcreek-94a2e279】",
        relevance: "medium",
        source: "Duck Creek Technologies"
      },
      {
        title: "EVP & Chief Strategy Officer Retiring",
        content: "John Kessler retiring after 40+ years (end 2026). Two new SVP appointments: Brandon Marshall (Agency Operations & Marketing) and Casei Phillips (Chief Communications Officer). 【web-encova-2a6fd977】",
        relevance: "medium",
        source: "Encova Insurance"
      }
    ],
    triggers: [
      "Mainframe retirement + Guidewire Cloud migration — Core system transformation creates transition period where outsourced operations support ensures continuity",
      "CSO retirement after 40 years — Institutional knowledge loss creates operational risks; external partners help maintain process consistency",
      "Duck Creek implementation — New distribution management system requires operational support during stabilization phase",
      "Geographic expansion — Growing footprint increases premium audit and processing complexity"
    ],
    challenges: "Managing core system transformation from mainframe to Guidewire Cloud, ensuring operational continuity during CSO retirement, stabilizing Duck Creek implementation, and scaling operations for expansion.",
    outreach: "Encova's technology transformation — retiring your mainframe and migrating to Guidewire Cloud — is an impressive undertaking. Carriers in the middle of core system modernization often find that outsourcing premium audit and policy processing provides critical operational stability during the transition. ReSource Pro has deep experience supporting carriers through exactly this type of transformation, providing dedicated teams for premium audit, policy checking, and loss control surveys that integrate with Guidewire and Duck Creek platforms. With John Kessler's upcoming retirement and your digital-first initiatives, maintaining operational continuity while scaling is essential. I'd welcome the chance to discuss how we help super-regional carriers like Encova sustain service quality through periods of significant change."
  },
  {
    name: "EMC Insurance Companies",
    subtitle: "Commercial Lines Mutual · Des Moines, IA · National",
    urgency: "medium",
    badges: [
      { text: "Medium Priority", class: "badge-medium" },
      { text: "6-Year Transformation", class: "badge-medium" },
      { text: "New CCO", class: "badge-low" }
    ],
    news: [
      {
        title: "Six-Year Core Transformation Reshapes Operating Model",
        content: "CIO Joe Riesberg led comprehensive technology overhaul replacing legacy systems with integrated, AI-enabled platform. Extensive change management and field-level training deployed. 【web-insurancebusinessmag-1b275292】",
        relevance: "high",
        source: "Insurance Business Magazine"
      },
      {
        title: "Brian Fuller Named Chief Claims Officer — Mid 2025",
        content: "27-year EMC veteran promoted to oversee claims, claims operations, and EMC Claims Solutions. 【web-alangray-f7c16e23】",
        relevance: "medium",
        source: "Alan Gray"
      },
      {
        title: "Partner Success Program Recognition",
        content: "Recognized top agency partners based on loss ratio, premium volume, sales velocity, and retention metrics. March 2026. 【web-emcinsurance-4604042b】",
        relevance: "medium",
        source: "EMC Insurance"
      }
    ],
    triggers: [
      "Massive core transformation completing — Post-transformation optimization phase is when carriers evaluate outsourcing to maximize ROI on new platforms",
      "New Chief Claims Officer — Fresh claims leadership often re-evaluates vendor relationships and operational support models",
      "Agency partner focus on loss ratio — Emphasis on loss ratio and retention metrics aligns with premium audit accuracy and loss control survey quality",
      "AI-enabled platform deployed — Modern systems create opportunities for integrated operational support services"
    ],
    challenges: "Optimizing post-transformation operations, supporting new Chief Claims Officer's initiatives, maintaining Partner Success Program standards, and leveraging AI-enabled platform for efficiency.",
    outreach: "EMC's six-year core transformation is a remarkable achievement. As you move from the build phase into optimization, many carriers find that outsourcing premium audit and operational support maximizes the return on their technology investment. ReSource Pro helps carriers like EMC leverage new platforms by providing skilled teams for premium audit, policy processing, and loss control surveys — work that integrates with your modernized systems and frees your internal staff to focus on higher-value activities. With your Partner Success Program emphasizing loss ratio and retention, accurate premium audits and timely loss control are direct contributors to those outcomes. I'd appreciate the opportunity to discuss how our operational support could complement EMC's transformation and strengthen your agency partnerships."
  },
  {
    name: "First Acceptance Insurance",
    subtitle: "Non-standard Auto · Nashville, TN · Multi-state",
    urgency: "high",
    badges: [
      { text: "High Priority", class: "badge-high" },
      { text: "New President/COO", class: "badge-high" },
      { text: "Transformation", class: "badge-medium" }
    ],
    news: [
      {
        title: "Anthony Delaney Named President and COO — March 2026",
        content: "Appointed to lead First Acceptance through next chapter, focusing on people, collaboration, and long-term growth. Driving market-centric positioning and operational transformation. 【web-linkedin-47a03d80】",
        relevance: "high",
        source: "LinkedIn / First Acceptance"
      },
      {
        title: "Douglas Jensen and Dusty Gray in New Executive Roles",
        content: "Douglas Jensen appointed COO, Dusty Gray appointed SVP of Revenue Operations (November 2024). Leading company through pivotal change following retail division sale. 【web-linkedin-51970c50】",
        relevance: "high",
        source: "LinkedIn / First Acceptance"
      },
      {
        title: "Retail Division Sale to Confie — December 2023",
        content: "Confie acquired First Acceptance's retail division, expanding footprint to 26 states. First Acceptance undergoing transformation as independent entity. 【web-insurancejournal-44c9a869】",
        relevance: "high",
        source: "Insurance Journal"
      },
      {
        title: "Strategic Focus on Diversification and Process Improvement",
        content: "Company emphasizing revenue model diversification, strengthening operational controls, and improving processes. Projected revenue growth of 9.5% for 2026. 【web-matrixbcg-09391b4c】",
        relevance: "medium",
        source: "Matrix BCG"
      }
    ],
    triggers: [
      "New President and COO appointments — Fresh leadership establishing strategic direction and vendor relationships",
      "Post-divestiture transformation — Retail division sale creates need for operational restructuring and efficiency",
      "Revenue diversification strategy — Expanding beyond core business requires scalable operations support",
      "9.5% projected growth — Aggressive growth targets require operational capacity expansion"
    ],
    challenges: "Navigating major organizational transformation post-retail sale, integrating new leadership, diversifying revenue model, strengthening operational controls, and achieving aggressive growth targets.",
    outreach: "Congratulations on the recent leadership appointments and the exciting transformation underway at First Acceptance following the retail division transition. I noticed your strategic focus on strengthening operational controls and improving processes to support your projected 9.5% revenue growth for 2026. During periods of significant organizational change, maintaining operational efficiency while implementing new controls can be challenging. ReSource Pro specializes in Business Process Management for non-standard auto carriers, helping teams streamline operations, improve loss ratios, and scale efficiently without adding fixed overhead. We've helped similar carriers achieve significant operational resilience during major transitions. Would you be open to a brief conversation next week to discuss how we might support your current process improvement initiatives?"
  },
  {
    name: "Builders Mutual Insurance Company",
    subtitle: "Construction Insurance · Raleigh, NC · Regional",
    urgency: "low",
    badges: [
      { text: "Monitor", class: "badge-low" },
      { text: "New VP Ops", class: "badge-low" },
      { text: "$3.5M Dividend", class: "badge-low" }
    ],
    news: [
      {
        title: "Sherman McCoy Named VP of Operations — March 2026",
        content: "Newest addition to executive team, focused on optimizing carrier platform processes and workflows. 【web-buildersmutual-12f02e62】",
        relevance: "medium",
        source: "Builders Mutual"
      },
      {
        title: "$3.5M Policyholder Dividend — February 2026",
        content: "Distributed to 13,300+ eligible WC policyholders across 9 states. 40+ consecutive years of dividend returns. 【web-buildersmutual-12f02e62】",
        relevance: "low",
        source: "Builders Mutual"
      },
      {
        title: "Mike Hickman Named VP of Underwriting — June 2025",
        content: "Previously VP of National Underwriting at Grange Insurance. Brings enterprise underwriting operations and product development expertise. 【web-buildersmutual-12f02e62】",
        relevance: "low",
        source: "Builders Mutual"
      }
    ],
    triggers: [
      "New VP of Operations hire — Fresh operations leadership evaluating workflows and processes; open to new vendor relationships",
      "Construction-focused WC book — Premium audit for construction class codes is complex; specialized expertise highly relevant"
    ],
    challenges: "Optimizing operations under new VP leadership, managing construction class code premium audit complexity, and maintaining strong financial performance.",
    outreach: "Congratulations on Sherman McCoy's appointment as VP of Operations and the continued strength reflected in your $3.5M policyholder dividend. As your operations team evaluates workflows and processes, premium audit for construction-class workers' compensation is one of the most complex and resource-intensive functions in the industry. ReSource Pro provides dedicated premium audit teams with deep expertise in construction class codes, subcontractor verification, and payroll reconciliation. We help construction-focused carriers like Builders Mutual improve audit accuracy and turnaround while reducing operational costs. I'd appreciate the opportunity to discuss how we could support your operations team's optimization objectives."
  },
  {
    name: "Accredited Insurance Holdings",
    subtitle: "Program Manager / Surety · Orlando, FL · Global",
    urgency: "low",
    badges: [
      { text: "Monitor", class: "badge-low" },
      { text: "Onex Acquisition", class: "badge-low" },
      { text: "Board Expansion", class: "badge-low" }
    ],
    news: [
      {
        title: "Onex Partners Acquisition Completed — June 2024",
        content: "Accredited now operates as independent program management company under Onex ownership. AM Best affirmed A- (Excellent) with stable outlook. 【web-accreditedinsurance-16cc3f07】",
        relevance: "medium",
        source: "Accredited Insurance"
      },
      {
        title: "Board & Leadership Expansion — Q4 2024",
        content: "Barbara Bufkin and Patricia Roufca added as Non-Executive Directors. Stuart McMurdo appointed to lead UK/European operations. Dobrina Naydenova hired as US Head of Finance. 【web-accreditedinsurance-decd1467】",
        relevance: "medium",
        source: "Accredited Insurance"
      }
    ],
    triggers: [
      "Post-acquisition operational optimization — New PE ownership typically drives operational efficiency initiatives",
      "Global expansion with new leadership — Expanding operations across US, UK, and Europe increases process management complexity"
    ],
    challenges: "Establishing independent operations post-acquisition, managing global program capacity across US/UK/Europe, and ensuring efficient MGA oversight.",
    outreach: "With Onex's acquisition complete and your expanded leadership team in place, Accredited is well-positioned for growth across the US, UK, and European markets. As program management operations scale globally, maintaining consistent underwriting support, policy processing, and operational quality becomes increasingly complex. ReSource Pro supports specialty and program-focused carriers by providing scalable back-office operations that adapt to multiple regulatory environments. Our teams handle policy administration, premium processing, and quality assurance — enabling your underwriters and program managers to focus on growth. I'd welcome the opportunity to explore how we could support Accredited's expanding operational footprint."
  },
  {
    name: "ACE Commercial Risk Services",
    subtitle: "Small Commercial Specialty · National",
    urgency: "medium",
    badges: [
      { text: "Medium Priority", class: "badge-medium" },
      { text: "Leadership Changes", class: "badge-medium" },
      { text: "Product Launch", class: "badge-low" }
    ],
    news: [
      {
        title: "David Lupica Appointed COO for North America Wholesale/E&S",
        content: "Formerly division president of ACE Commercial Risk Services. Will work in partnership with leadership to operate E&S business, wholesale small commercial, and North America programs. 【web-canadianunderwriter-f399a144】",
        relevance: "high",
        source: "Canadian Underwriter"
      },
      {
        title: "James Williamson Named VP, North America Retail Small Commercial",
        content: "Previously division president of ACE Private Risk Services. Will lead retail small commercial division reporting to senior leadership. 【web-canadianunderwriter-f399a144】",
        relevance: "high",
        source: "Canadian Underwriter"
      },
      {
        title: "New Specialty Products for Small Businesses",
        content: "Launched standalone Liquor, Umbrella, Lessor's Risk, and enhanced BOP coverages. ACE Solutions Fast Track system expanded with pre-fill data and valuation estimators. 【web-news-a4c1f1dd】",
        relevance: "medium",
        source: "Business Wire"
      }
    ],
    triggers: [
      "Leadership restructuring — New COO and VP appointments create opportunity for operational partnership evaluation",
      "New specialty product launches — Expanded product portfolio requires scalable underwriting and processing support",
      "ACE Solutions Fast Track expansion — Technology platform growth increases operational volume",
      "Chubb acquisition integration — Post-merger operational consolidation creates efficiency opportunities"
    ],
    challenges: "Scaling operations for new specialty products, integrating systems post-Chubb acquisition, managing increased underwriting volume, and supporting expanded distribution channels.",
    outreach: "Congratulations on the recent leadership appointments and the launch of your new specialty products for the small business marketplace. Expanding your offerings through the ACE Solutions Fast Track system is a strong move to capture more of the retail small commercial segment. As you roll out these new standalone products and handle the increased volume from the Chubb integration, underwriting and processing efficiency will be paramount. ReSource Pro provides specialized Business Process Management for commercial carriers, helping teams scale operations rapidly to support new product launches without overburdening internal staff. We can help ensure your operational capacity matches your growth ambitions. Would you be open to a brief call next week to discuss how we might support your expanded product lines?"
  },
  {
    name: "21st Century Insurance",
    subtitle: "Auto Insurance · California",
    urgency: "low",
    badges: [
      { text: "Monitor", class: "badge-low" },
      { text: "Regulatory Challenges", class: "badge-low" }
    ],
    news: [
      {
        title: "Rate Hike Challenge — 2026",
        content: "Proposed 18.4% auto premium rate increase challenged as excessive under California's Prop 103. Consumer Watchdog settlement saved policyholders over $53 million. 【web-consumerwatchdog-99b90f82】",
        relevance: "medium",
        source: "Consumer Watchdog"
      },
      {
        title: "Industry Trend: Core Modernization Focus",
        content: "Insurers increasingly tying core system replacement and AI-driven decision making into synchronized transformation programs. 【web-finance-acee5c82】",
        relevance: "medium",
        source: "Yahoo Finance"
      }
    ],
    triggers: [
      "Regulatory scrutiny on rates — Need for operational efficiency to offset rate pressure",
      "Loss ratio projection challenges — Accurate premium audit critical for regulatory compliance"
    ],
    challenges: "Navigating regulatory scrutiny, managing loss ratio projections, and potentially modernizing core systems to improve operational efficiency.",
    outreach: "In today's challenging regulatory environment, particularly in markets like California, maintaining profitability while managing rate pressures requires exceptional operational efficiency. I noted the recent industry focus on synchronizing core system modernization with operating model redesign. ReSource Pro helps auto carriers optimize their Business Process Management to reduce fixed costs and improve loss ratio accuracy. By streamlining claims processing and underwriting operations, we enable carriers to navigate regulatory pressures more effectively while maintaining service quality. I'd appreciate the chance to share some insights on how we're helping similar carriers improve their operational resilience. Would you be open to a brief conversation?"
  }
];

// Render account cards on prospects page
function renderAccountCards() {
  const grid = document.getElementById('accountGrid');
  if (!grid) return;
  
  grid.innerHTML = accountsData.map(account => `
    <div class="account-card urgency-${account.urgency}" data-urgency="${account.urgency}" data-name="${account.name}">
      <div class="card-header" onclick="toggleCard(this)">
        <div class="card-header-left">
          <div>
            <h2>${account.name}</h2>
            <div class="card-subtitle">${account.subtitle}</div>
          </div>
        </div>
        <div class="card-badges">
          ${account.badges.map(b => `<span class="badge ${b.class}">${b.text}</span>`).join('')}
        </div>
        <i data-lucide="chevron-down" class="chevron" style="width:20px;height:20px;"></i>
      </div>
      <div class="card-body">
        <div class="section-tabs">
          <button class="section-tab active" onclick="switchTab(this, 'news')">
            <i data-lucide="newspaper" style="width:14px;height:14px;"></i> News Feed
          </button>
          <button class="section-tab" onclick="switchTab(this, 'triggers')">
            <i data-lucide="zap" style="width:14px;height:14px;"></i> Trigger Events
          </button>
          <button class="section-tab" onclick="switchTab(this, 'outreach')">
            <i data-lucide="mail" style="width:14px;height:14px;"></i> Outreach
          </button>
        </div>
        
        <div class="tab-content active" data-tab="news">
          ${account.news.map(item => `
            <div class="news-item">
              <h4>${item.title}</h4>
              <p>${item.content}</p>
              <div class="news-meta">
                <span class="relevance-tag relevance-${item.relevance}">${item.relevance === 'high' ? 'Critical' : 'Relevant'}</span>
                <span>Source: ${item.source}</span>
              </div>
            </div>
          `).join('')}
          <div class="challenges-box">
            <strong>Key Challenges:</strong> ${account.challenges}
          </div>
        </div>
        
        <div class="tab-content" data-tab="triggers">
          <ul class="trigger-list">
            ${account.triggers.map(t => `
              <li>
                <i data-lucide="arrow-right-circle" class="trigger-icon" style="width:16px;height:16px;"></i>
                <div>${t}</div>
              </li>
            `).join('')}
          </ul>
        </div>
        
        <div class="tab-content" data-tab="outreach">
          <div class="outreach-box">
            <div class="outreach-label">
              <i data-lucide="send" style="width:14px;height:14px;"></i> Recommended Outreach
            </div>
            <button class="copy-btn" onclick="copyOutreach(this)">
              <i data-lucide="copy" style="width:12px;height:12px;"></i> Copy
            </button>
            <div class="outreach-text">${account.outreach}</div>
          </div>
        </div>
      </div>
    </div>
  `).join('');
  
  lucide.createIcons();
}

// Toggle card open/close
function toggleCard(header) {
  const card = header.closest('.account-card');
  card.classList.toggle('open');
  lucide.createIcons();
}

// Switch between tabs
function switchTab(tabEl, tabName) {
  const card = tabEl.closest('.account-card');
  card.querySelectorAll('.section-tab').forEach(t => t.classList.remove('active'));
  card.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
  tabEl.classList.add('active');
  card.querySelector(`.tab-content[data-tab="${tabName}"]`).classList.add('active');
}

// Copy outreach text
function copyOutreach(btn) {
  const text = btn.closest('.outreach-box').querySelector('.outreach-text').innerText;
  navigator.clipboard.writeText(text).then(() => {
    const originalHTML = btn.innerHTML;
    btn.classList.add('copied');
    btn.innerHTML = '<i data-lucide="check" style="width:12px;height:12px;"></i> Copied!';
    lucide.createIcons();
    setTimeout(() => {
      btn.classList.remove('copied');
      btn.innerHTML = originalHTML;
      lucide.createIcons();
    }, 2000);
  });
}

// Initialize on load
document.addEventListener('DOMContentLoaded', function() {
  renderAccountCards();
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