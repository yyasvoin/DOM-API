document.addEventListener('DOMContentLoaded', () => {
  const elements = {
    toggleButton: document.querySelector('.toggle-promo'),
    form: document.querySelector('.promo-form'),
    codeInput: document.querySelector('.promo-form input'),
    submitButton: document.querySelector('.promo-form button'),
    priceBreakdown: document.querySelector('.price-breakdown'),
  };

  document.addEventListener('submit', (event) => {
    event.preventDefault(); // Default form action loads a new page

    const listItemEl = document.createElement('li');
    listItemEl.classList.add('list-group-item', 'd-flex', 'justify-content-between');
    listItemEl.innerHTML = `
      <li class="list-group-item d-flex justify-content-between">
        <span class="text-success">
          <h6 class="my-0">Promo code</h6>
          <small>${elements.codeInput.value}</small>
        </span>
        <span class="text-success">-$1.15</span>
      </li>
    `;

    // Insert <li>
    const beforeEl = elements.priceBreakdown.querySelector('li:nth-last-of-type(2)');
    elements.priceBreakdown.insertBefore(listItemEl, beforeEl);
  });
});
