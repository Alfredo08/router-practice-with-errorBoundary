import React from 'react';

export default class ErrorHandle extends React.Component{

    /*
     <h1> This is the profile of {currentProfile.firstName} {currentProfile.lastName} </h1>
            <p> At Thinkful he is a {currentProfile.role} </p>
            <div>
                <img src={currentProfile.image} alt="An image" />
            </div>
            <h2> His bio</h2>
            <p> {currentProfile.biography} </p>
    */
    
    render(){

        let identifier = this.props.identifier;

        let currentProfile = this.props.profiles.find( profile => {
            console.log( profile.id, identifier );
            return identifier == profile.id;
        });

        if ( currentProfile === undefined){
            return (<div>
                That ID is not valid
            </div>)
        }
        else{
            return(<div>
                        <h1> This is the profile of {currentProfile.firstName} {currentProfile.lastName} </h1>
                        <p> At Thinkful he is a {currentProfile.role} </p>
                        <div>
                            <img src={currentProfile.image} alt="An image" />
                        </div>
                        <h2> His bio</h2>
                        <p> {currentProfile.biography} </p>
                    </div>)
        }
    }
}