import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Header from './Component/Header/Header';
import CourseInfo from './Component/CourseInfo/CourseInfo';
function App() {
  return (
    <div className="App">
      <Header></Header>
      <CourseInfo></CourseInfo>
    </div>
  );
}
export default App;
