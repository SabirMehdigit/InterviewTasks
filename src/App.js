import logo from './logo.svg';
import './App.css'; 
import Card  from './components/Card'; 



function App() {
   
   let count=1;
    
  return (
  
    <div className='cards' >
    
    <Card num='1' /> 
     
    <Card num='2'/> 

    <Card num='3' /> 
    <Card num='4' /> 
    <Card num='5' /> 
    <Card num='6' /> 
    
     
    
    
    


    </div>
    
    
  );
}

export default App;
