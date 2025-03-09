import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === "he"; 

  return (
    <div className="flex items-center justify-center h-screen p-6 px-6 w-full">
      <div className="p-6 max-w-md w-full bg-white shadow-lg rounded-lg">
        <h1 className="text-3xl font-bold text-center">{t("contact.title")}</h1>
        <form className="mt-6 space-y-4">
          <input
            type="text"
            placeholder={t("contact.name")}
            className={`w-full p-2 border rounded ${isRTL ? "text-right" : "text-left"} direction-${isRTL ? "rtl" : "ltr"}`}
          />
          <input
            type="email"
            placeholder={t("contact.email")}
            className={`w-full p-2 border rounded ${isRTL ? "text-right" : "text-left"} direction-${isRTL ? "rtl" : "ltr"}`}
          />
          <textarea
            placeholder={t("contact.message")}
            className={`w-full p-2 border rounded ${isRTL ? "text-right" : "text-left"} direction-${isRTL ? "rtl" : "ltr"}`}
          ></textarea>
          <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
            {t("contact.send")}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
