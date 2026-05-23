import React, { useState, useEffect, useRef } from 'react';

// Native SVG Icon Components to eliminate dependencies
const ShieldIcon = () => <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>;
const TerminalIcon = () => <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>;
const MailIcon = () => <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>;
const CopyIcon = () => <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3a1 1 0 011-1h10a1 1 0 011 1v12a1 1 0 01-1 1h-4M3 7h10a1 1 0 011 1v12a1 1 0 01-1 1H3a1 1 0 01-1-1V8a1 1 0 011-1z" /></svg>;
const CheckIcon = () => <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>;
const InfoIcon = () => <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>;
const LayersIcon = () => <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>;
const ServerIcon = () => <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" /></svg>;
const CodeIcon = () => <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>;
const DatabaseIcon = () => <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M4 7v10c0 2.21 3.58 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.58 4 8 4s8-1.79 8-4M4 7c0-2.21 3.58-4 8-4s8 1.79 8 4m0 5c0 2.21-3.58 4-8 4s-8-1.79-8-4" /></svg>;
const SearchIcon = () => <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>;
const CalendarIcon = () => <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>;
const MapPinIcon = () => <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13 21.243l-4.657-4.657M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>;
const ChevronRightIcon = () => <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>;
const AwardIcon = () => <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5a2 2 0 10-2 2h2zm0 0h4m-4 0H8m12 3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>;
const GraduationCapIcon = () => <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" /></svg>;
const CpuIcon = () => <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 5h10a2 2 0 012 2v10a2 2 0 01-2 2H7a2 2 0 01-2-2V7a2 2 0 012-2z" /></svg>;
const LockIcon = () => <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>;
const ZapIcon = () => <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>;
const CheckCircleIcon = () => <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>;
const SendIcon = () => <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" /></svg>;

// Web3Forms API Integration: Get a free Access Key from https://web3forms.com/
// You can also define VITE_WEB3FORMS_KEY in your environment variables.
const WEB3FORMS_ACCESS_KEY = "0d8ddbca-27b3-4136-9a15-d7e95bf8a504";

const profileData = {
  name: "Cederic Martinez",
  title: "DevSecOps & Cybersecurity Engineer",
  location: "Mandaluyong City, Metro Manila, Philippines",
  objective: "To secure a challenging position in a reputable organization to expand my learning, knowledge, and skills, leveraging my deep intersection of secure software development and threat analysis.",
  stats: [
    { label: "Years in IT", value: "12+", description: "Dev & SecOps" },
    { label: "Certifications", value: "7", description: "CEH, DevSecOps, etc." },
    { label: "Security Tools", value: "15+", description: "SAST, DAST, SCA" },
    { label: "Cloud Platforms", value: "2", description: "AWS & Azure" }
  ],
  skills: [
    { name: "Python", category: "Languages", rating: 90 },
    { name: "PHP & CodeIgniter", category: "Languages", rating: 85 },
    { name: "C# & VB.NET", category: "Languages", rating: 80 },
    { name: "JavaScript / jQuery", category: "Languages", rating: 85 },
    { name: "Bash & Perl Scripting", category: "Languages", rating: 80 },
    { name: "Java & C++", category: "Languages", rating: 70 },
    { name: "Burp Suite Pro", category: "Security", rating: 90 },
    { name: "OWASP ZAP", category: "Security", rating: 85 },
    { name: "Snyk (SCA & Container)", category: "Security", rating: 90 },
    { name: "Sonarqube (SAST)", category: "Security", rating: 90 },
    { name: "Stackhawk (DAST)", category: "Security", rating: 85 },
    { name: "Nessus Vulnerability Scanner", category: "Security", rating: 85 },
    { name: "Qualys & Checkmarx One", category: "Security", rating: 80 },
    { name: "Prisma Cloud (IaC Scanner)", category: "Security", rating: 85 },
    { name: "MOBSF & AppKnox (Mobile)", category: "Security", rating: 80 },
    { name: "Frida & Objection", category: "Security", rating: 75 },
    { name: "Azure Cloud", category: "DevOpsCloud", rating: 85 },
    { name: "AWS Cloud Services", category: "DevOpsCloud", rating: 80 },
    { name: "Azure DevOps / Pipelines", category: "DevOpsCloud", rating: 90 },
    { name: "GitLab CI/CD", category: "DevOpsCloud", rating: 90 },
    { name: "Jenkins & AWS CodeDeploy", category: "DevOpsCloud", rating: 80 },
    { name: "Apache Airflow (ETL)", category: "DevOpsCloud", rating: 75 },
    { name: "MySQL / MSSQL / PostgreSQL", category: "Databases", rating: 85 },
    { name: "MongoDB & SQLite", category: "Databases", rating: 75 },
    { name: "VerticaDB & Oracle", category: "Databases", rating: 70 },
    { name: "Ubuntu Linux Server", category: "Databases", rating: 85 },
    { name: "Windows Server (2008/2012)", category: "Databases", rating: 75 }
  ],
  experiences: [
    {
      role: "DevSecOps Engineer",
      company: "Standard Chartered Group Services",
      location: "Makati City, Philippines",
      period: "July 2024 - Present",
      duties: [
        "Develop custom tools integrated directly into the CI/CD pipeline for automated audit and compliance purposes.",
        "Integrate robust application security tools inside active CI/CD pipelines.",
        "Collaborate with multi-regional stakeholders to analyze and draft requirements for secure automation.",
        "Provide direct tier-support and engineer onboarding for secure development toolchains.",
        "Deliver professional demos and training to leadership on newly engineered pipeline tools."
      ],
      projects: ["TIP Audit tools Integration", "Azure DevOps", "Azure Cloud Management", "Service Now automation", "Confluence Documentation Hub", "Qualys SecOps"]
    },
    {
      role: "DevSecOps Engineer",
      company: "ING Hubs PH",
      location: "Makati, Metro Manila, Philippines",
      period: "June 2023 - July 2024",
      duties: [
        "Performed intensive Proof of Concept/Value (PoC/PoV) evaluations on next-generation scanning and ETL tools.",
        "Reviewed and updated Data Loss Prevention (DLP) enterprise reports.",
        "Generated critical PoC assessment reports and delivered strategic recommendations to executive stakeholders.",
        "Conducted deep-dive vulnerability scanning using Nessus and shared security reports across dev groups.",
        "Reviewed, validated, and triaged vulnerabilities from automated scanning tools to coordinate rapid hotfixes."
      ],
      projects: ["Checkmarx One Assessment", "AquaSec Container Security PoC", "Apache Airflow ETL Workflows", "Nessus Security Scans", "Prisma Cloud Governance", "Azure DevOps pipelines"]
    },
    {
      role: "DevSecOps / AppSec Consultant",
      company: "Maya",
      location: "Mandaluyong City, Philippines",
      period: "January 2022 - June 2023",
      duties: [
        "Performed detailed information security reviews prior to production deployments of critical features.",
        "Analyzed Agile user stories and mapped cybersecurity requirements directly to backlog cards.",
        "Equipped development units with enterprise secure coding guidelines.",
        "Validated system integrity and VAPT (Vulnerability Assessment and Penetration Testing) compliance before approving production deployments.",
        "Configured and integrated a suite of automated scanning tools in GitLab pipelines (Stackhawk, Snyk, Sonarqube, Prisma).",
        "Conducted hands-on web and Android mobile application VAPT audits."
      ],
      projects: ["Enterprise-wide Maya Infosec Reviews", "GitLab DAST Integration (Stackhawk)", "SCA & Container Scanner Deployment (Snyk)", "PCI-DSS & ISO27001 Certification Support"]
    },
    {
      role: "Cyber Security Engineer Analyst",
      company: "Bayad Center (Cybersecurity Department)",
      location: "Pasig City, Philippines",
      period: "December 2020 - December 2021",
      duties: [
        "Executed security risk assessments during active sprint cycles to identify application flaws early.",
        "Reviewed technical architecture designs to provide concrete security baselines.",
        "Monitored Cloud Workload Protection Platforms (CWPP) to prevent runtime container breaches.",
        "Created actionable vulnerability assessment reports for software engineering teams.",
        "Coordinated large-scale deployment of cybersecurity projects, including Multi-Factor Authentication (MFA) and Virtual Firewalls (VFW)."
      ],
      projects: ["Bayad App (Mobile Security)", "Bayad Online Web App Security", "Bayad Integrated Platform (API Gateway Sec)", "Next-Gen Firewall (AWS Landing Zone)", "MFA Cloud/On-Premise Rollout"]
    },
    {
      role: "Lead Software Engineer",
      company: "Globe Telecom",
      location: "The Globe Tower, Taguig, Philippines",
      period: "May 2018 - December 2020",
      duties: [
        "Developed high-throughput enterprise systems using PHP (Codeigniter), Python, C#, and VB.net.",
        "Configured complex database models on PostgreSQL, MongoDB, VerticaDB, and MS SQL.",
        "Designed and secured REST and SOAP APIs utilizing modern authentication standards (OAuth, Basic Auth, Tokens).",
        "Served as Tier 3 Escalation Support resolving critical, high-impact application security incidents.",
        "Partnered with security analysts to harden Apache and Nginx web servers against OWASP Top 10 exploits."
      ],
      projects: ["Security Code Scanning (Fortify)", "Enterprise API Integrations (Python)", "IBM Watson Cognitive Integrations", "AWS Core Cloud Deployment"]
    },
    {
      role: "Junior PHP Developer",
      company: "Asticom / IPI (Deployed in Globe Telecom)",
      location: "Mandaluyong City, Philippines",
      period: "November 2015 - May 2018",
      duties: [
        "Developed, optimized, and supported internal enterprise web tools utilizing PHP, Bootstrap, and AJAX.",
        "Assisted in debug workflows and structured safe Methods of Procedures (MOPs) for systems deployment.",
        "Provided Tier-3 level technical support for critical internal business systems."
      ],
      projects: ["Globe Telecom PE-ASD Internal Tools", "Automated DB Management (MySQL & PostgreSQL)"]
    }
  ],
  certifications: [
    { title: "Certified DevSecOps Professional", issuer: "Practical DevSecOps", date: "Nov 2024", active: true },
    { title: "Certified in Cybersecurity", issuer: "ISC2", date: "June 2023", active: true },
    { title: "Certified Ethical Hacker (CEH)", issuer: "EC-Council", date: "July 2022", active: true },
    { title: "Certified Appsec Practitioner", issuer: "The SecOps Group", date: "Feb 2022", active: true },
    { title: "Certified PCI Security Implementer - Developer (CPISI-D)", issuer: "SISA", date: "Oct 2021", active: true },
    { title: "AWS Solutions Architect Associate", issuer: "Amazon Web Services", date: "Jan 2021 (ex)", active: false },
    { title: "AWS Cloud Practitioner", issuer: "Amazon Web Services", date: "June 2020 (ex)", active: false }
  ],
  education: {
    degree: "Bachelor of Science in Computer Engineering",
    period: "2009 - 2014",
    school: "Technological Institute of the Philippines",
    location: "Quiapo, Manila"
  }
};

export default function App() {
  const [activeTab, setActiveTab] = useState('all');
  const [skillSearch, setSkillSearch] = useState('');
  const [terminalHistory, setTerminalHistory] = useState([
    { text: 'Initializing cederic-secops core v1.0.4...', type: 'system' },
    { text: 'System status: SECURE. Firewall: ACTIVE.', type: 'system' },
    { text: 'Type "help" or click shortcuts below to explore.', type: 'welcome' }
  ]);
  const [terminalInput, setTerminalInput] = useState('');
  const [expandedExp, setExpandedExp] = useState(0);
  const [copiedText, setCopiedText] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '', botcheck: '' });
  const [formStatus, setFormStatus] = useState('');
  const terminalEndRef = useRef(null);

  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [terminalHistory]);

  const handleTerminalSubmit = (e) => {
    e.preventDefault();
    const cmd = terminalInput.trim().toLowerCase();
    if (!cmd) return;
    processCommand(cmd);
    setTerminalInput('');
  };

  const processCommand = (cmd) => {
    let response = [];
    const promptLine = `guest@cederic-secops:~$ ${cmd}`;
    
    switch(cmd) {
      case 'help':
        response = [
          { text: promptLine, type: 'command' },
          { text: 'Available commands:', type: 'output' },
          { text: '  about          - Brief overview of Cederic', type: 'output' },
          { text: '  skills         - List core technologies and tools', type: 'output' },
          { text: '  experience     - Display career & professional history', type: 'output' },
          { text: '  certs          - View cybersecurity credentials', type: 'output' },
          { text: '  scan           - Run dynamic portfolio security scanners', type: 'output' },
          { text: '  resume         - Retrieve secure PDF resume link', type: 'output' },
          { text: '  contact        - Display communication protocols', type: 'output' },
          { text: '  clear          - Flush terminal history', type: 'output' },
          { text: '  neofetch       - Display stylized system specs', type: 'output' }
        ];
        break;
      case 'about':
        response = [
          { text: promptLine, type: 'command' },
          { text: `Profile: ${profileData.name}`, type: 'output' },
          { text: `Title: ${profileData.title}`, type: 'output' },
          { text: `Objective: ${profileData.objective}`, type: 'output' },
          { text: `Location: ${profileData.location}`, type: 'output' }
        ];
        break;
      case 'skills':
        response = [
          { text: promptLine, type: 'command' },
          { text: '--- Key DevSecOps Tools Mastered ---', type: 'output' },
          { text: '  SAST/DAST: Sonarqube, Snyk, Stackhawk, OWASP ZAP, Burp Suite Pro', type: 'output' },
          { text: '  Cloud/CI:  Azure DevOps, GitLab, AWS, Azure, Jenkins', type: 'output' },
          { text: '  Languages: Python, PHP, CodeIgniter, Bash, JS, C#', type: 'output' }
        ];
        break;
      case 'experience':
      case 'work':
        response = [
          { text: promptLine, type: 'command' },
          { text: '--- Professional Journey ---', type: 'output' },
          ...profileData.experiences.map(exp => ({
            text: `  [+] ${exp.role} at ${exp.company} (${exp.period})`,
            type: 'output'
          }))
        ];
        break;
      case 'certs':
        response = [
          { text: promptLine, type: 'command' },
          { text: '--- Verified Active Certifications ---', type: 'output' },
          ...profileData.certifications.map(c => ({
            text: `  [✓] ${c.title} (${c.issuer} - ${c.date})`,
            type: 'output'
          }))
        ];
        break;
      case 'scan':
        response = [
          { text: promptLine, type: 'command' },
          { text: '[+] Launching dynamic AppSec vulnerability scan...', type: 'output' },
          { text: '[+] Auditing static React virtual DOM structure... [SECURE]', type: 'system' },
          { text: '[+] Checking TLS header configurations... [SECURE]', type: 'system' },
          { text: '[+] Testing inputs for XSS, SQLi, and prototype pollution... [COMPLIANT]', type: 'system' },
          { text: '[+] Assessing package dependency graph (Vite / React)... [0 VULNERABILITIES]', type: 'system' },
          { text: '[✔] Scan complete. Target is hardened. Compliance status: 100% SECURE.', type: 'welcome' }
        ];
        break;
      case 'resume':
      case 'cv':
        setTimeout(() => {
          window.open('./resume.pdf', '_blank');
        }, 1000);
        response = [
          { text: promptLine, type: 'command' },
          { text: '[!] Dispatching secure payload request: cederic_martinez_resume.pdf', type: 'system' },
          { text: '[!] Connection established. Opening resume in secondary sandbox window...', type: 'output' }
        ];
        break;
      case 'contact':
        response = [
          { text: promptLine, type: 'command' },
          { text: 'Communication vectors ready:', type: 'output' },
          { text: `  Location: ${profileData.location}`, type: 'output' },
          { text: '  Portal: Complete the web secure message gateway down below!', type: 'output' }
        ];
        break;
      case 'clear':
        setTerminalHistory([]);
        return;
      case 'neofetch':
        response = [
          { text: promptLine, type: 'command' },
          { text: '      .---.       cederic@secops-portal', type: 'output' },
          { text: '     /     \\      --------------------', type: 'output' },
          { text: '     \\  |  /      OS: DevSecOps Portfolio OS v2.0', type: 'output' },
          { text: '      `---`       Kernel: React 18 / Clean CSS Engine', type: 'output' },
          { text: '   _ /  |  \\ _    Shell: Interactive Sandbox Core', type: 'output' },
          { text: '  (  \\  |  /  )   Role: DevSecOps Infrastructure Engineer', type: 'output' },
          { text: '   `---`---`      Certifications: 7 Complete Profiles Registered', type: 'output' }
        ];
        break;
      default:
        response = [
          { text: promptLine, type: 'command' },
          { text: `bash: command not found: ${cmd}. Type "help" for catalog list.`, type: 'error' }
        ];
    }
    setTerminalHistory(prev => [...prev, ...response]);
  };

  const handleCopyClipboard = () => {
    const dummyText = `Cederic Martinez - DevSecOps & Cybersecurity Engineer Profile\nLocation: ${profileData.location}\nObjective: ${profileData.objective}`;
    const textarea = document.createElement('textarea');
    textarea.value = dummyText;
    document.body.appendChild(textarea);
    textarea.select();
    try {
      document.execCommand('copy');
      setCopiedText(true);
      setTimeout(() => setCopiedText(false), 2000);
    } catch (err) {}
    document.body.removeChild(textarea);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus('error');
      return;
    }

    if (formData.botcheck) {
      // Silently discard spam bots
      setFormStatus('success');
      setFormData({ name: '', email: '', message: '', botcheck: '' });
      return;
    }

    const lastSubmitted = localStorage.getItem('last_contact_submit');
    const now = Date.now();
    if (lastSubmitted && now - parseInt(lastSubmitted, 10) < 1000 * 60 * 5) { // 5 minutes limit
      setFormStatus('error');
      setTerminalHistory(prev => [
        ...prev,
        { text: `[✖] Pipeline transmission blocked: Rate limit exceeded. Please wait 5 minutes between messages.`, type: 'error' }
      ]);
      return;
    }

    setFormStatus('sending');

    const accessKey = import.meta.env.VITE_WEB3FORMS_KEY || WEB3FORMS_ACCESS_KEY;
    const isMock = !accessKey || accessKey === 'YOUR_WEB3FORMS_ACCESS_KEY_HERE';

    if (isMock) {
      // Simulated fallback flow
      setTimeout(() => {
        setFormStatus('success');
        setTerminalHistory(prev => [
          ...prev,
          { text: `[!] (Simulated) Incoming packet verified from ${formData.name} (${formData.email})`, type: 'system' },
          { text: `[!] Tunnel safe pipeline transmission complete (Configure WEB3FORMS_ACCESS_KEY for actual email delivery).`, type: 'system' }
        ]);
        setFormData({ name: '', email: '', message: '', botcheck: '' });
        localStorage.setItem('last_contact_submit', Date.now().toString());
      }, 1200);
      return;
    }

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: accessKey,
          name: formData.name,
          email: formData.email,
          message: formData.message,
          from_name: `${formData.name} (Portfolio Contact Form)`,
          subject: `New Secure Contact Message from ${formData.name}`
        })
      });

      const result = await response.json();
      if (response.ok && result.success) {
        setFormStatus('success');
        setTerminalHistory(prev => [
          ...prev,
          { text: `[!] Secure connection established. Packet verified from ${formData.name} (${formData.email})`, type: 'system' },
          { text: `[!] Secure pipeline transmission completed successfully. Email dispatched.`, type: 'system' }
        ]);
        setFormData({ name: '', email: '', message: '', botcheck: '' });
        localStorage.setItem('last_contact_submit', Date.now().toString());
      } else {
        throw new Error(result.message || 'Transmission failed');
      }
    } catch (err) {
      console.error('Contact Form Error:', err);
      setFormStatus('error');
      setTerminalHistory(prev => [
        ...prev,
        { text: `[✖] Pipeline transmission failure: ${err.message}`, type: 'error' }
      ]);
    }
  };

  const filteredSkills = profileData.skills.filter(s => {
    const matchesTab = activeTab === 'all' || s.category === activeTab;
    const matchesSearch = s.name.toLowerCase().includes(skillSearch.toLowerCase());
    return matchesTab && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans antialiased selection:bg-emerald-500 selection:text-slate-900">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 backdrop-blur-md bg-slate-950/80 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-tr from-emerald-500 to-cyan-500 flex items-center justify-center text-slate-950 shadow-lg">
                <ShieldIcon />
              </div>
              <div>
                <span className="font-mono font-bold tracking-tight text-white block">cederic_martinez</span>
                <span className="text-xs text-emerald-400 font-mono">devsecops.sh_</span>
              </div>
            </div>
            
            <div className="hidden md:flex items-center space-x-6 text-sm font-mono">
              <a href="#about" className="text-slate-300 hover:text-emerald-400 transition-colors">./about</a>
              <a href="#skills" className="text-slate-300 hover:text-emerald-400 transition-colors">./skills</a>
              <a href="#experience" className="text-slate-300 hover:text-emerald-400 transition-colors">./experience</a>
              <a href="#certifications" className="text-slate-300 hover:text-emerald-400 transition-colors">./certifications</a>
              <a href="#terminal-section" className="text-slate-300 hover:text-emerald-400 transition-colors">./terminal_hub</a>
              <a href="#contact" className="px-4 py-2 rounded-md bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 transition-all">
                ./contact_portal
              </a>
            </div>

            <div className="flex md:hidden">
              <a href="#contact" className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                <MailIcon />
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header id="about" className="relative pt-8 pb-16 lg:py-24 overflow-hidden border-b border-slate-900">
        <div className="absolute inset-0 bg-gradient-to-tr from-emerald-950/10 via-slate-950 to-slate-950 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-xs text-emerald-400 font-mono">
                <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse inline-block"></span>
                <span>Active pipeline shielding Standard Chartered Bank</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-none">
                Cederic <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-500">Martinez</span>
              </h1>
              
              <h2 className="text-lg sm:text-xl md:text-2xl font-mono text-slate-300">
                &gt;_ DevSecOps & Security Automation Specialist
              </h2>

              <p className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                Expertise in crafting robust, automated, audit-ready CI/CD pipelines, integrating enterprise SAST/DAST/SCA utilities, and executing detailed security testing across web and mobile platforms. Formerly at <span className="text-white font-semibold">Maya</span>, <span className="text-white font-semibold">ING Hubs</span>, and <span className="text-white font-semibold">Globe Telecom</span>.
              </p>

              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-4">
                <a href="#terminal-section" className="px-6 py-3 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-semibold flex items-center space-x-2 shadow-md transition-all">
                  <TerminalIcon />
                  <span>Launch Interactive Shell</span>
                </a>
                <a href="#contact" className="px-6 py-3 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-200 font-semibold border border-slate-800 transition-all">
                  <span>Get in touch</span>
                </a>
                <button onClick={handleCopyClipboard} className="p-3 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-slate-200 border border-slate-800 relative transition-all">
                  {copiedText ? <CheckIcon /> : <CopyIcon />}
                </button>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-900 text-left max-w-2xl mx-auto lg:mx-0">
                <div className="flex items-start space-x-3">
                  <div className="text-cyan-400 mt-0.5"><InfoIcon /></div>
                  <div>
                    <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400">Core Mission</h4>
                    <p className="text-sm text-slate-300 mt-1 italic">"{profileData.objective}"</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl border border-slate-800 bg-slate-900/90 p-6 shadow-2xl backdrop-blur-md">
                <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-6">
                  <div className="flex items-center space-x-1.5">
                    <span className="w-3 h-3 rounded-full bg-red-500"></span>
                    <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
                    <span className="w-3 h-3 rounded-full bg-emerald-500"></span>
                  </div>
                  <span className="text-xs font-mono text-slate-500">sys_metrics.sh</span>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  {profileData.stats.map((stat, idx) => (
                    <div key={idx} className="p-4 rounded-xl bg-slate-950/80 border border-slate-800/60 transition-colors">
                      <span className="block text-3xl font-extrabold text-white font-mono">{stat.value}</span>
                      <span className="block text-sm font-semibold text-slate-300 mt-1">{stat.label}</span>
                      <span className="block text-xs text-slate-500 mt-0.5">{stat.description}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-6 p-4 rounded-xl bg-slate-950 border border-slate-800 text-xs font-mono space-y-2">
                  <div className="flex justify-between">
                    <span className="text-slate-500">PRIMARY ROLE:</span>
                    <span className="text-emerald-400">DevSecOps Engineer</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">HOMETOWN:</span>
                    <span className="text-slate-300">Mandaluyong City</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </header>

      {/* Main Blocks */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-24">
        
        {/* Skills */}
        <section id="skills" className="scroll-mt-20">
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
            <h2 className="text-xs font-mono uppercase tracking-widest text-emerald-400">Hardened Skillset</h2>
            <h3 className="text-3xl font-bold text-white">Security & Development Ecosystem</h3>
          </div>

          <div className="bg-slate-900/50 border border-slate-900 rounded-2xl p-6 lg:p-8 backdrop-blur-sm">
            <div className="flex flex-wrap items-center justify-center gap-2 mb-8 border-b border-slate-800 pb-6">
              {[
                { id: 'all', label: 'All Stack', icon: LayersIcon },
                { id: 'Security', label: 'Security & Scanners', icon: ShieldIcon },
                { id: 'DevOpsCloud', label: 'DevOps & Cloud', icon: ServerIcon },
                { id: 'Languages', label: 'Languages', icon: CodeIcon },
                { id: 'Databases', label: 'Databases & Servers', icon: DatabaseIcon }
              ].map(tab => {
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`px-4 py-2 rounded-lg font-mono text-xs flex items-center space-x-2 border transition-all ${
                      activeTab === tab.id 
                        ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30' 
                        : 'bg-slate-950/40 text-slate-400 border-transparent hover:border-slate-800'
                    }`}
                  >
                    <Icon />
                    <span>{tab.label}</span>
                  </button>
                );
              })}
            </div>

            <div className="max-w-md mx-auto mb-8 relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-500"><SearchIcon /></div>
              <input
                type="text"
                placeholder="Search specific tool, scanner or language..."
                value={skillSearch}
                onChange={(e) => setSkillSearch(e.target.value)}
                className="w-full pl-10 pr-4 py-2 rounded-lg bg-slate-950 border border-slate-800 text-sm text-slate-200 font-mono focus:border-emerald-500/50 outline-none"
              />
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredSkills.map((skill, index) => (
                <div key={index} className="p-4 rounded-xl bg-slate-950 border border-slate-800/80 flex flex-col justify-between">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-slate-200">{skill.name}</span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-slate-900 text-slate-400 border border-slate-800">{skill.category}</span>
                  </div>
                  <div className="mt-4">
                    <div className="w-full h-1 bg-slate-900 rounded-full overflow-hidden">
                      <div className="h-full bg-emerald-500" style={{ width: `${skill.rating}%` }}></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 p-4 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-400 flex items-start space-x-3 max-w-3xl mx-auto">
              <div className="text-emerald-400 mt-0.5"><ZapIcon /></div>
              <p><strong className="text-slate-200">Continuous Pipeline Shifting:</strong> Automated verification processes prioritize running high-speed structural analysis metrics directly inside active workflow gates.</p>
            </div>
          </div>
        </section>

        {/* Journey/Experience */}
        <section id="experience" className="scroll-mt-20">
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
            <h2 className="text-xs font-mono uppercase tracking-widest text-emerald-400">Career Progress</h2>
            <h3 className="text-3xl font-bold text-white">Professional Journey</h3>
          </div>

          <div className="grid lg:grid-cols-12 gap-8">
            <div className="lg:col-span-4 space-y-3">
              {profileData.experiences.map((exp, idx) => (
                <button
                  key={idx}
                  onClick={() => setExpandedExp(idx)}
                  className={`w-full text-left p-4 rounded-xl border transition-all flex items-start space-x-3 ${
                    expandedExp === idx ? 'bg-slate-900 border-emerald-500/40' : 'bg-slate-950/40 border-slate-900'
                  }`}
                >
                  <div className={`w-2 h-2 rounded-full mt-1.5 shrink-0 ${expandedExp === idx ? 'bg-emerald-400' : 'bg-slate-700'}`}></div>
                  <div>
                    <h4 className="text-sm font-semibold text-white">{exp.role}</h4>
                    <p className="text-xs text-slate-400">{exp.company}</p>
                    <p className="text-[10px] font-mono text-slate-500">{exp.period}</p>
                  </div>
                </button>
              ))}
            </div>

            <div className="lg:col-span-8">
              <div className="bg-slate-900/60 border border-slate-900 rounded-2xl p-6 sm:p-8 space-y-6 relative overflow-hidden">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-slate-800 pb-6">
                  <div>
                    <h3 className="text-xl font-bold text-white">{profileData.experiences[expandedExp].role}</h3>
                    <p className="text-emerald-400 font-semibold font-mono text-sm mt-1">{profileData.experiences[expandedExp].company}</p>
                  </div>
                  <div className="text-left space-y-1 text-xs font-mono text-slate-400">
                    <div className="flex items-center space-x-1"><CalendarIcon /><span>{profileData.experiences[expandedExp].period}</span></div>
                    <div className="flex items-center space-x-1"><MapPinIcon /><span>{profileData.experiences[expandedExp].location}</span></div>
                  </div>
                </div>

                <div>
                  <h4 className="text-xs font-mono uppercase tracking-wider text-slate-500 mb-3">Key Responsibilities</h4>
                  <ul className="space-y-3">
                    {profileData.experiences[expandedExp].duties.map((duty, idx) => (
                      <li key={idx} className="flex items-start space-x-3 text-sm text-slate-300">
                        <div className="text-emerald-500 shrink-0 mt-0.5"><ChevronRightIcon /></div>
                        <span>{duty}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-xs font-mono uppercase tracking-wider text-slate-500 mb-3">Tech Pipelines Handled</h4>
                  <div className="flex flex-wrap gap-2">
                    {profileData.experiences[expandedExp].projects.map((project, idx) => (
                      <span key={idx} className="px-2.5 py-1 rounded-md bg-slate-950 border border-slate-800 text-xs text-slate-300 font-mono">{project}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Certifications */}
        <section id="certifications" className="scroll-mt-20">
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
            <h2 className="text-xs font-mono uppercase tracking-widest text-emerald-400">Industry Backed</h2>
            <h3 className="text-3xl font-bold text-white">Professional Credentials</h3>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {profileData.certifications.map((cert, idx) => (
              <div key={idx} className="rounded-2xl border border-slate-900 bg-slate-900/40 p-6 flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-lg bg-slate-950 border border-slate-800 flex items-center justify-center text-cyan-400"><AwardIcon /></div>
                    <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full ${cert.active ? 'text-emerald-400 bg-emerald-500/5' : 'text-slate-500 bg-slate-900'}`}>{cert.active ? 'ACTIVE' : 'EXPIRED'}</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-white leading-tight">{cert.title}</h4>
                    <p className="text-xs text-slate-400 mt-1 font-mono">Issuer: {cert.issuer}</p>
                  </div>
                </div>
                <div className="pt-4 mt-4 border-t border-slate-900/60 flex items-center justify-between text-xs font-mono">
                  <span className="text-slate-500">DATE:</span>
                  <span className="text-slate-300 font-semibold">{cert.date}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Education */}
        <section className="border-t border-slate-900 pt-16">
          <div className="max-w-3xl mx-auto p-6 rounded-2xl bg-slate-900/40 border border-slate-900 space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="text-emerald-400"><GraduationCapIcon /></div>
                <div>
                  <h4 className="font-bold text-white text-lg">{profileData.education.degree}</h4>
                  <p className="text-sm text-slate-400">{profileData.education.school}</p>
                </div>
              </div>
              <span className="text-xs font-mono bg-slate-950 px-2.5 py-1 rounded-md border border-slate-800 text-slate-400">{profileData.education.period}</span>
            </div>
          </div>
        </section>

        {/* Terminal Sandbox */}
        <section id="terminal-section" className="scroll-mt-20">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-2xl">
            <div className="bg-slate-950 px-6 py-4 flex items-center justify-between border-b border-slate-800">
              <div className="flex items-center space-x-3">
                <div className="flex items-center space-x-1.5">
                  <span className="w-3 h-3 rounded-full bg-red-500"></span>
                  <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
                  <span className="w-3 h-3 rounded-full bg-emerald-500"></span>
                </div>
                <span className="text-xs font-mono text-slate-400 flex items-center space-x-2 pl-3">
                  <TerminalIcon />
                  <span>terminal_session: cederic-secops-portal</span>
                </span>
              </div>
            </div>

            <div className="p-6 h-64 overflow-y-auto bg-slate-950 font-mono text-xs text-slate-300 space-y-2">
              {terminalHistory.map((item, idx) => (
                <p key={idx} className={
                  item.type === 'system' ? 'text-slate-500' :
                  item.type === 'welcome' ? 'text-emerald-400 font-semibold' :
                  item.type === 'command' ? 'text-white mt-3' :
                  item.type === 'error' ? 'text-rose-400 pl-2' : 'text-slate-300 pl-2'
                }>{item.text}</p>
              ))}
              <div ref={terminalEndRef}></div>
            </div>

            <div className="px-6 py-3 bg-slate-900 border-t border-slate-800/80 flex flex-wrap gap-2 items-center text-xs">
              <span className="text-slate-500 font-mono text-[11px] mr-2">SHORTCUTS:</span>
              {['neofetch', 'about', 'skills', 'experience', 'certs', 'scan', 'resume', 'contact', 'clear'].map(cmd => (
                <button key={cmd} onClick={() => processCommand(cmd)} className="px-2.5 py-1 rounded bg-slate-950 hover:bg-emerald-500 hover:text-slate-950 text-emerald-400 font-mono border border-slate-800 transition-colors">./{cmd}</button>
              ))}
            </div>

            <form onSubmit={handleTerminalSubmit} className="bg-slate-950 border-t border-slate-800 flex items-center px-4 py-3">
              <span className="text-emerald-400 font-mono text-xs mr-2">guest@cederic-secops:~$</span>
              <input
                type="text"
                value={terminalInput}
                onChange={(e) => setTerminalInput(e.target.value)}
                placeholder='Type command (e.g. "neofetch") & press Enter...'
                className="w-full bg-transparent text-slate-100 border-none outline-none text-xs font-mono focus:ring-0 p-0"
              />
            </form>
          </div>
        </section>

        {/* Contact Gateway */}
        <section id="contact" className="scroll-mt-20">
          <div className="grid lg:grid-cols-12 gap-12 bg-slate-900/40 border border-slate-900 rounded-3xl p-8 sm:p-12 backdrop-blur-sm">
            <div className="lg:col-span-5 space-y-6">
              <h3 className="text-3xl font-extrabold text-white">Initialize Contact Protocol</h3>
              <p className="text-slate-400 text-sm">Have an active deployment infrastructure target? Send packet details into the network portal interface.</p>
              <div className="space-y-3 font-mono text-xs text-slate-300">
                <div className="flex items-center space-x-2"><MapPinIcon /><span className="text-slate-400">{profileData.location}</span></div>
                <div className="flex items-center space-x-2"><LockIcon /><span className="text-slate-500">Vector Secure Gate Verified</span></div>
              </div>
            </div>

            <div className="lg:col-span-7">
              <form onSubmit={handleFormSubmit} className="space-y-4">
                {/* Honeypot field for spam prevention */}
                <input
                  type="text"
                  name="botcheck"
                  value={formData.botcheck}
                  onChange={(e) => setFormData({ ...formData, botcheck: e.target.value })}
                  className="hidden"
                  style={{ display: 'none' }}
                  tabIndex="-1"
                  autoComplete="off"
                />
                <div className="grid sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    placeholder="Identity Name"
                    className="w-full px-4 py-3 rounded-lg bg-slate-950 border border-slate-800 text-sm text-slate-200 outline-none"
                  />
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    placeholder="Communication Email"
                    className="w-full px-4 py-3 rounded-lg bg-slate-950 border border-slate-800 text-sm text-slate-200 outline-none"
                  />
                </div>
                <textarea
                  required
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  placeholder="Data Message specifications..."
                  className="w-full px-4 py-3 rounded-lg bg-slate-950 border border-slate-800 text-sm text-slate-200 outline-none resize-none"
                ></textarea>

                {formStatus === 'success' && (
                  <div className="p-3 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono flex items-center space-x-2 rounded-lg">
                    <CheckCircleIcon /><span>Packet verified. Terminal updated with connection handshakes.</span>
                  </div>
                )}

                <button type="submit" className="w-full py-3 rounded-lg bg-gradient-to-r from-emerald-500 to-teal-500 text-slate-950 font-bold flex items-center justify-center space-x-2">
                  <SendIcon /><span>{formStatus === 'sending' ? 'Transmitting...' : 'Transmit Secure Message'}</span>
                </button>
              </form>
            </div>
          </div>
        </section>

      </main>

      <footer className="border-t border-slate-900 bg-slate-950 py-12 text-center text-xs font-mono text-slate-600 space-y-2">
        <p>© {new Date().getFullYear()} Cederic Martinez. Integrity validated. All systems functional.</p>
      </footer>
    </div>
  );
}