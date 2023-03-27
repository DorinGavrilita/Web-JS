let restaurants = [];
console.log(1);

fetch(
	"http://localhost:1337/api/restaurants",
	{
		headers: {
			Authorization: "Bearer d4775caea6404f80bcaca6daa15f3c799dc6d6fd41882da8f67c9f513d3cebce614656759e1f4afb428604325db2bcad0911c3879493dead66faf7bb78d1f338c525123012bf472fcc3e4bb7bf7ea71eb47ef4c6adad34279c7777396de4afe3076f9a3c6dfc709491d809a881f6425f4d8116706fc09b0c0aa5c4bf1487f020"
		}
	}
)
	.then((response) => response.json())
	.then((data) => {
		console.log(2);
		console.log(data)
		restaurants = data;


		const restaurantsContainer = document.getElementById('restaurants');
		restaurants.data.forEach(restaurant => {
			const restaurantElement = document.createElement('div');
			restaurantElement.innerHTML = `
          <span>${restaurant.attributes.name}<span/>
          <span>${restaurant.attributes.description}<span/>
          <span>${restaurant.attributes.categories}<span/>
        `;
			restaurantsContainer.append(restaurantElement);
		});
	});

console.log(3);
console.log(restaurants);