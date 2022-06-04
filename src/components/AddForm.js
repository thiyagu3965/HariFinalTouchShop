import React, { Component } from 'react'

export default class AddForm extends React.Component {
  state = {
    formno: "",
    Name: "",
    NickName: "",
    Bracket: "",
    Material: "",
    Mark: "",
    touch: "",
    file: "",
    date:"",
    img: "noImg"
  }; 

  
   
       handleChangeImage = e => {
         if(!e.target.files[0]){

         }
         const url = URL.createObjectURL(e.target.files[0])
         this.setState({[e.target.name]: url})
      }


     add = (e) =>{
       e.preventDefault();
       this.props.addFormHandler(this.state)
       this.props.history.push('/print')
       
    }
  render() {
    return (
      
    <div class="container">
      <h2>Sri HariHaran Refinery</h2>
      <form onSubmit={this.add}>
        
        <div class="form-group" >
          <label for="formno">Form No:</label>
          <input type="number" class="form-control" value={this.state.formno} onChange={(e) => this.setState({formno : e.target.value} )}/>
        </div>

        <div class="form-group" >
          <label for="Name">Name:</label>
          <input type="text" class="form-control" value={this.state.Name} onChange={(e) => this.setState({Name : e.target.value} )}/>
        </div>

        <div class="form-group" >
          <label for="NickName">NickName:</label>
          <input type="text" class="form-control" value={this.state.NickName} onChange={(e) => this.setState({NickName : e.target.value} )}/>
        </div>

        <div class="form-group" >
          <label for="Bracket">Bracket:</label>
          <input type="text" class="form-control" value={this.state.Bracket} onChange={(e) => this.setState({Bracket : e.target.value} )}/>
        </div>

        <div class="form-group" >
          <label for="Material">Material:</label>
          <input type="text" class="form-control" value={this.state.Material} onChange={(e) => this.setState({Material : e.target.value} )}/>
        </div>

        <div class="form-group" >
          <label for="Mark">Mark:</label>
          <input type="text" class="form-control" value={this.state.Mark} onChange={(e) => this.setState({Mark : e.target.value} )}/>
        </div>

        <div class="form-group" >
          <label for="number">Touch:</label>
          <input type="text" class="form-control" value={this.state.touch} onChange={(e) => this.setState({touch : e.target.value} )}/>
        </div>

        <div class="form-group" >
          <label for="touch">Upload Image:</label>
          <input type="file" id="img" name="img" accept="image/*" className="w-100" onChange={this.handleChangeImage}/>
        </div>
       
        <div className='imagePreview'>
            <img src={this.state.img} alt="image preview" width="200px" height='100px'/>
        </div>
       
        <div class="form-group" >
          <label for="date">Date</label>
          <input type="date" onChange={(e) => this.setState({date : e.target.value} )} />
        </div>
        {/* <div class="checkbox">
          <label><input type="checkbox" /> Remember me</label>
        </div> */}
        <button class="btn btn-default ">Submit</button>
      </form>
    </div>
    )
  }
}
