import { useTranslation } from "react-i18next";

const Home = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === "he";

  return (
    <div className="flex flex-col items-center justify-start min-h-screen w-full px-6 pt-10 text-center">
      <h1 className="text-4xl md:text-5xl font-bold mt-10">{t("home.title")}</h1>
      <p
        className={`mt-4 text-lg md:text-xl max-w-4xl w-full leading-relaxed transition-all duration-300 ${
          isRTL ? "text-right" : "text-left"
        }`}
      >
        {t("home.welcomeParagraph")}
      </p>
    </div>
  );
};

export default Home;
