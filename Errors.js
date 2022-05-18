class Errors {
  constructor(editForm, cardForm) {
    this.editform = editForm;
    this.cardform = cardForm;
  }
  get editname() {
    return this.editform.querySelector(`.edit__input_type_name`);
  }
  get editjob() {
    return this.editform.querySelector(`.edit__input_type_job`);
  }
  get cardname() {
    return this.cardform.querySelector(`.popup__input_type_name`);
  }
  get cardlink() {
    return this.cardform.querySelector(`.popup__input_type_link-url`);
  }
  get editnameerror() {
    return this.editform.querySelector(`.userError`);
  }
  get editjoberror() {
    return this.editform.querySelector(`.jobError`);
  }
  get cardnameerror() {
    return this.cardform.querySelector(`.cardNameError`);
  }
  get cardlinkerror() {
    return this.cardform.querySelector(`.linkError`);
  }
  changeError(selector, error) {
    selector.textContent = error;
  }
  nameErrors = () => {
    const nameValueMissing = this.editname.validity.valueMissing;
    const nameTooShort = this.editname.validity.tooShort;
    const nameTooLong = this.editname.validity.tooLong;
    const jobValueMissing = this.editjob.validity.valueMissing;
    const jobTooShort = this.editjob.validity.tooShort;
    const jobTooLong = this.editjob.validity.tooLong;

    if (nameValueMissing) {
      this.changeError(this.editnameerror, textErrors.empty);
    } else if (nameTooShort || nameTooLong) {
      this.changeError(this.editnameerror, textErrors.length);
    } else {
      this.changeError(this.editnameerror, textErrors.valid);
    }
    if (jobValueMissing) {
      this.changeError(this.editjoberror, textErrors.empty);
    } else if (jobTooShort || jobTooLong) {
      this.changeError(this.editjoberror, textErrors.length);
    } else {
      this.changeError(this.editjoberror, textErrors.valid);
    }
  };

  cardErrors = () => {
    const cardNameValueMissing = this.cardname.validity.valueMissing;
    const cardNameTooShort = this.cardname.validity.tooShort;
    const cardNameTooLong = this.cardname.validity.tooLong;
    const cardLinkIsNotALink = this.cardlink.validity.typeMismatch;
    if (cardNameValueMissing) {
      this.changeError(this.cardnameerror, textErrors.empty);
    } else if (cardNameTooShort || cardNameTooLong) {
      this.changeError(this.cardnameerror, textErrors.length);
    } else {
      this.changeError(this.cardnameerror, textErrors.valid);
    }
    if (cardLinkIsNotALink) {
      this.changeError(this.cardlinkerror, textErrors.link);
    } else {
      this.changeError(this.cardlinkerror, textErrors.valid);
    }
  };

  setEventListeners() {
    this.editform.addEventListener(`input`, this.nameErrors);
    this.cardform.addEventListener(`input`, this.cardErrors);
  }
}
