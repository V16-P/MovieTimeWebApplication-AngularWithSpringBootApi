import { Component, Input } from '@angular/core';
import { Movie } from '../../../commons/movie';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home-moviedetails',
  templateUrl: './home-moviedetails.component.html',
  styleUrls: ['./home-moviedetails.component.css']
})
export class HomeMoviedetailsComponent {

  public dummymovies: Movie[] = [
    {
      movieId:6401,
      movieName:"Daaku Maharaaj",
      movieImagePath:"237725-Daaku Maharaaj.jpg",
      moviePrice:150,
      movieLanguageCategory:"Telugu",
      movieVideoPath:"Daaku Maharaaj.mp4",
      movieContent:"Daaku Maharaaj is an action-packed thriller directed by Bobby Kolli. It stars Nandamuri Balakrishna in a dual role, Bobby Deol as the antagonist, and Pragya Jaiswal, Urvashi Rautela, and Shraddha Srinath in leading roles. The film's music is composed by Thaman, with cinematography by Vijay Kartik Kannan and editing by Niranjan Devaramane and Ruben",
      movieGenreCategory:"Drama"
     },
    {
      movieId:6402,
      movieName:"Nilavuku Enmel Ennadi Kodam",
      movieImagePath:"Nilavuku Enmel Ennadi Kodam.jpg",
      moviePrice:150,
      movieLanguageCategory:"Tamil",
      movieVideoPath:"nilavukku en mel ennadi kobam.mp4",
      movieContent:"Nilavuku En Mel Ennadi Kobam (shortened as NEEK, transl. Why is the Moon Angry with Me?) is an upcoming Indian Tamil-language coming-of-age romantic comedy film co-written, directed, and produced by Dhanush, jointly with Kasthuri Raja and Vijayalakshmi Kasthuri, under Wunderbar Films and RK Productions. It stars an ensemble cast of Pavish, Anikha Surendran, Priya Prakash Varrier, Mathew Thomas, Venkatesh Menon, Rabiya Khatoon and Ramya Ranganathan.",
      movieGenreCategory:"Drama"
     },
     {
      movieId:6403,
      movieName:"Fall",
      movieImagePath:"Fall.jpg",
      moviePrice:150,
      movieLanguageCategory:"English",
      movieVideoPath:"Fall.mp4",
      movieContent:"For best friends Becky and Hunter, life is all about conquering fears and pushing limits. However, after they climb 2,000 feet to the top of a remote, abandoned radio tower, they find themselves stranded with no way down. Now, their expert climbing skills are put to the ultimate test as they desperately fight to survive the elements, a lack of supplies, and vertigo-inducing heights",
      movieGenreCategory:"Drama"
     },
     {
      movieId:6404,
      movieName:"Avesham",
      movieImagePath:"Avesham.jpg",
      moviePrice:150,
      movieLanguageCategory:"Maliyalam",
      movieVideoPath:"AAVESHAM.mp4",
      movieContent:"Three teens come to Bangalore for their engineering education and get involved in a fight. They find a local gangster to help them.",
      movieGenreCategory:"Drama"
     },
     {
      movieId:6405,
      movieName:"Karam",
      movieImagePath:"Karma.jpg",
      moviePrice:150,
      movieLanguageCategory:"Oriya",
      movieVideoPath:"Karma.mp4",
      movieContent:"Stranded in a remote graveyard, special investigation officer Amar Patnaik uncovers chilling secrets, only to realise he's caught in a gripping tale of Karma and Fate",
      movieGenreCategory:"Drama"
     },
     {
      movieId:6406,
      movieName:"Stree2",
      movieImagePath:"Stree.jpg",
      moviePrice:150,
      movieLanguageCategory:"Hindi",
      movieVideoPath:"Stree2.mp4",
      movieContent:"The town of Chanderi is being haunted again. This time, women are mysteriously abducted by a terrifying headless entity. Once again, it is up to Vicky and his friends to save their town and loved one",
      movieGenreCategory:"Drama"
     },

  ];

  public dummymovieDeatials: any;
  public dummymovieDeatialsId: any;

 


   

  constructor(public active: ActivatedRoute) {}

  ngOnInit(): void {
       //dummymovies
       this.dummyMovies()


       //orignal
    
   
  }

  dummyMovies(){

     // Get the movieId from the route parameters and convert it to a number
     this.dummymovieDeatialsId = Number(this.active.snapshot.paramMap.get("movieId"));
    
     // Find the movie using the converted ID
     this.dummymovieDeatials = this.dummymovies.find((item: any) => item.movieId === this.dummymovieDeatialsId);
     
    //  console.log(this.dummymovieDeatials);

  }

 
}
