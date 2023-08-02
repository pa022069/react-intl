import { FormattedNumber } from "react-intl";

export default function Number() {
  return (
    <>
      <FormattedNumber value={1000} />
      <br />
      <FormattedNumber value={1000} style="currency" currency="USD" />
      <br />
      <FormattedNumber
        value={1000}
        style="unit"
        unit="kilobyte"
        unitDisplay="narrow"
      />
      <br />
      <FormattedNumber
        value={1000}
        unit="fahrenheit"
        unitDisplay="long"
        style="unit"
      />
    </>
  );
}
