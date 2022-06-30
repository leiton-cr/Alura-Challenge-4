const fragments = ["header", "footer"];

fragments.forEach(fragment => {
    const htmlElement = document.getElementById(fragment);
    if (!htmlElement) return;
  
    fetch(`/fragments/${fragment}.html`)
        .then(data => data.text())
        .then(data => htmlElement.innerHTML = data);
    }
);