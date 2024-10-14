async function displayRestaurants() {
  const loading = document.getElementById('loading');
  if (loading) {
    loading.style.display = 'block';
  }
  try {
    const response = await fetch('https://restaurant-api.dicoding.dev/list');
    const data = await response.json();
    const restaurantList = document.querySelector('.restaurant-catalog');
    restaurantList.innerHTML = '';

    data.restaurants.forEach((restaurant) => {
      const restaurantElement = document.createElement('restaurant-item');
      restaurantElement.restaurant = restaurant;
      restaurantElement.addEventListener('click', () => {
        window.location.hash = `#/detail/${restaurant.id}`;
      });

      restaurantElement.addEventListener('keyup', (event) => {
        if (event.key === 'Enter') {
          window.location.hash = `#/detail/${restaurant.id}`;
        }
      });

      restaurantList.appendChild(restaurantElement);
    });
  } catch (error) {
    console.error('Error fetching and displaying restaurant data:', error);
    const restaurantList = document.querySelector('.restaurant-catalog');
    restaurantList.innerHTML = '<p class="error-message">Failed to load restaurants. Please try again later.</p>';
  } finally {
    if (loading) {
      loading.style.display = 'none';
    }
  }
}

const Home = {
  async render() {
    return `
      <section class="hero">
        <div class="overlay">
          <div class="text-container">
            <h1 tabindex="0">Ciptakan Momen Spesial dengan Hidangan Istimewa</h1>
            <p tabindex="0">
              Rasakan cita rasa autentik di setiap hidangan, dibuat dengan bahan
              berkualitas, dan disajikan dengan penuh cinta
            </p>
          </div>
        </div>
      </section>

      <section id="explore">
        <h1>Explore Restaurant</h1>
        <div class="restaurant-catalog"></div>
      </section>
    `;
  },

  async afterRender() {
    const skipLink = document.querySelector('.skip-link');
    if (skipLink) {
      skipLink.addEventListener('click', (event) => {
        event.preventDefault();
        const target = document.getElementById(skipLink.getAttribute('href').slice(1));
        if (target) {
          target.focus();
          window.scrollTo({
            top: target.offsetTop,
            behavior: 'smooth',
          });
        }
      });
    }

    const loading = document.getElementById('loading');
    if (loading) {
      loading.style.display = 'block';
    }
    await displayRestaurants();
    if (loading) {
      loading.style.display = 'none';
    }
  },
};

export default Home;
