/* eslint-disable linebreak-style */
/* eslint-disable eol-last */
/* eslint-disable no-undef */
import FavRestoIdb from '../src/scripts/data/resto-idb';
import * as TestFactories from './helpers/testFactories';

const addLikeButtonContainer = () => {
  document.body.innerHTML = '<div id="likeButtonContainer"></div>';
};

describe('Liking Resto', () => {
  beforeEach(() => {
    addLikeButtonContainer();
  });

<<<<<<< HEAD
=======
  it('should not add a resto when it has no id', async () => {
    await TestFactories.createLikeButtonPresenterWithResto({});

    document.querySelector('#likeButton').dispatchEvent(new Event('click'));
    const allResto = await FavRestoIdb.getAllResto();
    expect(allResto).toEqual([]);
  });

  it('should not add a resto again when its already liked', async () => {
    await TestFactories.createLikeButtonPresenterWithResto({ id: 1 });

    await FavRestoIdb.putResto({ id: 1 });
    document.querySelector('#likeButton').dispatchEvent(new Event('click'));
    const allResto = await FavRestoIdb.getAllResto();
    expect(allResto).toEqual([{ id: 1 }]);

    await FavRestoIdb.deleteResto(1);
  });

  it('should be able to like the resto', async () => {
    await TestFactories.createLikeButtonPresenterWithResto({ id: 1 });

    document.querySelector('#likeButton').dispatchEvent(new Event('click'));
    const resto = await FavRestoIdb.getResto(1);
    expect(resto).toEqual({ id: 1 });

    await FavRestoIdb.deleteResto(1);
  });

>>>>>>> c7ee8fe (update)
  it('should show the like button when the resto has not been liked before', async () => {
    await TestFactories.createLikeButtonPresenterWithResto({ id: 1 });

    expect(
      document.querySelector('[aria-label="Like this restaurant"]'),
    ).toBeTruthy();
  });

  it('should not show the unlike button when the resto has not been liked before', async () => {
    await TestFactories.createLikeButtonPresenterWithResto({ id: 1 });

    expect(
      document.querySelector('[aria-label="Unlike this restaurant"]'),
    ).toBeFalsy();
  });
<<<<<<< HEAD

  it('should be able to like the resto', async () => {
    await TestFactories.createLikeButtonPresenterWithResto({ id: 1 });

    document.querySelector('#likeButton').dispatchEvent(new Event('click'));
    const resto = await FavRestoIdb.getResto(1);
    expect(resto).toEqual({ id: 1 });

    await FavRestoIdb.deleteResto(1);
  });

  it('should not add a resto again when its already liked', async () => {
    await TestFactories.createLikeButtonPresenterWithResto({ id: 1 });

    await FavRestoIdb.putResto({ id: 1 });
    document.querySelector('#likeButton').dispatchEvent(new Event('click'));
    const allResto = await FavRestoIdb.getAllResto();
    expect(allResto).toEqual([{ id: 1 }]);

    await FavRestoIdb.deleteResto(1);
  });

  it('should not add a resto when it has no id', async () => {
    await TestFactories.createLikeButtonPresenterWithResto({});

    document.querySelector('#likeButton').dispatchEvent(new Event('click'));
    const allResto = await FavRestoIdb.getAllResto();
    expect(allResto).toEqual([]);
  });
});
=======
});
>>>>>>> c7ee8fe (update)
