import { FormattedMessage } from "react-intl";

export default function Text() {
  return (
    <>
      <FormattedMessage id="app.start" values={{ name: "Jeffrey Wu" }} />
      <br />
      <FormattedMessage id="app.sub" defaultMessage="這是預設文字" />
    </>
  );
}
