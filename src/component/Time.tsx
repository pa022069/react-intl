import {
  FormattedDate,
  FormattedTime,
  FormattedRelativeTime,
} from "react-intl";

export default function Time() {
  return (
    <>
      <FormattedDate value={new Date(1459832991883)} />
      <br />
      <FormattedDate
        value={new Date(1459832991883)}
        year="numeric"
        month="long"
        day="2-digit"
      />
      <br />
      <FormattedTime value={new Date(1459832991883)} />
      <br />
      <FormattedRelativeTime
        value={0}
        numeric="auto"
        updateIntervalInSeconds={1}
      />
    </>
  );
}
