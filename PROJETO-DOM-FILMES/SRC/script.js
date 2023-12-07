async function fetchData () {
    const req = await fetch ("https://www.omdbapi.com/?apikey=58eeaad1&s=2012")
    const res = await req.json () 

    const req2 = await fetch ("https://www.omdbapi.com/?apikey=58eeaad1&s=2013") 
    const res2 = await req2.json ()

    const req3 = await fetch ("https://www.omdbapi.com/?apikey=58eeaad1&s=2014") 
    const res3 = await req3.json ()

    const data = res.Search;
    const data2 = res2.Search
    const data3 = res3.Search

    const divFilmes = document.getElementById('filmes');
    const divFilmes2 = document.getElementById('filmes2');
    const divFilmes3 = document.getElementById('filmes3');
    


    for (const iterator of data) {
        const pTitle = document.createElement('p');
        pTitle.textContent = iterator.Title;
        divFilmes.appendChild(pTitle)

        const pPoster = document.createElement('img');
        pPoster.src = iterator.Poster;
        divFilmes.appendChild(pPoster);
    }

    for (const iterator of data2) {
        const pTitle = document.createElement('p');
        pTitle.textContent = iterator.Title;
        divFilmes2.appendChild(pTitle)

        const pPoster = document.createElement('img');
        pPoster.src = iterator.Poster;
        divFilmes2.appendChild(pPoster);
    }

    for (const iterator of data3) {
        const pTitle = document.createElement('p');
        pTitle.textContent = iterator.Title;
        divFilmes3.appendChild(pTitle)

        const pPoster = document.createElement('img');
        pPoster.src = iterator.Poster;
        divFilmes3.appendChild(pPoster);
    }

  
}

fetchData()