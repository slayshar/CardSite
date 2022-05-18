const updateNameAndJob = (event) => {
  event.preventDefault();
  loadNameAndJob.updateUserInfo();
  editForm.close();
};
const loadCard = (event) => {
  event.preventDefault();
  const userCardInstance = new Card(cardName.value, cardUrl.value);
  const userCardNode = userCardInstance.render();
  userCardNode
    .querySelector(`.place-card__image`)
    .addEventListener(`click`, () => gettingUrl(userCardInstance));
  place.prepend(userCardNode);
  popupForm.close();
};
const textErrors = {
  empty: `Это обязательное поле`,
  length: `Должно быть от 2 до 30 символов`,
  link: `Здесь должна быть ссылка`,
  valid: ``,
};
