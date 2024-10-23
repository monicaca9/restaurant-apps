/* eslint-disable no-trailing-spaces */
/* eslint-disable no-undef */
const assert = require('assert');

Feature('Liking Resto');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

<<<<<<< HEAD
Scenario('showing empty favorite restaurants', ({ I }) => {
  I.see('No favorite restaurants found.', '.error-message');
});

Scenario('adding and removing one restaurant to favorite', async ({ I }) => {
  I.see('No favorite restaurants found.', '.error-message');
  
  I.amOnPage('/');
  I.seeElement('restaurant-item');
  const firstRestaurant = locate('restaurant-item').first();
  const firstRestaurantTitle = await I.grabTextFrom('restaurant-item h2');
  I.click(firstRestaurant);
=======
Scenario('displaying an empty favorite restaurant list', ({ I }) => {
  I.see('Unable to load favorite restaurants.', '.error-message');
});

Scenario('adding and removing one restaurant to favorite', async ({ I }) => {
  I.see('Unable to load favorite restaurants.', '.error-message');
  
  I.amOnPage('/');
  I.seeElement('restaurant-item');
  const restaurantFirst = locate('restaurant-item').first();
  const restaurantFirstTitle = await I.grabTextFrom('restaurant-item h2');
  I.click(restaurantFirst);
>>>>>>> c7ee8fe (update)

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.refreshPage();
  I.seeElement('restaurant-item');
<<<<<<< HEAD
  const likedRestaurantTitle = await I.grabTextFrom('restaurant-item h2');
  I.click(firstRestaurant);
=======
  const restaurantLikedTitle = await I.grabTextFrom('restaurant-item h2');
  I.click(restaurantFirst);
>>>>>>> c7ee8fe (update)

  I.seeElement('#likeButton');
  I.click('#likeButton');
    
  I.amOnPage('/#/favorite');

<<<<<<< HEAD
  I.see('No favorite restaurants found.', '.error-message');
  assert.equal(firstRestaurantTitle, likedRestaurantTitle);
=======
  I.see('Unable to load favorite restaurants.', '.error-message');
  assert.equal(restaurantFirstTitle, restaurantLikedTitle);
>>>>>>> c7ee8fe (update)
});
