import React from 'react';


class CreateChirp extends React.Component {
    constructor() {
        super();
    }

    handleSubmit(event) {
        console.log('clicked')
        event.preventDefault();
        let name = document.getElementById('chirpName').value;
        let message = document.getElementById('chirpMessage').value;
        let chirp  = {
            Name: name,
            Message: message
        }
       
        fetch('/api/submit', {
            method: 'post',
            body: JSON.stringify(chirp),
            headers: {
                'Content-Type': 'application/json'
            }
            
        }).then(function(res){
            console.log(res);
            
        })
        this.props.history.goBack();
    }

    render() {
        return (
            <div style={{padding: '15px 10%', background: 'black'}}>
                <form>
                    <div className="form-group">
                        <label for="formGroupExampleInput">Chirp From?</label>
                        <input type="text" name='name' className="form-control col-sm-3 my-1" id="chirpName" placeholder="Enter your name" />
                     </div>
                        <div className="form-group">
                            <label for="formGroupExampleInput2">Message:</label>
                            <input type="text" name='message' className="form-control" id="chirpMessage" placeholder="Enter your message" />
                        <button type="submit" onClick={(event) => this.handleSubmit(event)} class="btn btn-success mt-5 ">Submit</button>
                        </div>
                   
                        
                    
                        </form>
                    </div>
                    )
                }
            }
            
export default CreateChirp;