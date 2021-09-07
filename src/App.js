import React, {useEffect, useState} from 'react';
import Tmbd from './Tmbd';
import MovieRow from './components/MovieRow';
import FeatureMovie from './components/FeatureMovie';
import Header from './components/Header';
import './App.css';



export default () =>{

const [movieList, setMovieList] = useState([]);
const [ FeatureData, setFeatureData ] = useState(null);
const [blackHeader, setBlackHeader ] = useState(true)


useEffect(() =>{
const loadAll = async () =>{
//pegando a lista total
let list = await Tmbd.getHomelist();
setMovieList(list);

//pegando o featured
let originals = list.filter(i=>i.slug === "Originais");
let randomChosen = Math.floor(Math.random() * (originals[0].items.results.length -1))
let chosen = originals[0].items.results[randomChosen]
let chosenInfo = await Tmbd.getMovieInfo(chosen.id, 'tv' );

setFeatureData(chosenInfo);
}
loadAll()

},[])

useEffect(() =>{

const scrollListener = () =>{
if(window.scrollY > 10){

  setBlackHeader(true);
}else{
  setBlackHeader(false)
}
}
 window.addEventListener("scroll", scrollListener);
 return () =>{
   window.removeEventListener("scroll", scrollListener)
 }
},[])

return (
  <div className="page">
    <Header black={blackHeader}/>


  {FeatureData &&
  <FeatureMovie item={FeatureData} />
   }

   <section className="lists">
     {movieList.map((item, key)=>(
       
      <MovieRow key={ key } title={item.title} items={item.items} />
       
     ))}  

   </section>
   <footer>
 Feito com 💖 <span role="img" areia-aria-label= "coração"></span> pela Michelle
 Direitos da imagen para a Netflix <br/>
 Dados pegos do site Themoviedb.org
   </footer>
   {movieList.length <= 0 &&
   <div className="loading">
     <img src="https://c.tenor.com/DQyztbEmqnYAAAAC/netflix-loading.gif" alt="Carregando" />
   </div>
   }
  </div>
 
)

}