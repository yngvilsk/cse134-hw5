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

  const post_response = await fetch("https://httpbin.org/post", {
    method: "POST",
    body: JSON.stringify(data),
  });

  const json_result = await post_response.json();
  showResponse(json_result);
});

/**  Get Button */ 

getBtn.addEventListener("click", async () => {
  const get_response = await fetch("https://httpbin.org/get", {
    method: "GET",
    body: JSON.stringify(document.getElementById("id").value)
  });
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

  const put_response = await fetch("https://httpbin.org/put", {
    method: "PUT",
    body: JSON.stringify(data),
  });

  const json_result = await put_response.json();
  showResponse(json_result);
});

/**  Delete Button */ 

deleteBtn.addEventListener("click", async () => {
    const data = {
        id: document.getElementById("id").value,
        article_name: document.getElementById("article_name").value,
        article_body: document.getElementById("article_body").value,
        date: new Date().toISOString()
    };
    
  const delete_response = await fetch("https://httpbin.org/delete", {
    method: "DELETE",
    body: JSON.stringify(data),
  });

  const json_result = await delete_response.json();
  showResponse(json_result);
});