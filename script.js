document.addEventListener("DOMContentLoaded", function() {
    console.log("Welcome to Dr. Punam Rattan's Portfolio!");

    // Research Papers Array
    const researchPapers = [
        {
            title: "Hybrid Artificial Bee Colony and Glow Worm Algorithm for Energy Efficient Cluster Head Selection in Wireless Sensor Networks",
            journal: "World Journal of Engineering",
            indexed: "Scopus",
            link: "https://example.com/paper1"
        },
        {
            title: "Design and Simulation of Capacitive MEMS Switch for Ka Band Application",
            journal: "Wireless Communications and Mobile Computing - Hindawi",
            indexed: "Scopus",
            link: "https://example.com/paper2"
        },
        {
            title: "Voice Activity Detection using Optimal Window Overlapping Especially Over Healthcare Infrastructure",
            journal: "World Journal of Engineering",
            indexed: "Scopus",
            link: "https://example.com/paper3"
        },
        {
            title: "Recent Developments, Challenges, and Future Scope of Voice Activity Detection Schemes—A Review",
            journal: "Lecture Notes in Networks and Systems",
            indexed: "Scopus",
            link: "https://example.com/paper4"
        },
        {
            title: "A Neoteric Approach of Prioritizing Regression Test Suites Using Hybrid ESDG Models",
            journal: "Annals of the Romanian Society for Cell Biology",
            indexed: "Scopus",
            link: "https://example.com/paper5"
        }
    ];

    // Target Div to Populate Papers
    const researchContainer = document.getElementById("research-papers");

    // Generate HTML Content
    let paperList = "<ul>";
    researchPapers.forEach((paper) => {
        paperList += `<li>
                        <strong>${paper.title}</strong> <br>
                        <em>${paper.journal}</em> - <b>${paper.indexed} Indexed</b> <br>
                        <a href="${paper.link}" target="_blank">Read More</a>
                      </li><br>`;
    });
    paperList += "</ul>";

    // Insert into Page
    researchContainer.innerHTML = paperList;
});

