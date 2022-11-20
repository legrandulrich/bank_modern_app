import { featuresHealth } from "../constants";
import styles, { layout } from "../style";
import Button from "./Button";

const FeatureCard = ({ icon, title, content, index }) => (
  <div
    className={`flex flex-row p-6 rounded-[20px] ${
      index !== featuresHealth.length - 1 ? "mb-6" : "mb-0"
    } feature-card`}
  >
    <div
      className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}
    >
      <img src={icon} alt="star" className="w-[50%] h-[50%] object-contain" />
    </div>
    <div className="flex-1 flex flex-col ml-3">
      <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23.4px] mb-1">
        {title}
      </h4>
      <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]">
        {content}
      </p>
    </div>
  </div>
);

const Health = () => (
  <section id="featuresHealth" className={layout.section}>
    <div className={`${layout.sectionImg} flex-col`}>
      {featuresHealth.map((feature, index) => (
        <FeatureCard key={feature.id} {...feature} index={index} />
      ))}
    </div>

    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>BoomG Sante</h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Vous pouvez rechercher sur BoomG Sante des informations médicales
        vérifiées par des médecins. Vous en saurez plus sur les points suivants:
        Symptômes, Traitements, Problèmes de santé, Prévention et sécurité,
        Questions et préoccupations. Les responsables des formations sanitaires
        publiques ou privées peuvent utiliser la solution BoomG Hospital pour le
        management et le pilotage de leur structure.
      </p>

      <Button styles={`mt-10`} />
    </div>
  </section>
);

export default Health;
