import styles from './Content.module.css'


function Content() {
  return (
    <div className={styles.odin}>
      <div className={styles.main}>
        <h1 className={styles.titulo}>
          Tupinambás
        </h1>
        <p className={styles.texto}> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius, sed, ratione deleniti impedit officia laborum, pariatur fuga architecto amet ad consectetur enim facere consequatur illum fugiat! Laudantium, minima veniam. Dolorum?</p>
        <div className={styles.sobreTupinambas}>
          <img className={styles.img} src="https://www.ufmg.br/espacodoconhecimento/wp-content/uploads/2023/08/manto-tupinamba-gravura.jpg" alt="pintura representando os Tupinambás" />
        </div>
      </div>
    </div>
  )
}

export default Content