function createcard(data) {
  return ` <div class="card" data-id="${data.id}">
        <img
          src="${data.attributes.image}"alt=""
        />
        <h2>${data.attributes.title}</h2>
        <p>$${data.attributes.price}</p>
      </div>`;
}
export { createcard };
