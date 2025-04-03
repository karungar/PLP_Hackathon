 // JSON Data
const jsonData = {
    "id": "1",
    "basics": {
        "name": "Sylvia Njoki Waweru",
        "label": "Software Developer",
        "image": "/Assets/sylvia.jpeg",
        "email": "sylvia.waweru@gmail.com",
        "phone": "(254) 722143317",
        "summary": "Hello! I am Sylvia Waweru. An analytical chemist turned IT enthusiast! I love working on both frontend and backend.. I have a great desire to perfect my programming skills.",
        "location": {
            "address": "Lakeview",
            "city": "Naivasha",
            "countryCode": "Kenya"
        },
        "social": {
            "github": "https://github.com/karungar",
            "linkedin": "https://www.linkedin.com/in/sylviawaweru/"
        }
    },
    "projects": [
        {
            "name": "Building a static website",
            "description": "Hosting a static website on AWS S3 and distributing it via CloudFront.",
            "url": "https://github.com/karungar/deploy-a-static-website-to-S3"
        },
        {
            "name": "Cloud Resume API Challenge",
            "description": "Built a serverless API using AWS Lambda and DynamoDB, deployed via Terraform.",
            "url": "https://github.com/karungar/Cloud-Resume-API-"
        }
    ]
};

// Function to update Hero Section
function updateHero() {
    document.querySelector("#hero h1").textContent = jsonData.basics.name;
    document.querySelector("#hero p").textContent = jsonData.basics.label;
}

// Function to update About Section
function updateAbout() {
    document.querySelector("#about p").textContent = jsonData.basics.summary;
}

// Function to update Work Section (Projects)
function updateWork() {
    const workSection = document.querySelector("#work");
    let workHTML = `<h2>My Work</h2>`;
    
    jsonData.projects.forEach(project => {
        workHTML += `
            <div class="project">
                <h3>${project.name}</h3>
                <p>${project.description}</p>
                <a href="${project.url}" target="_blank">View Project</a>
            </div>
        `;
    });

    workSection.innerHTML = workHTML;
}

// Function to update Contact Information
function updateContact() {
    document.querySelector("#contact").insertAdjacentHTML("beforeend", `
        <p>Email: <a href="mailto:${jsonData.basics.email}">${jsonData.basics.email}</a></p>
        <p>Phone: ${jsonData.basics.phone}</p>
    `);
}

// Function to update Social Media Links
function updateSocialLinks() {
    document.querySelector(".hero_social a[href*='github']").setAttribute("href", jsonData.basics.social.github);
    document.querySelector(".hero_social a[href*='linkedin']").setAttribute("href", jsonData.basics.social.linkedin);
}

// Call Functions to Update Content
updateHero();
updateAbout();
updateWork();
updateContact();
updateSocialLinks();
