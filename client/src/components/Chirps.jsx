import React from 'react';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';




class Chirps extends React.Component {
    constructor(){
        super();

        this.state = {
            loaded: false,
            chirps: []
        }
    }

    componentDidMount() {
        
        fetch('/api/')
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                let chirpsData = []
                for(var i = 0; i < data.nextid; i++){
                    try{
                        
                        chirpsData.push({Name: data[i].Name, Message: data[i].Message, ID: i});
                    }
                    catch(err){
                        console.log(err)
                    }
                }

                this.setState({
                    
                    chirps: chirpsData,
                    loaded: true
                    
                })
                
            })
    }



    render(){

        if(this.state.loaded == true){
            
               
                  return(
                      <div style={{padding: '5px'}}>
                          <div><div className="alert alert-dismissible alert-info">

                              What to chirp something to the world?  <Link to="/create" className='btn btn-info btn-sm'>Click Here</Link>
                          </div></div>
                          
                          {this.state.chirps.map((x, index) => {
                              let id = index;
                              return (
                                  <div style={{padding: '0 50px'}}>
                                      <div className="card text-black bg-light mb-3" style={{minWidth: '90vw'}}>
                                          <div className="card-header"><span className="badge badge-pill badge-success">Chirp # {index + 1}</span></div>
                                          <div className="card-body">
                                              <h4 className="card-title text-primary"><strong>{x.Name} chrips:</strong></h4>
                                              <p className="card-text alert alert-primary">{x.Message} <Link to={`chirp/${x.ID}`} style={{marginTop: '45px'}} className ='btn btn-sm btn-primary float-right'>See Details</Link></p>
                                          </div>
                                      </div>
                                  </div>
                              )
                          })}
                             
                          
                        
                            
            
                      </div>
                  )
                
                
            }
                
            
         if(this.state.loaded == false) {
            return(
                <div>
                    <h1>Loading</h1>
                </div>
            )
        }
    }
}

export default Chirps;