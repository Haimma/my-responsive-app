import { useTranslation } from "react-i18next";

const Fields = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === "he";

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold text-center">{t("fields.title")}</h1>

      <h2 className="mt-6 text-xl font-semibold">{t("fields.personalInformation")}</h2>
      <form className="mt-4 space-y-6">
        
        <div className={`grid gap-4 ${isRTL ? "rtl" : ""} grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4`}>
          <input type="text" placeholder={t("fields.firstName")} className="w-full p-2 border rounded" />
          <input type="text" placeholder={t("fields.lastName")} className="w-full p-2 border rounded" />
          <input type="email" placeholder={t("fields.email")} className="w-full p-2 border rounded" />
          <input type="text" placeholder={t("fields.phone")} className="w-full p-2 border rounded" />
          <input type="text" placeholder={t("fields.fullAddress")} className="w-full p-2 border rounded" />
          <input type="number" placeholder={t("fields.age")} className="w-full p-2 border rounded" />
        </div>

        <h2 className="mt-6 text-xl font-semibold">{t("fields.hobbies")}</h2>
        <textarea placeholder={t("fields.describeHobbies")} className="w-full p-2 border rounded"></textarea>

        <h2 className="mt-6 text-xl font-semibold">{t("fields.additionalInformation")}</h2>
        <textarea placeholder={t("fields.extraInfo")} className="w-full p-2 border rounded"></textarea>

        <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
          {t("fields.submit")}
        </button>
      </form>
    </div>
  );
};

export default Fields;
