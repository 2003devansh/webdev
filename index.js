const fetchData = async () => {
    try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        console.log(data); // Ensure the data is logged to the console
    } catch (error) {
        console.error("Error fetching data:", error);
    }
};

fetchData();
