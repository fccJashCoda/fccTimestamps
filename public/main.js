(() => {
  const form = document.querySelector('form');
  const responseBox = document.getElementById('responseBox');
  const userInput = document.getElementById('userInput');

  function render(data) {
    if (data.error) {
      return `<p>Error: ${data.error}</p>`;
    }
    return `<p>Unix: ${data.unix}</p><p>utc: ${data.utc}</p>`;
  }

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const url = window.location.href;

    const query = userInput.value;

    fetch(url + `api/timestamp/${query}`)
      .then((res) => res.json())
      .then((data) => {
        responseBox.innerHTML = render(data);
      })
      .catch((err) => {
        const data = { error: 'Unable to reach the API server.' };
        responseBox.innerHTML = render(data);
      });

    form.reset();
  });
})();
