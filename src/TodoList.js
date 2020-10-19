import React,{Component} from 'react'
import { v4 as uuidv4 } from 'uuid';
import AddTodo from './AddTodo'
import Todo from './Todo'
import './TodoList.css'
class TodoList extends Component
{
    constructor(props)
    {
        super(props)
        this.state={
            todos: JSON.parse(window.localStorage.getItem('todos')) || []
        }
        this.addTodo=this.addTodo.bind(this)
        this.editTodo=this.editTodo.bind(this)
        this.deleteTodo=this.deleteTodo.bind(this)
    }
    addTodo(todo)
    {
        const newTodo={
            id: uuidv4(),
            todo:todo
        }
        this.setState({todos:[newTodo,...this.state.todos]})
    }
    editTodo(id,todo)
    {
        const newTodos=this.state.todos.map((itr)=>{
            if(id===itr.id)
            {
                return {id: id, todo: todo}
            }
            else
                return itr
        })
        this.setState({todos:newTodos})
    }
    deleteTodo(id)
    {
        const newTodos=this.state.todos.filter((itr)=>{
            return itr.id===id?false : true
        })
        console.log(newTodos)
        this.setState({todos: newTodos})
    }
    componentDidUpdate()
    {
        window.localStorage.setItem('todos',JSON.stringify(this.state.todos))
    }
    render()
    {
        const result = this.state.todos.map((itr)=>{
            return(
                <li className='list-group-item todoList-li' key ={itr.id}><Todo id={itr.id} todo={itr.todo} delete={this.deleteTodo} edit={this.editTodo}/></li>
            )
        })
        return(
            <div>
                <AddTodo add={this.addTodo}/>
                <ul className='list-group'>
                    {result}
                </ul>
            </div>
        )
    }
}
export default TodoList
