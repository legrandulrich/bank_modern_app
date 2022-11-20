import { featuresTrade } from "../constants";
import styles, { layout } from "../style";
import Button from "./Button";

const FeatureCard = ({ icon, title, content, index }) => (
  <div
    className={`flex flex-row p-6 rounded-[20px] ${
      index !== featuresTrade.length - 1 ? "mb-6" : "mb-0"
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

const Trade = () => (
  <section id="featuresTrade" className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>BoomG Business</h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Un ensemble d’outils simple d'utilisation, qui permet aux entreprises,
        aux organisations ainsi qu’aux particuliers d’améliorer leur expériences
        en tant que utilisateurs de technologies innovantes.
      </p>

      <Button styles={`mt-10`} />
    </div>

    <div className={`${layout.sectionImg} flex-col`}>
      {featuresTrade.map((feature, index) => (
        <FeatureCard key={feature.id} {...feature} index={index} />
      ))}
    </div>
  </section>
);

export default Trade;
