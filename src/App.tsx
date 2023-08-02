import { useState } from "react";
import { FormattedNumber, useIntl } from "react-intl";

import Time from "./component/Time";
import Text from "./component/Text";
import Number from "./component/Number";

export default function App({ setLocale }: any) {
  const [contentType, setContentType] = useState("text");
  const { formatMessage, locale } = useIntl();

  console.log(locale);
  console.log(formatMessage({ id: "app.start" }));

  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      <div className="font-bold">
        <p className="text-4xl text-center">
          {contentType === "date" && <Time />}
          {contentType === "text" && <Text />}
          {contentType === "number" && <Number />}
        </p>
        <div className="mt-8 flex justify-center items-center gap-4">
          <button
            onClick={() => setLocale("en")}
            className="py-1 px-2 block border border-solid border-black text-lg w-[80px] rounded-lg"
          >
            EN
          </button>
          <button
            onClick={() => setLocale("zh")}
            className="py-1 px-2 block border border-solid border-black text-lg w-[80px] rounded-lg"
          >
            TW
          </button>
        </div>
        <div className="mt-8 flex justify-center items-center gap-4">
          <button
            onClick={() => setContentType("date")}
            className="py-1 px-2 block border border-solid border-black text-lg w-[80px] rounded-lg"
          >
            日期
          </button>
          <button
            onClick={() => setContentType("text")}
            className="py-1 px-2 block border border-solid border-black text-lg w-[80px] rounded-lg"
          >
            文字
          </button>
          <button
            onClick={() => setContentType("number")}
            className="py-1 px-2 block border border-solid border-black text-lg w-[80px] rounded-lg"
          >
            數字
          </button>
        </div>
      </div>
    </div>
  );
}
