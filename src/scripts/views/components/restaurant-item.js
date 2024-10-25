class RestaurantItem extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        .restaurant {
          width: 100%;
          max-width: 380px;
          margin: 10px auto;
          height: 335px;
          background-color: white; 
          border: 1px solid #ddd;
          border-radius: 8px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          overflow: hidden;
          transition: transform 0.3s ease;
          position: relative;
          cursor: pointer;
        }

        .restaurant:hover {
          transform: translateY(-5px);
        }
        
        .image-container {
          position: relative;
        }

        .restaurant img {
          width: 100%;
          height: 200px;
          object-fit: cover;
          border-radius: 8px 8px 0 0;
        }

        .city-tag {
          position: absolute;
          top: 10px;
          left: 10px;
          background-color: #e07400;
          color: #fff;
          padding: 5px 10px;
          border-radius: 16px;
          font-size: 14px;
          z-index: 1;
          display: flex;
          align-items: center;
        }

        .location-icon {
          fill: #fff;
          width: 16px;
          height: 16px;
          margin-right: 5px;
        }
        
        .restaurant h2 {
          padding: 10px;
          font-size: 20px;
          color: #141e16;
          margin-top: 1em; 
        }
        
        .restaurant .rating-container {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, 50%);
          background-color: #e07400;
          border-radius: 25px;
          padding: 0 10px;
          display: flex;
          justify-content: center;
          align-items: center;
          height: 35px;
          width: 50px;
        }
        
        .restaurant .rating {
          font-size: 16px;
          color: #FFF;
          margin-left: 5px;
        }

        .restaurant .description {
          font-size: 16px;
          color: #555;
          padding: 0 10px 10px;
          max-width: 400px; 
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
        }

        .restaurant .star-icon {
          fill: #FFF;
          width: 15px;
          height: 15px;
          margin-right: 2px;
        }
        
        @media only screen and (max-width: 470px) {
          .restaurant {
            width: 340px;
          }
        }

        @media only screen and (max-width: 470px) {
          .restaurant {
            width: 280px;
          }
        }
      </style>
      <div class="restaurant" tabindex="0">
        <div class="image-container">
          <img class="lazyload" alt="Restaurant Image">
          <span class="city-tag">
            <svg class="location-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z"/>
            </svg>
            <span class="city-name"></span>
          </span>
        </div>
        <h2></h2>
        <div class="rating-container">
          <svg class="star-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M12.0006 18.26L4.94715 22.2082L6.52248 14.2799L0.587891 8.7918L8.61493 7.84006L12.0006 0.5L15.3862 7.84006L23.4132 8.7918L17.4787 14.2799L19.054 22.2082L12.0006 18.26Z"></path>
          </svg>
          <p class="rating"></p>
        </div>
        <p class="description"></p>
      </div>
    `;
  }

  set restaurant(data) {
    const {
      pictureId, name, city, rating, description, id,
    } = data;
    const imgElement = this.shadowRoot.querySelector('img');
    imgElement.setAttribute('data-src', `https://restaurant-api.dicoding.dev/images/medium/${pictureId}`);
    imgElement.alt = name;

    const h2Element = this.shadowRoot.querySelector('h2');
    h2Element.textContent = name;

    const cityTag = this.shadowRoot.querySelector('.city-tag .city-name');
    cityTag.textContent = city;

    this.shadowRoot.querySelector('.rating').textContent = rating;
    this.shadowRoot.querySelector('.description').textContent = description;
    this.setAttribute('data-id', id);
  }
}

if (!customElements.get('restaurant-item')) {
  customElements.define('restaurant-item', RestaurantItem);
}

export default RestaurantItem;
