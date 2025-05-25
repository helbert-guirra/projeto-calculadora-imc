import styles from './Perfil.module.css';


function Perfil({ nome, email }) {
    return (
        <div className={styles.card}>
            <img
                className={styles.avatar}
                src={`https://github.com/${nome}.png`}
                alt={`Foto de ${nome}`}
            />
            <h2>{nome}</h2>
            <p>{email}</p>
        </div>
    );
}

export default Perfil;