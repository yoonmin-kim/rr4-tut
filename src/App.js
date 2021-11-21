import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './routes/Home';
import Optional from './routes/Optional';
import Post from './routes/Post';
import About from './routes/User/About';
import User from './routes/User/User';
import UserMain from './routes/User/UserMain';


const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/posts/:id" element={<Post/>}/>
      <Route path="/users/:username/*" element={<User/>}>
        <Route path="" element={<UserMain/>}/>
        <Route path="about" element={<About/>}/>
      </Route>
      <Route path="/optional/:value" element={<Optional/>}/>
      <Route path="/optional" element={<Optional/>}/>
    </Routes>
  );
};

export default App;