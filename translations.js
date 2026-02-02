// Translations for CV Website
const translations = {
    nl: {
        // Navigation
        "nav.about": "Over Mij",
        "nav.skills": "Vaardigheden",
        "nav.experience": "Werkervaring",
        "nav.education": "Opleidingen",
        "nav.hobbies": "Hobby's",
        "nav.projects": "Projecten",
        "nav.contact": "Contact",
        
        // Hero
        "hero.tagline": "IT Professional | Datamanagement & Applicatiebeheer",
        "hero.subtitle": "Van Servicedesk naar Datamanagement met passie voor automatisering en dashboard development",
        
        // Stats
        "stats.experience": "Jaren Ervaring",
        "stats.clients": "Klanten",
        "stats.markets": "Internationale Markten",
        "stats.dashboards": "Live Dashboards Gebouwd",
        
        // About
        "about.title": "Over Mij",
        "about.intro": "Ik ben Ivor, een nieuwsgierige IT'er die het liefst de hele dag puzzelt aan <strong>data en automatisering</strong>. Van jongs af aan gefascineerd door technologie – of het nu ging om game addons bouwen of mijn eerste scripts schrijven. Die passie heb ik omgezet in een carrière waarin ik dagelijks bedrijfsprocessen optimaliseer en data omzet in bruikbare inzichten.",
        "about.data.title": "Data & BI",
        "about.data.desc": "PowerBI dashboards en data pipelines voor internationale klanten in 4 markten.",
        "about.automation.title": "Automatisering",
        "about.automation.desc": "Python scripts, API integraties en automatische dataverzameling voor real-time inzichten.",
        "about.apps.title": "Applicatiebeheer",
        "about.apps.desc": "Onderhoud en beheer van ERP/CRM systemen met focus op stabiliteit en performance.",
        "about.team.title": "Teamspeler",
        "about.team.desc": "Ervaring met het trainen van collega's en het opstellen van documentatie.",
        
        // Skills
        "skills.title": "Technische Vaardigheden",
        "skills.programming": "Programmeertalen & Scripting",
        "skills.databi": "Data & Business Intelligence",
        "skills.appmanagement": "Applicatiebeheer & Integratie",
        "skills.devops": "Development & DevOps",
        "skills.itsm": "IT Service Management",
        "skills.languages": "Talen",
        // Skill tags
        "skill.datacollection": "Geautomatiseerde Data Collectie",
        "skill.reporting": "Rapportage & Visualisatie",
        "skill.topdesk": "TopDesk (Beheer & Inrichting)",
        "skill.api": "API Architectuur & Koppelingen",
        "skill.selfservice": "SelfService Portaal Beheer",
        "skill.ticketing": "Ticketsysteem Configuratie",
        "skill.webhosting": "Webhosting & Server Beheer",
        "skill.automation": "Automatisering",
        "skill.customersupport": "Klant Support",
        "skill.documentation": "Documentatie & Training",
        "skill.dutch": "Nederlands (Native)",
        "skill.english": "Engels (Proficient)",
        
        // Experience
        "experience.title": "Werkervaring",
        "exp.acrelec.title": "Datamanagement & Applicatiebeheer",
        "exp.acrelec.period": "2025 - Heden",
        "exp.acrelec.desc": "Als enige medewerker volledig verantwoordelijk voor het end-to-end beheer van ETL-datastromen, datakwaliteit en de ontwikkeling van live dashboards voor meerdere internationale markten. Van data-extractie tot rapportage: ik ontwerp, bouw, test en onderhoud de complete data-pipeline.",
        "exp.acrelec2.title": "Senior Servicedesk Engineer",
        "exp.acrelec2.period": "2020 - Heden",
        "exp.acrelec2.desc": "Acrelec ontwikkelt en verkoopt self-service point of sale systemen voor grote klanten zoals McDonalds, KFC en Burger King. Sinds 2025 gecombineerd met Datamanagement taken.",
        "exp.optinet.title": "Hulpmonteur Datatechniek",
        "exp.optinet.company": "Optinet - Glasvezel, netwerkbekabeling, wifi- en datanetwerken",
        "exp.optinet.period": "2019 - 2020",
        "exp.optinet.desc": "Optinet installeert patchkasten en legt netwerkkabels aan in bedrijven.",
        "exp.loods5.title": "Verkooppersoneel",
        "exp.loods5.period": "2018 - 2019",
        "exp.loods5.desc": "Een grote loods waar veel kleine winkels een ruimte kunnen huren om verkoopwaar te verkopen.",
        "exp.flamco.title": "Productie Medewerker & Onderhoudsmonteur",
        "exp.flamco.period": "2011 - 2014",
        "exp.flamco.desc": "Flamco produceert voornamelijk expansievaten en installatie onderdelen.",
        
        // Experience details - ACRELEC 1
        "exp.h4.funcapp": "Functioneel Applicatiebeheer:",
        "exp.acrelec.task1": "TopDesk ingericht voor de organisatie",
        "exp.acrelec.task2": "API koppelingen opgezet tussen TopDesk en andere applicaties/organisaties",
        "exp.acrelec.task3": "TopDesk SelfService portaal inrichten voor klanten",
        "exp.h4.bi": "Business Intelligence & Rapportage:",
        "exp.acrelec.biintro": "Als enige medewerker volledig eigenaar van de BI-keten. Oorspronkelijk PowerBI dashboards ontwikkeld, inmiddels herontwikkeld naar een volwaardige Python/Flask webapplicatie met REST API, real-time KPI monitoring en SLA compliance tracking. Verantwoordelijk voor datakwaliteit, datastromen en rapportages voor:",
        "exp.region.nl": "Nederland:",
        "exp.region.be": "België:",
        "exp.region.uae": "UAE:",
        "exp.region.es": "Spanje:",
        "exp.region.global": "Internationaal:",
        "exp.region.global.desc": "Data collectie en API architectuur voor McDonald's Global",
        "exp.h4.dataeng": "Data Engineering & ETL-ontwikkeling:",
        "exp.acrelec.data1": "End-to-end ETL-processen ontworpen en geïmplementeerd: extractie, transformatie en laden van data uit diverse bronnen",
        "exp.acrelec.data2": "Datakwaliteitscontroles en validatie ingebouwd in geautomatiseerde datastromen",
        "exp.acrelec.data3": "Data-opslag en -modellering in SQL databases, met aanvullende exports naar JSON en CSV",
        "exp.acrelec.data4": "Volledige eigenaarschap over data-pipeline: van ontwikkeling en testen tot productie en onderhoud",
        "exp.h4.softdev": "Software Development:",
        "exp.acrelec.soft1": "TopDesk Benelux Hub: Volledige webapplicatie (Python/Flask) met REST API voor cross-country IT service management rapportages (NL, BE, LU)",
        "exp.acrelec.soft2": "Real-time dashboards met SLA monitoring, incident management, export functionaliteit (CSV, Excel, JSON) en geautomatiseerde data-aggregatie",
        "exp.acrelec.soft3": "VNC Remote Access tool: automatisch invullen van IP-adressen en credentials op basis van locatie- en devicenummer",
        "exp.h4.server": "Server & Infrastructuur Beheer:",
        "exp.acrelec.serv1": "Beheer fileserver als DataWarehouse",
        "exp.acrelec.serv2": "GIT Updates server voor applicatie distributie",
        "exp.acrelec.serv3": "Webhosting voor live dashboard pagina's",
        "exp.acrelec.serv4": "Login server voor credential management",
        "exp.h4.support": "Support & Kennisdeling:",
        "exp.acrelec.sup1": "Ondersteuning van collega's en klanten met TopDesk gebruikersvragen",
        "exp.acrelec.sup2": "Beantwoorden van diepgaand technische vragen over data en rapportages",
        
        // Experience details - ACRELEC 2
        "exp.h4.core": "Kernverantwoordelijkheden:",
        "exp.acrelec2.core1": "Gemiddeld 40-50 klanten telefonisch te woord staan per dag",
        "exp.acrelec2.core2": "Behandelen van complexe en P1 tickets",
        "exp.acrelec2.core3": "Schakelen met derde partijen waar nodig",
        "exp.acrelec2.core4": "Training van Junior Servicedesk Engineers",
        "exp.acrelec2.core5": "Opstellen van up-to-date troubleshooting documentatie",
        "exp.h4.autodev": "Automatisering & Ontwikkeling:",
        "exp.acrelec2.auto1": "Remote Access batch scripts ontwikkeld in C",
        "exp.acrelec2.auto2": "AI-based Python script voor automatische categorisatie en SLA correctie van TopDesk tickets",
        "exp.h4.oncall": "Consignatiedienst:",
        "exp.acrelec2.oncall1": "Maandag t/m donderdag: 17:30 - 02:30",
        "exp.acrelec2.oncall2": "24 uur bereikbaar van vrijdag t/m zondag",
        
        // Experience details - Optinet
        "exp.optinet.task1": "Glasvezel lassen",
        "exp.optinet.task2": "RJ45 afmontage",
        "exp.optinet.task3": "Bouwtekeningen uitlezen en aanpassen",
        "exp.optinet.task4": "RJ45 metingen en keuringen uitvoeren",
        
        // Experience details - Flamco
        "exp.flamco.task1": "Productie werkzaamheden",
        "exp.flamco.task2": "Onderhoudsmonteur op elektra en mechatronica",
        
        // Education
        "education.title": "Opleidingen & Certificeringen",
        "edu.aeres.title": "Vakbekwaam Medewerker Dierverzorging",
        "edu.aeres.institution": "Aeres MBO Barneveld",
        "edu.aeres.period": "2015 - 2019",
        "edu.dirksen.title": "KVD, HVD, ISRA Cursus",
        "edu.dirksen.institution": "Dirksen Opleidingen",
        "edu.dirksen.period": "2014",
        "edu.roc1.title": "Interactieve Vormgeving / Art & Design",
        "edu.roc1.institution": "ROC Midden Nederland",
        "edu.roc1.period": "2013 - 2014",
        "edu.roc2.title": "ICT",
        "edu.roc2.institution": "ROC Midden Nederland",
        "edu.roc2.period": "2012 - 2013",
        
        // Hobbies
        "hobbies.title": "Hobby's & Nevenactiviteiten",
        "hobby.lorcana.title": "Online Evenement Organisator - Disney Lorcana",
        "hobby.lorcana.period": "2023 - Heden",
        "hobby.lorcana.desc": "Organiseren van online Lorcana toernooien via Discord en Pixelborn. Sinds 2025 volledig gericht op online evenementen.",
        "hobby.trading.title": "Trading Card Handel",
        "hobby.trading.desc": "Inkoop en verkoop van trading cards met focus op marktanalyse en trends.",
        "hobby.tag.marketanalysis": "Marktanalyse",
        "hobby.tag.trends": "Trends Analyse",
        "hobby.tag.buysell": "Inkoop & Verkoop",
        "hobby.webdev.title": "Website Development",
        "hobby.webdev.desc": "Bouwen van websites als hobby en om vaardigheden te ontwikkelen.",
        "hobby.homelab.title": "Home Lab & Tinkering",
        "hobby.homelab.desc": "Experimenteren met servers, netwerken en nieuwe technologieën thuis.",
        "hobby.bots.title": "Game Addon Development",
        "hobby.bots.period": "2008 - Heden",
        "hobby.bots.desc": "Jarenlange ervaring met het ontwikkelen van automatisering scripts en addons voor games.",
        "hobby.bots.rs": "<strong>RuneScape</strong> (2008-2015): Addons in JavaScript en C#",
        "hobby.bots.wow": "<strong>World of Warcraft</strong> (2014-2016): Addons in LUA & XML",
        "hobby.bots.gw": "<strong>Guild Wars</strong> (2010-heden): AutoIT/Pascal, nu actief in PY4GW community project (Python)",
        "hobby.videogames.title": "Videogames",
        "hobby.videogames.desc": "Gaming als ontspanning en sociale activiteit.",
        "hobby.competitive.title": "Competitief Disney Lorcana Speler",
        "hobby.competitive.desc": "Actief deelnemer aan toernooien door heel Nederland en daarbuiten.",
        "hobby.tag.strategic": "Strategisch Denken",
        "hobby.tag.deckbuilding": "Deckbuilding",
        "hobby.tag.meta": "Meta-analyse",
        "hobby.tag.trendpred": "Trend Voorspelling",
        "hobby.tabletop.title": "Tabletop Games",
        "hobby.tabletop.desc": "Bordspellen en tabletop RPG's spelen met vrienden.",
        
        // Projects
        "projects.title": "Projecten",
        "projects.intro": "Een selectie van mijn open-source projecten en persoonlijke werk.",
        "projects.badge.community": "Community Project",
        "projects.badge.personal": "Persoonlijk Project",
        "projects.viewongithub": "Bekijk op GitHub",
        "projects.py4gw.desc": "Python framework voor Guild Wars automatisering. Actief contributor aan dit community-gedreven project.",
        "projects.lorcana.desc": "Website voor de Disney Lorcana community in Amersfoort. Evenementen, rankings en community features.",
        "projects.cvwebsite.title": "CV Website",
        "projects.cvwebsite.desc": "Deze website! Gebouwd met pure HTML, CSS en JavaScript. Dark/light mode, meertalig, en volledig responsive.",
        "projects.gwguides.desc": "Interactieve GWAMM gids voor Guild Wars 1. Missie walkthroughs met kaarten, calculator, checklist en campagne-specifieke routes.",
        "projects.badge.ongoing": "Lopend Project",
        
        // Contact
        "contact.title": "Contact",
        "contact.email": "E-mail",
        "contact.linkedin": "Bekijk mijn profiel",
        "contact.locationLabel": "Locatie",
        "contact.location": "Amersfoort, Nederland",
        "contact.download": "Download als PDF",
        
        // Footer
        "footer.copyright": "© 2026 Ivor Rödel - IT Professional | Datamanagement & Applicatiebeheer"
    },
    en: {
        // Navigation
        "nav.about": "About Me",
        "nav.skills": "Skills",
        "nav.experience": "Experience",
        "nav.education": "Education",
        "nav.hobbies": "Hobbies",
        "nav.projects": "Projects",
        "nav.contact": "Contact",
        
        // Hero
        "hero.tagline": "IT Professional | Data Management & Application Management",
        "hero.subtitle": "From Servicedesk to Data Management with a passion for automation and dashboard development",
        
        // Stats
        "stats.experience": "Years Experience",
        "stats.clients": "Clients",
        "stats.markets": "International Markets",
        "stats.dashboards": "Live Dashboards Built",
        
        // About
        "about.title": "About Me",
        "about.intro": "I'm Ivor, a curious IT professional who loves spending all day puzzling over <strong>data and automation</strong>. Fascinated by technology from a young age – whether it was building game addons or writing my first scripts. I've turned that passion into a career where I optimize business processes daily and transform data into actionable insights.",
        "about.data.title": "Data & BI",
        "about.data.desc": "PowerBI dashboards and data pipelines for international clients across 4 markets.",
        "about.automation.title": "Automation",
        "about.automation.desc": "Python scripts, API integrations and automated data collection for real-time insights.",
        "about.apps.title": "Application Management",
        "about.apps.desc": "Maintenance and management of ERP/CRM systems with focus on stability and performance.",
        "about.team.title": "Team Player",
        "about.team.desc": "Experience with training colleagues and creating documentation.",
        
        // Skills
        "skills.title": "Technical Skills",
        "skills.programming": "Programming Languages & Scripting",
        "skills.databi": "Data & Business Intelligence",
        "skills.appmanagement": "Application Management & Integration",
        "skills.devops": "Development & DevOps",
        "skills.itsm": "IT Service Management",
        "skills.languages": "Languages",
        // Skill tags
        "skill.datacollection": "Automated Data Collection",
        "skill.reporting": "Reporting & Visualization",
        "skill.topdesk": "TopDesk (Management & Configuration)",
        "skill.api": "API Architecture & Integrations",
        "skill.selfservice": "Self-Service Portal Management",
        "skill.ticketing": "Ticketing System Configuration",
        "skill.webhosting": "Web Hosting & Server Management",
        "skill.automation": "Automation",
        "skill.customersupport": "Customer Support",
        "skill.documentation": "Documentation & Training",
        "skill.dutch": "Dutch (Native)",
        "skill.english": "English (Proficient)",
        
        // Experience
        "experience.title": "Work Experience",
        "exp.acrelec.title": "Data Management & Application Management",
        "exp.acrelec.period": "2025 - Present",
        "exp.acrelec.desc": "As the sole employee fully responsible for end-to-end management of ETL data flows, data quality and development of live dashboards across multiple international markets. From data extraction to reporting: I design, build, test and maintain the complete data pipeline.",
        "exp.acrelec2.title": "Senior Servicedesk Engineer",
        "exp.acrelec2.period": "2020 - Present",
        "exp.acrelec2.desc": "Acrelec develops and sells self-service point of sale systems for major clients like McDonalds, KFC and Burger King. Since 2025 combined with Data Management tasks.",
        "exp.optinet.title": "Assistant Data Technician",
        "exp.optinet.company": "Optinet - Fiber optics, network cabling, wifi and data networks",
        "exp.optinet.period": "2019 - 2020",
        "exp.optinet.desc": "Optinet installs patch panels and network cabling in businesses.",
        "exp.loods5.title": "Sales Staff",
        "exp.loods5.period": "2018 - 2019",
        "exp.loods5.desc": "A large warehouse where many small shops can rent space to sell their merchandise.",
        "exp.flamco.title": "Production Worker & Maintenance Technician",
        "exp.flamco.period": "2011 - 2014",
        "exp.flamco.desc": "Flamco primarily produces expansion vessels and installation components.",
        
        // Experience details - ACRELEC 1
        "exp.h4.funcapp": "Functional Application Management:",
        "exp.acrelec.task1": "Configured TopDesk for the organization",
        "exp.acrelec.task2": "Set up API integrations between TopDesk and other applications/organizations",
        "exp.acrelec.task3": "Configure TopDesk SelfService portal for clients",
        "exp.h4.bi": "Business Intelligence & Reporting:",
        "exp.acrelec.biintro": "As the sole employee, full ownership of the BI chain. Originally developed PowerBI dashboards, now redeveloped into a full-fledged Python/Flask web application with REST API, real-time KPI monitoring and SLA compliance tracking. Responsible for data quality, data flows and reporting for:",
        "exp.region.nl": "Netherlands:",
        "exp.region.be": "Belgium:",
        "exp.region.uae": "UAE:",
        "exp.region.es": "Spain:",
        "exp.region.global": "International:",
        "exp.region.global.desc": "Data collection and API architecture for McDonald's Global",
        "exp.h4.dataeng": "Data Engineering & ETL Development:",
        "exp.acrelec.data1": "Designed and implemented end-to-end ETL processes: extraction, transformation and loading of data from diverse sources",
        "exp.acrelec.data2": "Built-in data quality controls and validation in automated data flows",
        "exp.acrelec.data3": "Data storage and modeling in SQL databases, with additional exports to JSON and CSV",
        "exp.acrelec.data4": "Full ownership of data pipeline: from development and testing to production and maintenance",
        "exp.h4.softdev": "Software Development:",
        "exp.acrelec.soft1": "TopDesk Benelux Hub: Full web application (Python/Flask) with REST API for cross-country IT service management reporting (NL, BE, LU)",
        "exp.acrelec.soft2": "Real-time dashboards with SLA monitoring, incident management, export functionality (CSV, Excel, JSON) and automated data aggregation",
        "exp.acrelec.soft3": "VNC Remote Access tool: automatically fill in IP addresses and credentials based on location and device number",
        "exp.h4.server": "Server & Infrastructure Management:",
        "exp.acrelec.serv1": "Manage file server as DataWarehouse",
        "exp.acrelec.serv2": "GIT Updates server for application distribution",
        "exp.acrelec.serv3": "Web hosting for live dashboard pages",
        "exp.acrelec.serv4": "Login server for credential management",
        "exp.h4.support": "Support & Knowledge Sharing:",
        "exp.acrelec.sup1": "Supporting colleagues and clients with TopDesk user questions",
        "exp.acrelec.sup2": "Answering in-depth technical questions about data and reports",
        
        // Experience details - ACRELEC 2
        "exp.h4.core": "Core Responsibilities:",
        "exp.acrelec2.core1": "Handle an average of 40-50 customer calls per day",
        "exp.acrelec2.core2": "Handle complex and P1 tickets",
        "exp.acrelec2.core3": "Coordinate with third parties as needed",
        "exp.acrelec2.core4": "Training Junior Servicedesk Engineers",
        "exp.acrelec2.core5": "Creating up-to-date troubleshooting documentation",
        "exp.h4.autodev": "Automation & Development:",
        "exp.acrelec2.auto1": "Developed Remote Access batch scripts in C",
        "exp.acrelec2.auto2": "AI-based Python script for automatic categorization and SLA correction of TopDesk tickets",
        "exp.h4.oncall": "On-Call Service:",
        "exp.acrelec2.oncall1": "Monday through Thursday: 17:30 - 02:30",
        "exp.acrelec2.oncall2": "24 hours available Friday through Sunday",
        
        // Experience details - Optinet
        "exp.optinet.task1": "Fiber optic splicing",
        "exp.optinet.task2": "RJ45 termination",
        "exp.optinet.task3": "Reading and adjusting construction drawings",
        "exp.optinet.task4": "Performing RJ45 measurements and inspections",
        
        // Experience details - Flamco
        "exp.flamco.task1": "Production work",
        "exp.flamco.task2": "Maintenance technician for electrical and mechatronics",
        
        // Education
        "education.title": "Education & Certifications",
        "edu.aeres.title": "Qualified Animal Care Worker",
        "edu.aeres.institution": "Aeres MBO Barneveld",
        "edu.aeres.period": "2015 - 2019",
        "edu.dirksen.title": "KVD, HVD, ISRA Course",
        "edu.dirksen.institution": "Dirksen Training",
        "edu.dirksen.period": "2014",
        "edu.roc1.title": "Interactive Design / Art & Design",
        "edu.roc1.institution": "ROC Midden Nederland",
        "edu.roc1.period": "2013 - 2014",
        "edu.roc2.title": "ICT",
        "edu.roc2.institution": "ROC Midden Nederland",
        "edu.roc2.period": "2012 - 2013",
        
        // Hobbies
        "hobbies.title": "Hobbies & Side Activities",
        "hobby.lorcana.title": "Online Event Organizer - Disney Lorcana",
        "hobby.lorcana.period": "2023 - Present",
        "hobby.lorcana.desc": "Organizing online Lorcana tournaments via Discord and Pixelborn. Since 2025 fully focused on online events.",
        "hobby.trading.title": "Trading Card Business",
        "hobby.trading.desc": "Buying and selling trading cards with focus on market analysis and trends.",
        "hobby.tag.marketanalysis": "Market Analysis",
        "hobby.tag.trends": "Trend Analysis",
        "hobby.tag.buysell": "Buying & Selling",
        "hobby.webdev.title": "Website Development",
        "hobby.webdev.desc": "Building websites as a hobby and to develop skills.",
        "hobby.homelab.title": "Home Lab & Tinkering",
        "hobby.homelab.desc": "Experimenting with servers, networks and new technologies at home.",
        "hobby.bots.title": "Game Addon Development",
        "hobby.bots.period": "2008 - Present",
        "hobby.bots.desc": "Years of experience developing automation scripts and addons for games.",
        "hobby.bots.rs": "<strong>RuneScape</strong> (2008-2015): Addons in JavaScript and C#",
        "hobby.bots.wow": "<strong>World of Warcraft</strong> (2014-2016): Addons in LUA & XML",
        "hobby.bots.gw": "<strong>Guild Wars</strong> (2010-present): AutoIT/Pascal, now active in PY4GW community project (Python)",
        "hobby.videogames.title": "Video Games",
        "hobby.videogames.desc": "Gaming as relaxation and social activity.",
        "hobby.competitive.title": "Competitive Disney Lorcana Player",
        "hobby.competitive.desc": "Active participant in tournaments throughout the Netherlands and beyond.",
        "hobby.tag.strategic": "Strategic Thinking",
        "hobby.tag.deckbuilding": "Deckbuilding",
        "hobby.tag.meta": "Meta-analysis",
        "hobby.tag.trendpred": "Trend Prediction",
        "hobby.tabletop.title": "Tabletop Games",
        "hobby.tabletop.desc": "Playing board games and tabletop RPGs with friends.",
        
        // Projects
        "projects.title": "Projects",
        "projects.intro": "A selection of my open-source projects and personal work.",
        "projects.badge.community": "Community Project",
        "projects.badge.personal": "Personal Project",
        "projects.viewongithub": "View on GitHub",
        "projects.py4gw.desc": "Python framework for Guild Wars automation. Active contributor to this community-driven project.",
        "projects.lorcana.desc": "Website for the Disney Lorcana community in Amersfoort. Events, rankings and community features.",
        "projects.cvwebsite.title": "CV Website",
        "projects.cvwebsite.desc": "This website! Built with pure HTML, CSS and JavaScript. Dark/light mode, multilingual, and fully responsive.",
        "projects.gwguides.desc": "Interactive GWAMM guide for Guild Wars 1. Mission walkthroughs with maps, calculator, checklist and campaign-specific routes.",
        "projects.badge.ongoing": "Ongoing Project",
        
        // Contact
        "contact.title": "Contact",
        "contact.email": "Email",
        "contact.linkedin": "View my profile",
        "contact.locationLabel": "Location",
        "contact.location": "Amersfoort, Netherlands",
        "contact.download": "Download as PDF",
        
        // Footer
        "footer.copyright": "© 2026 Ivor Rödel - IT Professional | Data Management & Application Management"
    }
};

// Language switcher functionality
(function() {
    const langToggle = document.getElementById('langToggle');
    const html = document.documentElement;
    
    // Get saved language or default to Dutch
    let currentLang = localStorage.getItem('lang') || 'nl';
    
    // Apply initial language
    if (currentLang === 'en') {
        html.setAttribute('data-lang', 'en');
        applyTranslations('en');
    }
    
    // Toggle language on click (works on the whole pill)
    langToggle.addEventListener('click', (e) => {
        // Check if clicked on a specific flag
        const clickedOption = e.target.closest('.lang-option');
        if (clickedOption) {
            const clickedLang = clickedOption.getAttribute('data-lang');
            if (clickedLang === currentLang) return; // Already active
            currentLang = clickedLang;
        } else {
            // Toggle between languages
            currentLang = currentLang === 'nl' ? 'en' : 'nl';
        }
        
        if (currentLang === 'nl') {
            html.removeAttribute('data-lang');
        } else {
            html.setAttribute('data-lang', 'en');
        }
        
        localStorage.setItem('lang', currentLang);
        applyTranslations(currentLang);
    });
    
    function applyTranslations(lang) {
        const elements = document.querySelectorAll('[data-i18n]');
        elements.forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (translations[lang] && translations[lang][key]) {
                if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                    el.placeholder = translations[lang][key];
                } else {
                    el.innerHTML = translations[lang][key];
                }
            }
        });
    }
})();