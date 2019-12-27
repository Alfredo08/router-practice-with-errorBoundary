import React from 'react';
import ErrorHandle from './ErrorHandle';

export default function Profile(props){

    let currentHTMLToShow = <ErrorHandle identifier={props.match.params.identifier} profiles={props.profiles} />

    return(
        <div>
           This is the profile section
           {currentHTMLToShow}
        </div>
    );
}