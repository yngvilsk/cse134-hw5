const postBtn = document.getElementById("postBtn");
const getBtn = document.getElementById("getBtn");
const putBtn = document.getElementById("putBtn");
const deleteBtn = document.getElementById("deleteBtn");

postBtn.addEventListener("click", async () => {
  const data = {
    id: document.getElementById("id").value,
    article_name: document.getElementById("article_name").value,
    article_body: document.getElementById("article_body").value,
    date: new Date().toISOString()
  };

  const response = await fetch("https://httpbin.org/post", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json"
    }
  });

  const result = await response.json();
  console.log(result);
});

getBtn.addEventListener("click", async () => {
  const response = await fetch("https://httpbin.org/get");

  const result = await response.json();
  console.log(result);
});

putBtn.addEventListener("click", async () => {
  const data = {
    id: document.getElementById("id").value,
    article_name: document.getElementById("article_name").value,
    article_body: document.getElementById("article_body").value,
    date: new Date().toISOString()
  };

  const response = await fetch("https://httpbin.org/put", {
    method: "PUT",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json"
    }
  });

  const result = await response.json();
  console.log(result);
});

deleteBtn.addEventListener("click", async () => {
  const response = await fetch("https://httpbin.org/delete", {
    method: "DELETE"
  });

  const result = await response.json();
  console.log(result);
});