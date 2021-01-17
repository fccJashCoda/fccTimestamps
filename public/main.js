(() => {
  const form = document.querySelector('form');
  const unixBox = document.getElementById('unix');
  const utcBox = document.getElementById('utc');
  const inputTime = document.getElementById('inputTime');

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const url = window.location.href;

    console.log(inputTime.value);
    // console.log(form.value);

    fetch(url + 'api/timestamp')
      .then((res) => res.json())
      .then((data) => {
        const { unix, utc } = { ...data };

        unixBox.textContent = `Unix: ${unix}`;
        utcBox.textContent = `utc: ${utc}`;
      });
  });
})();
