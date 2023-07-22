import Validator from "./classes/Validator";
import axios from "axios";

export default function modal() {
  const modal = document.querySelector<HTMLElement>(".modal");

  if (!modal) return;

  let modalOpen = false;

  const modalDefaultLayer = modal.querySelector<HTMLElement>(
    ".modal__layer--default"
  );
  const modalSuccessLayer = modal.querySelector<HTMLElement>(
    ".modal__layer--success"
  );
  const modalErrorLayer = modal.querySelector<HTMLElement>(
    ".modal__layer--error"
  );

  const form = modal.querySelector<HTMLFormElement>("form");

  const showSuccess = () => {
    modalDefaultLayer?.classList.remove("active");
    modalErrorLayer?.classList.remove("active");
    modalSuccessLayer?.classList.add("active");
  };

  const showError = () => {
    modalDefaultLayer?.classList.remove("active");
    modalErrorLayer?.classList.add("active");
    modalSuccessLayer?.classList.remove("active");
  };

  const revert = () => {
    modalDefaultLayer?.classList.add("active");
    modalErrorLayer?.classList.remove("active");
    modalSuccessLayer?.classList.remove("active");
  };

  const openModal = () => {
    if (modalOpen) return;
    modal.classList.add("active");
    document.body.classList.add("modal-open");
    modalOpen = true;
  };

  const closeModal = () => {
    if (!modalOpen) return;
    modal.classList.remove("active");
    document.body.classList.remove("modal-open");
    revert();
    modalOpen = false;
  };

  const openBtns = Array.from(
    document.querySelectorAll<HTMLButtonElement | HTMLLinkElement>(
      ".js-open-modal"
    )
  );
  const closeBtns = Array.from(
    document.querySelectorAll<HTMLButtonElement | HTMLLinkElement>(
      ".js-close-modal"
    )
  );
  const resetBtns = Array.from(
    document.querySelectorAll<HTMLButtonElement | HTMLLinkElement>(
      ".js-reset-modal"
    )
  );

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeModal();
    }
  });

  openBtns.forEach((btn) =>
    btn.addEventListener("click", (event) => {
      event.preventDefault();
      openModal();
    })
  );
  closeBtns.forEach((btn) =>
    btn.addEventListener("click", (event) => {
      event.preventDefault();
      closeModal();
    })
  );
  resetBtns.forEach((btn) =>
    btn.addEventListener("click", (event) => {
      event.preventDefault();
      revert();
    })
  );

  if (!form) return;

  const controller = new AbortController();

  const validator = new Validator(form);

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    validator.validate();
    if (!validator.valid) return;

    const formData = new FormData(form);

    axios
      .post(form.action, formData, {
        signal: controller.signal,
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        console.log(res.data);
        if (res.data.status === "mail_sent") {
          showSuccess();
        } else {
          throw new Error("Mail has not been sent");
        }
      })
      .catch(() => {
        showError();
      })
      .finally(() => {
        form.reset();
      });
  });
}
