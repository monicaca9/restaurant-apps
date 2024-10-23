/* eslint-disable padded-blocks */
/* eslint-disable no-trailing-spaces */
/* eslint-disable no-use-before-define */
/* eslint-disable no-console */
import FavRestoIdb from '../../data/resto-idb';
import '../components/restaurant-item';

const Favorite = {
  async render() {
    return `
      <a href="#maincontent" class="skip-link">Skip to content</a>
        <div id="loading" class="loading" style="display: none;">Loading...</div>
          <section id="restaurant-favorites">
          <h1>Favorites</h1>
        <div class="restaurant-catalog" id="restaurant-catalog" tabindex="-1"></div>
      </section>
    `;
  },

  async afterRender() {
    
    const skipLink = document.querySelector('.skip-link');
    if (skipLink) {
      skipLink.addEventListener('click', (event) => {
        event.preventDefault();
        const targetId = skipLink.getAttribute('href').slice(1);
        const target = document.getElementById(targetId);
        if (target) {
          target.setAttribute('tabindex', '-1');
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
    await displayFavoriteRestaurants();
    if (loading) {
      loading.style.display = 'none';
    }
  },
};

async function displayFavoriteRestaurants() {
  const loading = document.getElementById('loading');
  if (loading) {
    loading.style.display = 'block';
  }
  try {
    const favoriteRestaurants = await FavRestoIdb.getAllResto();
    const restaurantList = document.querySelector('.restaurant-catalog');
    restaurantList.innerHTML = '';

    if (favoriteRestaurants.length === 0) {
<<<<<<< HEAD
      restaurantList.innerHTML = '<p class="error-message" tabindex="0">No favorite restaurants found.</p>';
=======
      restaurantList.innerHTML = '<p class="error-message" tabindex="0">Unable to load favorite restaurants.</p>';
>>>>>>> c7ee8fe (update)
    } else {
      favoriteRestaurants.forEach((restaurant) => {
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
    }
  } catch (error) {
<<<<<<< HEAD
    console.error('Error fetching and displaying favorite restaurants:', error);
    const restaurantList = document.querySelector('.restaurant-catalog');
    restaurantList.innerHTML = '<p class="error-message">Failed to load favorite restaurants. Please try again later.</p>';
=======
    console.error('Failed to fetch and display favorite restaurants:', error);
    const restaurantList = document.querySelector('.restaurant-catalog');
    restaurantList.innerHTML = '<p class="error-message">Unable to load favorite restaurants.</p>';
>>>>>>> c7ee8fe (update)
  } finally {
    if (loading) {
      loading.style.display = 'none';
    }
  }
}

export default Favorite;
