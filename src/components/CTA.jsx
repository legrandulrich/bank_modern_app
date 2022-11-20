import styles from "../style";
import Button from "./Button";

const CTA = () => (
  <section
    className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}
  >
    <div className="flex-1 flex flex-col">
      <h2 className={styles.heading2}>
        Trouvez le ou les services qui vous conviennent et commencez à les
        utiliser dès aujourd'hui.
      </h2>
      <p className={`${styles.paragraph}  mt-5`}>
        BoomGTech est une autoroute d'infrastructures technologiques pensées par
        une équipe d'ingénieurs aux compétences multiples dans le but de fournir
        au grand public ainsi qu'aux entreprises des solutions adaptées pour
        répondre en toute sécurité et confidentialité aux exigences des
        activités et tâches du quotidien.
      </p>
    </div>

    <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
      <Button />
    </div>
  </section>
);

export default CTA;
