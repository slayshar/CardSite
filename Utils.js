const gettingUrl = (cardInstance) => {
  const linkUrl = cardInstance.Url;
  closeBigImg.open(linkUrl);
};
const loadNameAndJob = (event) => {
  event.preventDefault();
  loadName.updateUserInfo();
  editForm.enter();
};
const loadCard = (event) => {
  event.preventDefault();
  const userCardInstance = new Card(cardName.value, cardUrl.value);
  const userCardNode = userCardInstance.render();
  place.prepend(userCardNode);
  popupForm.enter();
};
