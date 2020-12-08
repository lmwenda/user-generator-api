import * as React from 'react';
const {useEffect, useState} = React;

// https://randomuser.me/api/

export default class Application extends React.Component{

    state = {
        loading: true,
        person: undefined
    }

    async componentDidMount(){
        const url = 'https://randomuser.me/api/';
        const response = await fetch(url);
        const jsonData = await response.json();
        console.log(jsonData);
        this.setState({ person: jsonData.results[0], loading: false });
    }

    render(){

        const {state, setState}

        if(this.state.loading){
            return <div>Loading...</div>
        }

        if(!this.state.person){
            return <div>Didn't get a Person...</div>
        }
        return(
            <div className="app">
                    <div>{this.state.person.name.title}</div>
                    <div>{this.state.person.name.first}</div>
                    <div>{this.state.person.name.last}</div>
                    <img src={this.state.person.picture.large} />
                    <button>View in JSON Data</button>
            </div>
        );
    }
}
