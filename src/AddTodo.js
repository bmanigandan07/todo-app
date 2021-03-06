import React,{Component} from 'react'
class AddTodo extends Component
{
    constructor(props)
    {
        super(props)
        this.state={
            todo:''
        }
        this.handleChange=this.handleChange.bind(this)
        this.handleSubmit=this.handleSubmit.bind(this)
    }
    handleChange(evt)
    {
        this.setState({todo: evt.target.value})
    }
    handleSubmit(evt)
    {
        evt.preventDefault();
        this.props.add(this.state.todo)
        this.setState({todo:''})
    }
    render()
    {
        return(

            <div className="jumbotron">
              <h1 className="display-4 font-weight-bold ">Welcome to To-do App</h1>
              <p className="lead font-weight-normal">Add a Todo below</p>
              <hr className="my-4"></hr>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group row">
                    <label htmlFor='add todo'></label>
                        <input className='form-control form-control-lg' id='add todo' type='text' placeholder='enter todo here...' value={this.state.todo} onChange={this.handleChange} required ></input>
                    <button className='btn btn-dark btn-lg btn-block mt-4'>Add todo!</button>
                    </div>
                </form>
            </div>
        )
    }n
}
export default AddTodo;