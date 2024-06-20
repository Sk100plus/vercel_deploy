import './App.css';

import React, {  useState } from 'react';
import NavBar from './components/Navbar';
import News from './components/News';
import NewsH from './components/NewsH';
import NewsB from './components/NewsB';
import NewsSci from './components/NewsSci';
import NewsTech from './components/NewsTech';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar';
import Home from './components/Home';

const App = () => {
  const [apiKey, setApiKey] = useState(process.env.REACT_APP_NEWS_API);
  const [state, setState] = useState(0);
  const [progress, setProgress] = useState(0); // Change here

  return (
    <div>
      <BrowserRouter>
        <LoadingBar color='red' progress={progress} height={4} /> {/* Change here */}

        <NavBar />

        <Routes>
        <Route exact path="/NEWS_APP" element={<Home />}></Route>
          
          <Route
            exact // Change here
            path="/NEWS_APP/news"
            element={<News setProgress={setProgress} apiKey={apiKey} key="general" pageSize={18} country="in" category="general" />}
          ></Route>
          <Route
            exact
            path="/NEWS_APP/health"
            element={<NewsH setProgress={setProgress} apiKey={apiKey} key="health" pageSize={18} country="in" category="health" />}
          ></Route>
          <Route
            exact
            path="/NEWS_APP/science"
            element={<NewsSci setProgress={setProgress} apiKey={apiKey} key="/science" pageSize={18} country="in" category="science" />}
          ></Route>
          <Route
            exact
            path="/NEWS_APP/technology"
            element={<NewsTech setProgress={setProgress} apiKey={apiKey} key="technology" pageSize={18} country="in" category="technology" />}
          ></Route>
          <Route
            exact
            path="/NEWS_APP/business"
            element={<NewsB setProgress={setProgress} apiKey={apiKey} key="business" pageSize={18} country="in" category="business" />}
          ></Route>


        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
