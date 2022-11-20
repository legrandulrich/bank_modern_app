import { featuresEducation } from "../constants";
import styles, { layout } from "../style";
import Button from "./Button";

const FeatureCard = ({ icon, title, content, index }) => (
  <div
    className={`flex flex-row p-6 rounded-[20px] ${
      index !== featuresEducation.length - 1 ? "mb-6" : "mb-0"
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

const Education = () => (
  <section id="featuresEducation" className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>BoomG Education</h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        BoomG Éducation est un ensemble d'applications numériques conçues par
        BoomGTech pour l'hébergement et la distribution des contenus numériques,
        la communication et la collaboration par le biais des technologies
        innovantes entre les principaux acteurs de la communauté éducative qui
        sont les élèves, les enseignants, les parents et l'administration.
      </p>

      <Button styles={`mt-10`} />
    </div>

    <div className={`${layout.sectionImg} flex-col`}>
      {featuresEducation.map((feature, index) => (
        <FeatureCard key={feature.id} {...feature} index={index} />
      ))}
    </div>
  </section>
);

export default Education;
