const form = document.querySelector("form");
const btn = document.querySelector(".btn");
const show = document.querySelector("ul");
const url = `https://jsonplaceholder.typicode.com/posts`;
form.addEventListener("submit", function (e) {
  e.preventDefault();
  let title = this.title.value || undefined;
  let body = this.body.value || undefined;
  if (title && body) {
    const dataBase = {
      useId: 100,
      body,
      title,
    };
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(dataBase),
    })
        .then((res) => res.json())
        .catch(e => {
            console.log(e.message)
        })
      .then((data) => {
        console.log(data);
        const li = createElement("li", "list-group-item");
        li.textContent = `(${data.id}) ${data.title} ${data.body} ${data.useId}`;
          show.appendChild(li);
        this.reset()
      });
      
  } else {
    alert("Please provide every details");
  }
});

function createElement(elementName, className) {
  const element = document.createElement(elementName);
  element.className = className;
  return element;
}
