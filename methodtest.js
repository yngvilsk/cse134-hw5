const postBtn = document.getElementById("postBtn");
const getBtn = document.getElementById("getBtn");
const putBtn = document.getElementById("putBtn");
const deleteBtn = document.getElementById("deleteBtn");
const response = document.getElementById("response");

/** Utilities */
const showResponse = (object) => {
    response.innerHTML = `<pre>${JSON.stringify(object, null, 2)}</pre>`;
  };

/**  Post Button */ 

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

/**  Get Button */ 

getBtn.addEventListener("click", async () => {
  const get_response = await fetch("https://httpbin.org/get");
  const json_result = await get_response.json();
  
  showResponse(json_result);
});

/**  Put Button */ 

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

/**  Delete Button */ 

deleteBtn.addEventListener("click", async () => {
  const response = await fetch("https://httpbin.org/delete", {
    method: "DELETE"
  });

  const result = await response.json();
  console.log(result);
});