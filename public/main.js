(() => {
  const form = document.querySelector('form');

  form.addEventListener('click', (e) => {
    e.preventDefault();
    const url = window.location.href;

    fetch(url + 'api/timestamp')
      .then((res) => res.json())
      .then((data) => console.log(data));
    console.log(window.location.href);
  });
})();
