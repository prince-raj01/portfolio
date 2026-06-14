// ===== Editable data: update these arrays to change your portfolio =====

const skills = [
  { category: '💻 Languages', items: ['Python', 'HTML', 'CSS', 'JavaScript'] },
  { category: '⚙️ Frameworks', items: ['Flask', 'React', 'Next.js'] },
  { category: '🤖 ML / AI', items: ['Scikit-learn', 'Pandas', 'NumPy'] },
  { category: '🛢️ Tools', items: ['Git', 'GitHub', 'VS Code'] }
];

const projects = [
  {
    emoji: '🏥',
    title: 'HealthGuard AI',
    description:
      'Disease Risk Prediction System using Machine Learning. Predicts Diabetes & Heart Disease risk from clinical data.',
    tech: ['Next.js', 'Python', 'Random Forest Classifier'],
    link: 'https://github.com/Swarnimrajsanu/HealthguardAi'
  },
  {
    emoji: '💊',
    title: 'Medi-Sync',
    description:
      'Healthcare management platform that keeps patient records, medications, and appointments in sync for better care coordination.',
    tech: ['JavaScript', 'Web Development'],
    link: 'https://github.com/Swarnimrajsanu/Medi-Sync'
  },
  {
    emoji: '🚑',
    title: 'SurgeCare',
    description:
      'Emergency care solution built at the Sristhi Hackathon to help hospitals manage patient surges and respond faster in critical situations.',
    tech: ['Hackathon Project', 'Web Development'],
    link: 'https://github.com/Swarnimrajsanu/surgecare-sristhi-hackathon'
  },
  {
    emoji: '🌱',
    title: 'EcoSmart',
    description:
      'Sustainability-focused solution built at the EcoSmart Hackathon, promoting smarter, eco-friendly choices through technology.',
    tech: ['Hackathon Project', 'Web Development'],
    link: 'https://github.com/Swarnimrajsanu/ecosmart-hackathon'
  },
  {
    emoji: '🦖',
    title: 'Hackzilla Project',
    description:
      'Built in 24 hours at Hackzilla (KPR Institute of Engineering and Technology) — a working prototype designed, developed, and demoed within a single day.',
    tech: ['Hackathon Project', '24-Hour Build'],
    link: 'https://github.com/Swarnimrajsanu/hackazilla'
  },
  {
    emoji: '⚡',
    title: 'HackSpark Project',
    description:
      'Built in 8 hours at HackSpark 2025 (Sri Venkateshwara College of Engineering) — a rapid prototype solving a real-world problem under tight deadlines.',
    tech: ['Hackathon Project', '8-Hour Build'],
    link: 'https://github.com/Swarnimrajsanu/hackspark03'
  }
  // Add more projects here, e.g.:
  // { emoji: '🌐', title: 'My App', description: '...', tech: ['Flask'], link: 'https://...' }
];

const hackathons = [
  {
    emoji: '⚡',
    title: 'HackSpark 2025',
    duration: '8-Hour Hackathon',
    venue: 'Sri Venkateshwara College of Engineering',
    certificate: 'certificates/hackspark-2025.jpeg'
  },
  {
    emoji: '💡',
    title: 'AAVISHKAR',
    duration: '8-Hour Hackathon',
    venue: 'Dayananda Sagar Academy of Technology and Management',
    certificate: 'certificates/aavishkar.jpeg'
  },
  {
    emoji: '🌆',
    title: 'Build for Bengaluru',
    duration: '12-Hour Hackathon',
    venue: 'Sri Krishna Institute of Technology',
    certificate: 'certificates/build-bengaluru.jpeg'
  },
  {
    emoji: '🎉',
    title: 'Tech Habba 2025',
    duration: 'Big Hack Event',
    venue: 'Acharya Institutes',
    certificate: 'certificates/tech-habba-2025.jpeg'
  },
  {
    emoji: '🦖',
    title: 'Hackzilla',
    duration: '24-Hour Hackathon',
    venue: 'KPR Institute of Engineering and Technology',
    certificate: 'certificates/hackzilla-certificate.jpg'
  },
  {
    emoji: '🎨',
    title: 'Adobe India Hackathon by Adobe',
    duration: 'Participate & Win',
    venue: 'Unstop (Online)',
    description: 'Adobe-run online hackathon on Unstop — uncover exciting rewards by building creative and technical prototypes.',
    certificate: 'https://d8it4huxumps7.cloudfront.net/lambda-pdfs/certificate-images/016f4094-19ec-4967-9222-86e518d1de73.jpg',
    link: 'https://unstop.com/o/oDTg1KU?lb=hfQ86Jlu&utm_medium=Share&utm_source=WhatsApp'
  }
];

const typedPhrases = [
  'Machine Learning Enthusiast 🤖',
  'Web Developer 🌐',
  'Full Stack Learner 🌱',
  'Problem Solver 🚀'
];

// ===== Render skills =====
const skillsGrid = document.getElementById('skillsGrid');
skills.forEach(({ category, items }) => {
  const card = document.createElement('div');
  card.className = 'skill-card reveal';
  card.innerHTML = `
    <h3>${category}</h3>
    <div class="skill-tags">
      ${items.map((s) => `<span class="skill-tag">${s}</span>`).join('')}
    </div>`;
  skillsGrid.appendChild(card);
});

// ===== Render projects =====
const projectsGrid = document.getElementById('projectsGrid');
projects.forEach(({ emoji, title, description, tech, link }) => {
  const card = document.createElement('div');
  card.className = 'project-card reveal';
  card.innerHTML = `
    <span class="project-emoji">${emoji}</span>
    <h3>${title}</h3>
    <p>${description}</p>
    <div class="project-tech">
      ${tech.map((t) => `<span class="tech-tag">${t}</span>`).join('')}
    </div>
    ${link ? `<a class="btn btn-outline" href="${link}" target="_blank" rel="noopener">🔗 View Project</a>` : ''}`;
  projectsGrid.appendChild(card);
});

// ===== Render hackathons =====
const hackathonsGrid = document.getElementById('hackathonsGrid');
hackathons.forEach(({ emoji, title, duration, venue, description, certificate }) => {
  const card = document.createElement('div');
  card.className = 'project-card reveal';
  card.innerHTML = `
    <span class="project-emoji">${emoji}</span>
    <h3>${title}</h3>
    <p>${venue}</p>
    ${description ? `<p>${description}</p>` : ''}
    <div class="project-tech">
      <span class="tech-tag">⏱️ ${duration}</span>
    </div>
    ${certificate ? `<button class="btn btn-outline" onclick="openCertificate('${title}', '${certificate}')">🏆 View Certificate</button>` : ''}`;
  hackathonsGrid.appendChild(card);
});

// ===== Typing effect =====
const typedEl = document.getElementById('typed');
let phraseIndex = 0;
let charIndex = 0;
let deleting = false;

function type() {
  const phrase = typedPhrases[phraseIndex];
  typedEl.textContent = phrase.slice(0, charIndex);

  if (!deleting && charIndex < phrase.length) {
    charIndex++;
    setTimeout(type, 80);
  } else if (!deleting) {
    deleting = true;
    setTimeout(type, 1800);
  } else if (charIndex > 0) {
    charIndex--;
    setTimeout(type, 40);
  } else {
    deleting = false;
    phraseIndex = (phraseIndex + 1) % typedPhrases.length;
    setTimeout(type, 300);
  }
}
type();

// ===== Theme toggle =====
const themeToggle = document.getElementById('themeToggle');
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'light') {
  document.body.classList.add('light');
  themeToggle.textContent = '☀️';
}

themeToggle.addEventListener('click', () => {
  const isLight = document.body.classList.toggle('light');
  themeToggle.textContent = isLight ? '☀️' : '🌙';
  localStorage.setItem('theme', isLight ? 'light' : 'dark');
});

// ===== Mobile menu =====
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');
hamburger.addEventListener('click', () => navLinks.classList.toggle('open'));
navLinks.querySelectorAll('a').forEach((a) =>
  a.addEventListener('click', () => navLinks.classList.remove('open'))
);

// ===== Scroll reveal animations =====
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 }
);
document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));

// ===== Footer year =====
document.getElementById('year').textContent = new Date().getFullYear();
