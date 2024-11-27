// Function to fetch a random quote from an API
async function getRandomQuote() {
    const url = "https://api.quotable.io/random";  // Quotable API endpoint
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        const data = await response.json();
        const quote = data.content;
        const author = data.author;
        return `"${quote}" — ${author}`;
    } catch (error) {
        console.error("Error fetching quote:", error);
        return "Could not fetch a quote at the moment.";
    }
}

// Function to create a new post (here, just displaying the quote)
async function createNewPost() {
    const quote = await getRandomQuote();
    const postContainer = document.getElementById("postContainer");
    postContainer.innerHTML = `<p><strong>New Post:</strong> ${quote}</p>`;
}

// Call the function to fetch the quote and create the post when the page loads
window.onload = () => {
    createNewPost();
};
