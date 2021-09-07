const api_key = "ff5ad4179dee5d6c5bd977c70acee385";
const  api_base = " https://api.themoviedb.org/3";
/*
 -originais da netflix 
-recomendados(trending)
-em alta(top rated)
-ação
-comedia
-terror
-romance
-documentarios
*/

const basicFetch = async (endpoint) =>{
    const req = await fetch (`${api_base}${endpoint}`);
    const json = await req.json();
    return json;



}


export default {
    getHomelist: async () => {
        return[ 
        {
            slug: "Originais",
            title:"Originais da Netflix",
            items: await basicFetch(`/discover/tv?with_network=213&language=ptBR&api_key=${api_key}`)

        },

        {
            slug: "Trending",
            title: "Recomendados para você",
            items: await basicFetch(`/trending/all/week?language=ptBR&api_key=${api_key}`)
        }, 

        {
            slug:"Top rated",
            title: "Em Alta",
            items: await basicFetch(`/movie/top_rated?language=ptBR&api_key=${api_key}`)

        },
        {
            slug: "action",
            title: "Ação",
            items: await basicFetch(`/discover/movie?with_genres=28&language=ptBR&api_key=${api_key}`)

        },
        {
            slug: "comedy",
            title: "Comedia",
            items: await basicFetch(`/discover/movie?with_genres=35&language=ptBR&api_key=${api_key}`) 
            
        },
        {
            slug: "Scary movie",
            title: "Terror",
            items: await basicFetch(`/discover/movie?with_genres=27&language=ptBR&api_key=${api_key}`) 


        },
        {
            slug: "romance",
            title: "Romance",
            items: await basicFetch(`/discover/movie?with_genres=10749&language=ptBR&api_key=${api_key}`) 

        },
        {
            slug: "documentary",
            title: "Documentario",
            items: await basicFetch(`/discover/movie?with_genres=99&language=ptBR&api_key=${api_key}`) 
            
        }

        ]

    },
    getMovieInfo: async (movieId, type) =>{
        let info = {};

      if(movieId){
          switch(type) {
              case 'movie':
                  info = await basicFetch(`/movie/${movieId}?language=ptBR&api_key=${api_key}`)
                  break;

              case 'tv':
                info = await basicFetch(`/tv/${movieId}?language=ptBR&api_key=${api_key}`)
                      break;
                      default: 
                      info = null;
                      break;

          }
      }   
      return info;
    }
}