// Create a new component. This componenet should prodece some html
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import YTSearch from 'youtube-api-search';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
import _ from 'lodash';

const API_KEY = "YTUBE API KEY HERE";
// const App = () =>
// {
//   return (
//                 <div>
//                 <SearchBar/>
//               </div>
//         ); //JSX
// }
class App extends Component {
   constructor(props){
     super(props);
     this.state = {

       videos:[],
       selectedVideo :null

     };

this.videoSearch('surfboards');
   }

videoSearch(term){

  YTSearch ({key:API_KEY ,term:term},(videos)=>{
    this.setState ({videos:videos, selectedVideo :videos[0]}); //this.setState ({videos:videos}); it works when key and value are same
  });

}


render(){
const videoSearch = _.debounce((term)=>{this.videoSearch(term)},300);

  return (
              <div>
                  <SearchBar onSearchTermChange={videoSearch}/>
                  <VideoDetail video={this.state.selectedVideo}/>
                  <VideoList videos={this.state.videos}   onVideoSelect = {selectedVideo => this.setState({selectedVideo})}/>
                </div>
          ); //JSX
}

}
// take this component's generated HTMl and put it on the page (in the DOM)
ReactDOM.render(<App/>,document.querySelector('.container'));
