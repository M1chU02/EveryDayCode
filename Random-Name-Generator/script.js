document
  .getElementById("generate-btn")
  .addEventListener("click", async function () {
    try {
      const data = await fetchRandomUser();
      document.getElementById(
        "name"
      ).textContent = `${data.name.title} ${data.name.first} ${data.name.last}`;
      document.getElementById("nationality").textContent = data.nat;
    } catch (error) {
      console.error("Error fetching random user:", error);
    }
  });

async function fetchRandomUser() {
  const response = await fetch("https://randomuser.me/api/?inc=name,nat");
  const data = await response.json();
  console.log(data);
  return data.results[0];
}
