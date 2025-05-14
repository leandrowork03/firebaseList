import styles from './home.module.css'
import paper from '../../assets/anotações.png'
import { Link } from 'react-router-dom'
export function Home(){
    return(
        <>
        <main className={`pt-60 m-0 h-90 flex flex-col justify-center items-center text-center ${styles.main}`}>
            <div className={styles.homeheader}>
            <h1 className={` text-5xl font-bold  ${styles.titulo}`}>Lista de  tarefas simples</h1>
            
            <p className='mt-10 '>uma Lista de tarefa simples e fácil de usar e acessivel ao dia  a dia, organize sua vida de forma que sobre tempo para a as coisas que você gosta de fazer</p>
            </div>
        <section className={styles.sec}>
        <div className={`pt-20 ${styles.homemain}`}>
        <p className='p-13'>lista super fácil de usar com funcções bem simples de exluir e editar, uma to-do list para afazeres simples</p>
        <img src={paper} alt="anotações" />
        </div>
        <div className="pt-30 w-full">
            <h1 className='m-4 text-3xl font-bold'>Faça o Login</h1>
           <Link to='./tasks' className='bg-blue-700 px-30 py-3 rounded'>Login</Link>
        </div>
        <footer>
            <>
            <p>&copy;Dev.Leandro 2025 Tasks Easy. Todos os direitos reservados.</p>
            </>
        </footer>
        </section>
        </main>
       </>
    )
}