
import { useState , useEffect} from 'react';
import './App.css';
import AddForm from './components/AddForm';
import PrintForm from './components/PrintForm';
import { Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';

function App() {
  const LOCAL_STORAGE_KEY = "forms";
  const [forms, setForms] = useState([]);


  /* the form value got from user is set tu the the hook[forms]*/
  const addFormHandler = (form) => {
    setForms([form])
 
  };
  const removeFormtHandler = (id) => {
    const newFormList = forms.filter((form) => {
      return form.id !== id;
    });
    setForms(newFormList);
  }
  console.log(forms);

  useEffect(() => {
    const retriveForms = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (retriveForms) setForms(retriveForms);
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(forms));
  }, [forms]);
  
//   const getDataFromAddForm = (data) => {
// log
//   }
  return (
    <div className="App">
    
<Switch>
 
  <Route 
      path="/" 
      exact 
      render={(props) => (<AddForm {...props} addFormHandler={addFormHandler}  />)}
    />
  <Route 
      path="/print" 
      exact 
      render={(props) => (<PrintForm {...props} forms={forms} />)}
    />
 
</Switch> 
     
    
     {/* <AddForm addFormHandler={addFormHandler}  /> */}
     {/* <PrintForm forms={forms} /> */}
      {/* <FormList forms={forms} getFormID = {removeFormtHandler}/>  */}
    </div>
  );
}

export default App;
