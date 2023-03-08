import React,{Component} from 'react';
import './Main.css'

import axios from 'axios'

class Main extends Component{

    constructor(props){
        super(props);
        this.state={
            id:'',
            name:'',
            langauge:'',
            author:'',
            price:'',
            rating:''
        };
    }y
    
    handleIdChange=(event)=>{
        this.setState({id:event.target.value})
    };
    handleNameChange=(event)=>{
        this.setState({name:event.target.value})
    };
    handleLanguageChange=(event)=>{
        this.setState({language:event.target.value})
    };
    handleAuthorChange=(event)=>{
        this.setState({author:event.target.value})
    };
    handlePriceChange=(event)=>{
      this.setState({price:event.target.value})
  };
  handleRatingChange=(event)=>{
    this.setState({rating:event.target.value})
};

    handleSubmit = (event) => {
        event.preventDefault();
        const data = {
            id: this.state.id,
            name: this.state.name,
            language: this.state.language,
            author: this.state.author,
            price: this.state.price,
            rating: this.state.rating
        };
        
        axios.post('http://127.0.0.1:8080/post', data)
    }

    render(){
    return ( 
        <><center>
        <div className='container'>
            
        <form onSubmit={this.handleSubmit}>
            <h1>PLACE YOUR ORDER</h1>
            
            <div className='row'>
                <label>Id : </label><br></br>
                <input type="number" id='id' placeholder='  Enter your Id...' value={this.state.id}
                    onChange={this.handleIdChange}/>
            </div>
            {/* <p  style={{color:"red"}}>{formErrors.id}</p> */}

            <div className='row'>
                <label>Bookname : </label><br></br>
                <input type="text" id='Bookname' placeholder='  Enter Bookname...' value={this.state.name}
                    onChange={this.handleNameChange}/>
            </div>
            {/* <p  style={{color:"red"}}>{formErrors.username}</p> */}

            <div className='row'>
                <label>Langauge : </label><br></br>
                <input type="text" id='Language' placeholder='  Enter Language.' value={this.state.language}
                    onChange={this.handleLanguageChange}/>
            </div>
            {/* <p  style={{color:"red"}}>{formErrors.email}</p> */}

            <div className='row'>
                <label>Author: </label><br></br>
                <input type="text" id='author' placeholder='  Enter author name...' value={this.state.author}
                    onChange={this.handleAuthorChange}/>
            </div>
            <div className='row'>
                <label>Price: </label><br></br>
                <input type="text" id='price' placeholder='  Enter price' value={this.state.price}
                    onChange={this.handlePriceChange}/>
            </div>
            <div className='row'>
                <label>Rating:</label><br></br>
                <input type="text" id='rating' placeholder='  Enter rating' value={this.state.rating}
                    onChange={this.handleRatingChange}/>
            </div>
            
            {/* <p  style={{color:"red"}}>{formErrors.password}</p> */}
            <br></br>

            <div className='row'>
                <button className='btn btn-primary'>Login</button>
            </div>
        </form>
        </div></center>
        </>
     );
    }
}

export default Main