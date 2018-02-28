import React,{Component} from 'react'


// //function component bcoz of function
// const SearchBar = () =>{
//   return <input/>; //React.createEelement()
//
// };
class SearchBar extends Component { // searchbar getting access to all functionality of react.component class
   constructor(props){
     super(props);
     this.state = {term : ''};
   }



  render(){
      // return <input  onChange = {this.onInputChange} />;
      return (
        <div className ="search-bar">
         <input
           value ={this.state.term}
         onChange = {event => this.onInputChange(event.target.value)} />

        </div>
    );

  }
  onInputChange(term)
  {
      this.setState({term});
      this.props.onSearchTermChange(term);

  }
 // value of input : {this.state.term}
  // onInputChange(event) {
  //    console.log(event.target.value);
  //
  //
  // }

}



export default SearchBar;
