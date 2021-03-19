import React, {Component} from "react";
import API from "../utils/API";
import SearchForm from "../components/SearchForm";
import SearchResults from "../components/SearchResult";



class Search extends Component {

    state ={
        search:"",
         results:[],
         errors:"",
         users:[]
    }

    componentDidMount(){
        API.getUsers()
        .then(res => this.setState({ results: res.data.results}))
        .catch(err => console.log(err));
    }

    handleInputChange = event =>{
        this.setState({search:event.target.value});
    };

    handleFormSubmit = event =>{
        event.preventDefault();
        API.getUsers(this.state.search)
        .then(res => {
            if(res.data.status === "error"){
                throw new Error(res.data.results)
            }
            this.setState({results: res.data.results, error:""})
        })
        .catch(err => this.setState({ error: err.message }));
    }
     
    render(){
        return(
            <div>
                <SearchForm
                    handleFormSubmit={this.handleFormSubmit}
                    handleInputChange={this.handleInputChange}
                    users={this.state.users}
                />
                <SearchResults results={this.state.results} />
            </div>
        )
    }

}

export default Search;

