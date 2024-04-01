const delayFetch = (url, options) => {
  // 👀 The PokeAPI is too fast! 
  return new Promise((resolve) => {
    setTimeout(() => {
        resolve(fetch(url, options));
    }, options.delay);
    });
}

export async function fetchPokemon(id) {
  try {
    const response = await delayFetch(`https://pokeapi.co/api/v2/pokemon/${id}`, { delay: 500 });
    if (response.ok === true) {
    return {
        error: null,
        response: await response.json()
    }
    }
    throw new Error(`Error fetching pokemon #${id}`);
  } catch (e) {
    return {
      error: e,
      response: null
    }   
  }    
}