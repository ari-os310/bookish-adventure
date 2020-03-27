function generateErrorMessage(path, resp) {
  return `😩 fetch('${path}') failed: Express server responded with HTTP: [${resp.status} ${resp.statusText}].
  
  (Note: this error is custom to Booktonica and you cannot Google it). Check your Network console for more information about the request and the Express logs for more information about the response.`;
}

export function getAllBooks() {
  const path = "/books";
  return fetch(path, {
    headers: {
      // This header is needed or React app won't proxy it along to Express
      Accept: "application/json"
    }
  }).then(resp => {
    if (resp.ok) {
      return resp.json();
    } else {
      throw new Error(generateErrorMessage(path, resp)
      );
    }
  });
}

export function getBooksByGenre(genre) {
  const path = `/books/genres/${genre}`;
  return fetch(path, {
    headers: {
      // This header is needed or React app won't proxy it along to Express
      Accept: "application/json"
    }
  }).then(resp => {
    if (resp.ok) {
      return resp.json();
    } else {
      throw new Error(generateErrorMessage(path, resp)
      );
    }
  });
}

export function sortNewFirst() {
  const path = '/books/newest';
  return fetch(path, {
    headers: {
      // This header is needed or React app won't proxy it along to Express
      Accept: "application/json"
    }
  }).then(resp => {
    if (resp.ok) {
      return resp.json();
    } else {
      throw new Error(generateErrorMessage(path, resp)
      );
    }
  });
}

export function sortOldFirst() {
  const path = '/books/oldest';
  return fetch(path, {
    headers: {
      // This header is needed or React app won't proxy it along to Express
      Accept: "application/json"
    }
  }).then(resp => {
    if (resp.ok) {
      return resp.json();
    } else {
      throw new Error(generateErrorMessage(path, resp)
      );
    }
  });
}

export function sortByABC() {
  const path = '/books/alphabetically';
  return fetch(path, {
    headers: {
      // This header is needed or React app won't proxy it along to Express
      Accept: "application/json"
    }
  }).then(resp => {
    if (resp.ok) {
      return resp.json();
    } else {
      throw new Error(generateErrorMessage(path, resp)
      );
    }
  });
}


