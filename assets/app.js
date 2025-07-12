// Portfolio Website 
class PortfolioApp {
  constructor() {
    // Rotating text
    this.rotatingTexts = [ 
      'Quality Assurance', 
      'Cybersecurity',
      'Blockchain Technologies'
    ];
    
    this.currentTextIndex = 0;
    this.currentCharIndex = 0;
    this.isDeleting = false;
    this.terminals = [];
    
    // Initialize the portfolio data
    this.initializePortfolioData();
    this.init();
  }

  // =========================================
  //                PORTFOLIO DATA 
  // =========================================
  initializePortfolioData() {
    // Personal Information
    this.personalInfo = {
      name: "Brandon Correa",
      education: "Computer Engineering - CUCEI 2021-2023",
      age: "23 years old",
      languages: "Spanish (native), English (intermediate)",
      location: "Guadalajara Jal. Mexico.",
      status: "OPEN"
    };

    // Education & Certifications
    this.education = {
      currentStudy: {
        title: "Computer Engineering Student",
        focus: "Cybersecurity & Quality Assurance"
      },
      certifications: [
        { name: "Web Programming (UDG - Universidad de Guadalajara)", period: "01/2019 - 03/2020" },
        { name: "Get Connected (CISCO)", period: "10/2023" },
        { name: "Linux Unhatched (NDG)", period: "10/2023" },
        { name: "Introduction to Cybersecurity (CISCO)", period: "10/2023" }
      ],
      pendingCertifications: [
        { name: "Ethical Hacker (CISCO)", period: "In progress (07/2025)" }
      ]
    };

    // Work Experience 
    this.workExperience = [
      {
        company: "Massa Network",
        position: "Node Operator",
        period: "01/2023 - 09/2023",
        location: "Remote",
        activities: [
          "Node maintenance and updates",
          "Community participation"
        ]
      },
      {
        company: "Shardeum",
        position: "Blockchain Validator",
        period: "06/2022 - Present",
        location: "Remote",
        activities: [
          "Network validation",
          "Community participation"
        ]
      },
      {
        company: "Polkadot",
        position: "Ambassador",
        period: "09/2023 - Present",
        location: "Remote",
        activities: [
          "events participation ",
          "Community engagement"
        ]
      },
      {
        company: "Global Fleet Management",
        position: "Technical Support Specialist",
        period: "08/2024 - Present",
        location: "Guadalajara, Mexico",
        activities: [
          "GPS devices troubleshooting",
          "System configuration",
          "Customer technical support"
        ]
      }
    ];

    // Skills & Technologies
    this.skills = {
      technical_skills: {
        operating_systems: ["Linux (Debian derivatives)", "Windows", "Android"],
        tools: ["Postman (basic)", "AI tools", "Github", "SQL (Basic)"],
        security: ["Bug hunting (UI/UX)"],
        blockchain: ["Web3 technologies", "Technical knowledge", "EVM", "Solana","Substrate"],
        networking: ["Basic networking knowledge"]
      },
      soft_skills: {
        learning: ["Fast learner", "Self-taught", "Problem-solving mindset"],
        experience: ["5 years crypto and stocks trading"],
        communication: ["Technical documentation", "Clear written communication", "Creating manuals for non-technical users"]
      },
      extra:{
        interests: ["DeFi", "GameFi","Automation", "AI applications"],
        platforms_used: ["Replit", "Codespaces", "Notion", "Jira (Basic)"],
        current_learning: ["Solidity", "Cybersecurity fundamentals", "QA testing tools"]
      },
      certifications_pending: []
    };

    // Social Networks 
    this.socialNetworks = [
      {
        platform: "GitHub",
        icon: "fab fa-github",
        color: "text-white",
        url: "https://github.com/BrandonFilth",
        username: "BrandonFilth"
      },
      {
        platform: "Twitter",
        icon: "fab fa-twitter",
        color: "text-blue-400",
        url: "https://x.com/0xNigromante",
        username: "@0xNigromante"
      },
      {
        platform: "Telegram",
        icon: "fab fa-telegram",
        color: "text-blue-500",
        url: "https://t.me/BrandonFilth",
        username: "BrandonFilth"
      },
      {
        platform: "Email",
        icon: "fas fa-envelope",
        color: "text-gray-400",
        url: "mailto:brandonfilth6@gmail.com",
        username: "brandonfilth6@gmail.com"
      }
    ];
  }

  init() {
    this.createMatrixRain();
    this.createContent();
    this.startRotatingText();
    this.observeTerminals();
  }

  createMatrixRain() {
    let matrixContainer = document.querySelector('.matrix-bg');
    
    if (!matrixContainer) {
      matrixContainer = document.createElement('div');
      matrixContainer.className = 'matrix-bg';
      document.body.appendChild(matrixContainer);
    }

    const chars = '!@#$%^&*()_+-=[]{}|;:,.<>?ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const density = 0.08;

    const createChar = () => {
      const char = document.createElement('div');
      char.className = 'matrix-char';
      char.textContent = chars[Math.floor(Math.random() * chars.length)];
      char.style.left = Math.random() * 100 + 'vw';
      char.style.animationDuration = (Math.random() * 4 + 3) + 's';
      char.style.opacity = (Math.random() * 0.3 + 0.1).toString();
      
      matrixContainer.appendChild(char);

      setTimeout(() => {
        if (char.parentNode === matrixContainer) {
          char.remove();
        }
      }, 7000);
    };

    setInterval(() => {
      if (Math.random() < density) {
        createChar();
      }
    }, 300);
  }

  // ==================================================
  // CONTENT GENERATION METHODS
  // ==================================================
  
  generatePersonalInfoContent() {
    let content = '';
    for (const [key, value] of Object.entries(this.personalInfo)) {
      if (value) { // Ensure value is not empty or null
        const capitalizedKey = key.charAt(0).toUpperCase() + key.slice(1);
        content += `<span class="json-key">${capitalizedKey}</span>: ${value}\n`;
      }
    }
    return content.trim();
  }

  generateEducationContent() {
    let content = `<span class="section">[EDUCATION]</span>
<span class="json-key">Specialization</span>: ${this.education.currentStudy.title}
<span class="json-key">Focus</span>: ${this.education.currentStudy.focus}

<span class="section">[CERTIFICATIONS]</span>`;

    this.education.certifications.forEach(cert => {
      content += `\n<span class="bullet">•</span> ${cert.name} (${cert.period})`;
    });

    if (this.education.pendingCertifications && this.education.pendingCertifications.length > 0) {
      content += `\n\n<span class="section">[PENDING CERTIFICATIONS]</span>`;
      this.education.pendingCertifications.forEach(cert => {
          content += `\n<span class="bullet">•</span> ${cert.name} (${cert.period})`;
      });
    }

    return content;
  }

  generateExperienceContent() {
    let content = `<span class="path">https://api.github.com/repos/brandonfilth/work-experience/contents/data.json</span>
→ Connecting to GitHub API...
✓ Status: 200 OK

<span class="json-bracket">{</span>
  <span class="json-key">"organizations"</span>: <span class="json-bracket">[</span>`;

    this.workExperience.forEach((job, index) => {
      const isLast = index === this.workExperience.length - 1;
      
      content += `
    <span class="json-bracket">{</span>
      <span class="json-key">"company"</span>: <span class="json-string">"${job.company}"</span>,
      <span class="json-key">"position"</span>: <span class="json-string">"${job.position}"</span>,
      <span class="json-key">"period"</span>: <span class="json-string">"${job.period}"</span>,
      <span class="json-key">"location"</span>: <span class="json-string">"${job.location}"</span>,
      <span class="json-key">"activities"</span>: <span class="json-bracket">[</span>`;

      job.activities.forEach((activity, actIndex) => {
        const comma = actIndex < job.activities.length - 1 ? ',' : '';
        content += `
        <span class="json-string">"${activity}"</span>${comma}`;
      });

      content += `
      <span class="json-bracket">]</span>
    <span class="json-bracket">}</span>${isLast ? '' : ','}`;
    });

    content += `
  <span class="json-bracket">]</span>
<span class="json-bracket">}</span>

✓ Data fetched successfully from BrandonFilth/work-experience`;

    return content;
  }

  generateSkillsContent() {
    let content = `<span class="path">https://api.github.com/repos/brandonfilth/skills/contents/data.json</span>
→ Connecting to GitHub API...
✓ Status: 200 OK

<span class="json-bracket">{</span>
  <span class="json-key">"technical_skills"</span>: <span class="json-bracket">{</span>`;

    // Technical Skills
    const techSkillKeys = Object.keys(this.skills.technical_skills);
    techSkillKeys.forEach((skillKey, index) => {
      const comma = index < techSkillKeys.length - 1 ? ',' : '';
      const skills = this.skills.technical_skills[skillKey];
      
      content += `
    <span class="json-key">"${skillKey}"</span>: <span class="json-bracket">[</span>`;
      
      skills.forEach((skill, skillIndex) => {
        const skillComma = skillIndex < skills.length - 1 ? ', ' : '';
        content += `<span class="json-string">"${skill}"</span>${skillComma}`;
      });
      
      content += `<span class="json-bracket">]</span>${comma}`;
    });

    content += `
  <span class="json-bracket">}</span>,
  <span class="json-key">"soft_skills"</span>: <span class="json-bracket">{</span>`;

    // Soft Skills
    const softSkillKeys = Object.keys(this.skills.soft_skills);
    softSkillKeys.forEach((skillKey, index) => {
      const comma = index < softSkillKeys.length - 1 ? ',' : '';
      const skills = this.skills.soft_skills[skillKey];
      
      content += `
    <span class="json-key">"${skillKey}"</span>: <span class="json-bracket">[</span>`;
      
      skills.forEach((skill, skillIndex) => {
        const skillComma = skillIndex < skills.length - 1 ? ', ' : '';
        content += `<span class="json-string">"${skill}"</span>${skillComma}`;
      });
      
      content += `<span class="json-bracket">]</span>${comma}`;
    });

    content += `
  <span class="json-bracket">}</span>,
  <span class="json-key">"extra"</span>: <span class="json-bracket">{</span>`;

    // Extra Skills
    const extraSkillKeys = Object.keys(this.skills.extra);
    extraSkillKeys.forEach((skillKey, index) => {
      const comma = index < extraSkillKeys.length - 1 ? ',' : '';
      const skills = this.skills.extra[skillKey];
      
      content += `
    <span class="json-key">"${skillKey}"</span>: <span class="json-bracket">[</span>`;
      
      skills.forEach((skill, skillIndex) => {
        const skillComma = skillIndex < skills.length - 1 ? ', ' : '';
        content += `<span class="json-string">"${skill}"</span>${skillComma}`;
      });
      
      content += `<span class="json-bracket">]</span>${comma}`;
    });

    content += `
  <span class="json-bracket">}</span>
<span class="json-bracket">}</span>

✓ Data fetched successfully from BrandonFilth/skills`;

    return content;
  }

  generateSocialContent() {
    let content = `<span class="section">[SOCIAL_NETWORKS]</span>\n`;

    this.socialNetworks.forEach(social => {
      content += `\n<i class="${social.icon} ${social.color} mr-2"></i> ${social.platform}: <a href="${social.url}" class="link" target="_blank" rel="noopener noreferrer">${social.username}</a>\n`;
    });

    return content;
  }

  createContent() {
    const root = document.getElementById('root');
    
    // Generate content using the structured data above
    const personalInfoContent = this.generatePersonalInfoContent();
    const educationContent = this.generateEducationContent();
    const experienceContent = this.generateExperienceContent();
    const skillsContent = this.generateSkillsContent();
    const socialContent = this.generateSocialContent();

    root.innerHTML = `
      <div class="bg-black text-white overflow-x-hidden min-h-screen">
        <div class="min-h-screen py-8 px-4 relative z-10">
          <div class="max-w-4xl mx-auto text-center mb-12">
            <h1 class="text-6xl font-bold mb-4 hero-text" data-text="BRANDON CORREA">
              BRANDON CORREA
            </h1>
            <p class="text-xl font-mono">
              <span style="color: var(--content-blue)">Passionate About: </span>
              <span class="rotating-text"><span id="rotating-text"></span><span class="cursor"></span></span>
            </p>
          </div>
          
          <div class="max-w-6xl mx-auto space-y-8">
            ${this.createTerminal('Personal Information - ~/whoami', 'fas fa-folder', 'whoami', personalInfoContent, 500)}
            ${this.createTerminal('Education & Certifications - ~/education.conf', 'fas fa-folder', 'cat /etc/education.conf', educationContent, 800)}
            ${this.createTerminal('Work Experience - ~/api/experience', 'fas fa-folder', 'curl -H "Authorization: Bearer $GITHUB_TOKEN" -X GET', experienceContent, 1000)}
            ${this.createTerminal('Skills & Technologies - ~/api/skills', 'fas fa-folder', 'curl -H "Authorization: Bearer $GITHUB_TOKEN" -X GET', skillsContent, 1200)}
            ${this.createTerminal('Social Networks - ~/social_networks.conf', 'fas fa-folder', 'cat /etc/social_networks.conf', socialContent, 1400)}
          </div>
        </div>
      </div>
    `;
  }

  createTerminal(title, icon, command, content, delay) {
    const terminalId = `terminal-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
    this.terminals.push({ id: terminalId, content, command, delay, hasAnimated: false });
    
    return `
      <div id="${terminalId}" class="terminal-window">
        <div class="terminal-header">
          <div class="terminal-dots">
            <div class="dot red"></div>
            <div class="dot yellow"></div>
            <div class="dot green"></div>
          </div>
          <div class="terminal-title">
            <i class="${icon} mr-2"></i>
            ${title}
          </div>
        </div>
        <div class="terminal-content">
          <div class="terminal-content-text font-mono text-sm leading-relaxed overflow-hidden"></div>
        </div>
      </div>
    `;
  }

  startRotatingText() {
    const element = document.getElementById('rotating-text');
    if (!element) return;

    const type = () => {
      const currentText = this.rotatingTexts[this.currentTextIndex];
      
      if (this.isDeleting) {
        element.textContent = currentText.substring(0, this.currentCharIndex - 1);
        this.currentCharIndex--;
        
        if (this.currentCharIndex === 0) {
          this.isDeleting = false;
          this.currentTextIndex = (this.currentTextIndex + 1) % this.rotatingTexts.length;
          setTimeout(type, 500);
        } else {
          setTimeout(type, 50);
        }
      } else {
        element.textContent = currentText.substring(0, this.currentCharIndex + 1);
        this.currentCharIndex++;
        
        if (this.currentCharIndex === currentText.length) {
          this.isDeleting = true;
          setTimeout(type, 2000);
        } else {
          setTimeout(type, 100);
        }
      }
    };

    type();
  }

  observeTerminals() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const terminal = this.terminals.find(t => t.id === entry.target.id);
          if (terminal && !terminal.hasAnimated) {
            terminal.hasAnimated = true;
            this.animateTerminal(terminal);
          }
        }
      });
    }, { threshold: 0.5 });

    this.terminals.forEach(terminal => {
      const element = document.getElementById(terminal.id);
      if (element) {
        observer.observe(element);
      }
    });
  }

  animateTerminal(terminal) {
    const element = document.getElementById(terminal.id);
    const contentElement = element.querySelector('.terminal-content-text');
    
    setTimeout(() => {
      const initialContent = `<div class="mb-2">
        <span class="prompt">brandon@parrot:~$</span> 
        <span class="command">${terminal.command}</span>
      </div>`;
      
      contentElement.innerHTML = initialContent;
      
      setTimeout(() => {
        this.typeText(contentElement, terminal.content, initialContent);
      }, 200);
    }, terminal.delay);
  }

  typeText(element, text, initialContent) {
    let index = 0;
    const speed = 5;
    
    const typeChar = () => {
      if (index <= text.length) {
        const formattedContent = text.slice(0, index).replace(/\n/g, '<br>');
        element.innerHTML = initialContent + formattedContent;
        index++;
        setTimeout(typeChar, speed);
      }
    };
    
    typeChar();
  }
}

// Initialize the app when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  new PortfolioApp();
});
