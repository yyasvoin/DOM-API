document.addEventListener('DOMContentLoaded', () => {
  const elements = {
    toggleButton: document.querySelector('.toggle-promo'),
    form: document.querySelector('.promo-form'),
    codeInput: document.querySelector('.promo-form input'),
    submitButton: document.querySelector('.promo-form button'),
    priceBreakdown: document.querySelector('.price-breakdown'),
  };


  // Toggle visibility of promo form
  elements.toggleButton.addEventListener('click', (event) => {
    console.log('toggle promo event:', event);

    elements.form.classList.toggle('d-none'); // Displays form
    elements.toggleButton.classList.toggle('btn-info');
    event.target.classList.toggle('btn-warning');

    let toggleButtonText;
    const isShowing = elements.toggleButton.textContent === 'Use Promo Code';
    if (isShowing) {
      toggleButtonText = 'Cancel';
    } else {
      toggleButtonText = 'Use Promo Code';
    }

    elements.toggleButton.textContent = toggleButtonText;

    // Exercise: Clear the input field on hide so no value is in it
    if (isShowing === false) {
     elements.codeInput.value = ''; // Continue off this line
    }
  });


  // Enable and disabled state of button
  elements.codeInput.addEventListener('input', (event) => {
    console.log('changed promo input value:', event.target.value);

    const hasValue = elements.codeInput.value.length > 0;
    const isSubmitButtonDisabled = elements.submitButton.hasAttribute('disabled');

    if (hasValue === true && isSubmitButtonDisabled === true) {
      elements.submitButton.removeAttribute('disabled');
    } else if (hasValue === false && isSubmitButtonDisabled === false) {
      elements.submitButton.setAttribute('disabled', '');
    }

    // Exercise: Disable the `Redeem` button

  });


  // Submit form
  document.addEventListener('submit', (event) => {
    event.preventDefault(); // Default form action loads a new page

    const listItemEl = document.createElement('li');
    listItemEl.classList.add('list-group-item', 'd-flex', 'justify-content-between');

    const codeContainerEl = document.createElement('span');
    codeContainerEl.classList.add('text-success');

    const headingEl = document.createElement('h6');
    headingEl.classList.add('my-0');
    headingEl.textContent = 'Promo code';
    codeContainerEl.appendChild(headingEl);

    const codeEl = document.createElement('small');
    codeEl.textContent = elements.codeInput.value;
    codeContainerEl.appendChild(codeEl);

    const priceEl = document.createElement('span');
    priceEl.classList.add('text-success');
    priceEl.textContent = '-$1.15';

    // Insert into new <li>
    listItemEl.appendChild(codeContainerEl);
    listItemEl.appendChild(priceEl);

    // Insert <li>
    const beforeEl = elements.priceBreakdown.querySelector('li:nth-last-of-type(2)');
    elements.priceBreakdown.insertBefore(listItemEl, beforeEl);

    /**
     * Exercise: Create the span with class `text-success`
     * with a `textContent` of -$20 and display it
     */
  });


  /**
   * Exercise: Add a submit event to the other form and prevent its default action
   */
});
