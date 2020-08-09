import React from 'react';
import ReactDom, { render } from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import Navbar from './navbar';
import Jumpbrotom from './jumpbrotom'
import Card from './card'
import Footer from './footer'


function App() {
    return (
        <div className="container">
            <Navbar title="Start BootStrap" />

            <Jumpbrotom title="A Warm Welcome!" description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa, ipsam, eligendi, in quo sunt possimus non incidunt odit vero aliquid similique quaerat nam nobis illo aspernatur vitae fugiat numquam repellat." buttonLabel="Call to action!" />

            <div className="row text-centered">

                <Card imageURl="http://placehold.it/500x325" title="Card title" description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque." buttonLabel="Find out More!" />

                <Card imageURl="http://placehold.it/500x325" title="Card title" description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque." buttonLabel="Find out More!" />

                <Card imageURl="http://placehold.it/500x325" title="Card title" description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque." buttonLabel="Find out More!" />

                <Card imageURl="http://placehold.it/500x325" title="Card title" description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque." buttonLabel="Find out More!" />

            </div>
            <div><Footer footerText="Copyright © Your Website 2020"/></div>
        </div>
    )
};

ReactDom.render(<App />, document.getElementById("root"));



