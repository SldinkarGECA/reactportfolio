import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppNavbar from "./components/AppNavbar";
import SwipeNavigation from './components/SwipeNavigation'
import Footer from './components/Footer'
function App() {
    return (
        <div>
            <AppNavbar/>
            <SwipeNavigation/>
            <Footer/>
        </div>
    );
}

export default App;
