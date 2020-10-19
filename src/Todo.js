import React,{Component} from 'react'
import  './Todo.css'
class Todo extends Component
{
    constructor(props)
    {
        super(props)
        this.state={
            todo: this.props.todo,
            editMode: false,
            isDone: false
        }
        this.handleEdit=this.handleEdit.bind(this)
        this.handleChange=this.handleChange.bind(this)
        this.handleSubmit=this.handleSubmit.bind(this)
        this.handleDelete=this.handleDelete.bind(this)
        this.handleClick=this.handleClick.bind(this)

    }
    handleEdit(evt)
    {
        this.setState({editMode: !this.state.editMode})
    }
    handleChange(evt)
    {
        this.setState({todo: evt.target.value})
    }
    handleClick(evt)
    {
        this.setState({isDone: !this.state.isDone})
    }
    handleSubmit(evt)
    {
        evt.preventDefault();
        this.props.edit(this.props.id, this.state.todo)
        this.setState({editMode: false})
    }
    handleDelete(evt)
    {
        this.props.delete(this.props.id)
    }
    render()
    {
        const result= this.state.editMode ? (
            <form className='todo-p' onSubmit={this.handleSubmit}>
                <label htmlFor='edit'>
                    <input className='input-group input-group-lg' type='text' id='edit' value={this.state.todo} onChange={this.handleChange} required></input>
                </label>
                <button className='btn btn-dark btn-lg mx-3 mb-2'>Update</button>
            </form>
            ) : (
                <>
                    <p className={this.state.isDone?'todo-p todo-p-disabled':'todo-p'} onClick={this.handleClick}>
                        {this.props.todo}
                    </p>
                    <i className="fa fa-pencil m-2" style={{fontSize:'2em',cursor: 'pointer'}} onClick={this.handleEdit} aria-hidden="true"></i>
                    <i className="fa fa-trash m-2" style={{fontSize:'2em',cursor: 'pointer'}} onClick={this.handleDelete} aria-hidden="true"></i>
                </>
            )
        return result
    }
}
export default Todo;