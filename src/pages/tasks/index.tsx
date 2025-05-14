import { useEffect, useRef, useState } from "react";
import styles from "./tasks.module.css";
import itemPng from  '../../assets/caneta.png'
import itemMaterial from '../../assets/material.png'

export function Tasks() {
  const [input, setInput] = useState("");
  const [list, setList] = useState<string[]>([]);
    const [loading, setLoading] = useState(true)



    
    const [editing, setEditing] = useState({
      enabled: false,
      Tasks: "",
    });
    
    const inputRef = useRef<HTMLInputElement>(null)
    const firstRender = useRef(true)
    
    useEffect(()=>{
    const save = localStorage.getItem("@save")
    if(save){
      setList(JSON.parse(save))
    }
    setLoading(false)
  },[])

  useEffect(()=>{
    if(firstRender.current){
      firstRender.current = false
      return
    }
    
    localStorage.setItem('@save', JSON.stringify(list))
  },[list])


  function cadastrar() {
    if (input === "") {
      alert("o campo está vazio");
      return;
    }
    
    if (editing.enabled) {
      saveEdit();
      return;
    }

    if (list.includes(input)) {
  alert("Essa tarefa já existe!");
  return;
}
    
    setList([...list, input]);
    setInput("");
  }
  
  function saveEdit() {
    const editList = list.findIndex((e) => e === editing.Tasks);
    const allTasks = [...list];
    
    allTasks[editList] = input;
    setList(allTasks);
    setEditing({
      enabled: false,
      Tasks: "",
    });
    setInput("");
  }
  
  function editar(item: string) {
    setInput(item);
    setEditing({
      enabled: true,
      Tasks: item,
    });
    inputRef.current?.focus()
  }
  
  function deletar(item: string) {
    const removeList = list.filter((e) => e !== item);
    setList(removeList);
  }
  
  function cancelar() {
    setEditing({
      enabled: false,
      Tasks: "",
    });
    setInput('')
  }
  
if (loading) {
  return (
    <div className="flex items-center justify-center h-screen">
      <h1 className="text-2xl font-bold text-amber-400">Carregando...</h1>
    </div>
  );
}
  return (
    <main className={`flex flex-col pt-20 items-center w-full ${styles.main}`}>
      <img src={itemPng} alt="caneta" className={styles.caneta}/>
      <img src={itemMaterial} alt="material escolar" className={styles.material}/>
      <h1 className={styles.titulo}>Lista de tarefas</h1>
      <div className={styles.in}>
        <input
          type="text"
          placeholder="digite sua tarefa"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          ref={inputRef}
        />
        {editing.enabled ? (
          <>
            <button onClick={cadastrar}>Salvar</button>
            <button onClick={cancelar} className={styles.cancelar}>Cancelar</button>
          </>
        ) : (
          <button onClick={cadastrar}>Adicionar</button>
        )}
      </div>
      <ul className="w-fit flex flex-wrap items-center justify-center p-0">
        {list.map((item, index) => (
          <li key={index} className={styles.li}>
            <p>{item}</p>
            <div>
              <button onClick={() => editar(item)} className={styles.editar}>editar</button>
              <button onClick={() => deletar(item)} className={styles.deletar}>deletar</button>
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
}
