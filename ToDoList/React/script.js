const { Component } = React;

class TarefaApp extends Component{
   constructor(props){
    super(props);
    this.state = { tarefas: [], item: ''};
   }
   
   handleChange =(event) => {
    this.setState({ item: event.target.value});
   }

   add = () =>{
    const { tarefas, item} = this.state;
    if (item.length === 0){
        alert("Digite uma item");
    } else {
        this.setState({tarefas: tarefas.concat(item), item: ''});
    }
   }

   check = (e) =>{
    e.target.parentElement.querySelector(".check").style.color="#349223";
    e.target.style.textDecoration = "line-through";
    //e.target.parentElement.querySelector("span").style.textDecoration = "line-through";
   }

   del = (id) =>{
    const {tarefas} = this.state;
    tarefas.splice(id, 1);
    this.setState({ tarefas: tarefas });
   }

   render = () => {
    const { tarefas, item } = this.state;
    return(
        <div>
          <header className="header">
              <h1>Lista de tarefas</h1>           
              <input onChange={this.handleChange} value={item} placeholder="Digite a sua tarefa..."/>            
              <span onClick={this.add}><i className="fas fa-plus-circle" ></i></span>                      
          </header>
          <ul>
            {tarefas.map((item, index) =>(
                <li key={index}>
                    <i className="fas fa-check-circle check"></i>
                    <span onClick={this.check.bind(this)}>{item}</span>
                    <i className="fa-solid fa-trash-can close" onClick={this.del.bind(this, index)}></i>
                </li>
            ))}
          </ul>
        </div>
    )
   }
}

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(<TarefaApp />);