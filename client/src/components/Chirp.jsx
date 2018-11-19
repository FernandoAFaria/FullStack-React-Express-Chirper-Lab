import React from 'react';

class Chirp extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            loaded: false,
            chirp: {},
            id: undefined,
            name: undefined,
            message: undefined,
            edit: false
        }
    }
    componentDidMount(){
        console.log(this.props.match.params.id)
        fetch(`/api/${this.props.match.params.id}`)
        .then((res) => res.json())
        .then((chirp) => {
            this.setState({
                chirp: chirp,
                loaded: true,
                id: this.props.match.params.id,
                name: chirp.Name,
                message: chirp.Message

            })
        })
    }
    handleDelete() {
        fetch(`/api/submit/${this.state.id}`, {
            method: 'delete'
        }).then((res) => console.log('Chirp Deleted'))
        this.props.history.goBack();
    }
    handleEdit(event) {
        event.preventDefault();
        this.setState({
            edit: true
        })
    }
    handleChange() {
        console.log('clicked')
        event.preventDefault();
        let name = document.getElementById('chirpNameChange').value;
        let message = document.getElementById('chirpMessageChange').value;
        let chirp = {
            Name: name,
            Message: message
        }

        fetch(`/api/submit/${this.state.id}`, {
            method: 'put',
            body: JSON.stringify(chirp),
            headers: {
                'Content-Type': 'application/json'
            }

        }).then(function (res) {
            console.log('Successfully Changed');

        })
        this.props.history.goBack();
    }

    render(){
        if(this.state.loaded && this.state.edit == false){
            return (
               <div style={{width: '70%'}}>
                    <div className="jumbotron">
                        <h1 className="display-3">{this.state.name}</h1>
                        <p className="lead">{this.state.message}</p>
                        <hr className="my-4" />
                            
                            <p className="lead">
                                <a className="btn btn-primary" onClick={(event) => this.handleEdit(event)} href="#" role="button">Edit</a>
                            <a className="btn btn-danger float-right text-white" onClick={(event) => this.handleDelete(event)} role="button">Delete</a>
                            </p>
</div>
               </div>
            )
        } 
        
        if(!this.state.loaded){
            return (
                <div>
                    <h2>Loading Chirp</h2>
                </div>
            )
        }

        if (this.state.loaded && this.state.edit == true) {
            return (
            
                <div style={{ padding: '15px 10%', background: 'black' }}>
                    <form>
                        <div className="form-group">
                            <label for="name">Name</label>
                            <input type="text" name='name' className="form-control col-sm-3 my-1" id="chirpNameChange" placeholder={this.state.name} />
                        </div>
                        <div className="form-group">
                            <label for="message">Message</label>
                            <input type="text" name='message' className="form-control" id="chirpMessageChange" placeholder={this.state.message} />
                            <button type="submit" onClick={(event) => this.handleChange(event)} class="btn btn-success mt-5 ">Make Changes</button>
                        </div>



                    </form>
                </div>
            )
        
    }
}

}

export default Chirp;