import React from 'react'

export default function PrintForm(props) {
 console.log(props);
 setTimeout(() => {
  window.print();
}, 5000);
 const formRenderer = props.forms.map((form) => {
  const deleteFormHandler = (id) =>{
    props.getFormID(id)
  }
  console.log(form);
  return (
    <>
    
    <p><img src={form.img} width="250px" height="160" /></p>
    <p>{form.Bracket}</p>
    <p>{form.Mark}</p>
    <p>{form.Material}</p>
    <p>{form.Name}</p>
    <p>{form.NickName}</p>
    <p>{form.touch}</p>
    </>
     
  );

});



  return (
    <>
    hai
    {formRenderer}
    </>
  )
}
