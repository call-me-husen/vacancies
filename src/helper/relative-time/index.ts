import dayjs from "dayjs";
import formatter from "dayjs/plugin/customParseFormat";
import rt from "dayjs/plugin/relativeTime";
import "dayjs/locale/id";

dayjs.locale("id");
dayjs.extend(formatter);
dayjs.extend(rt);

export default function relativeTime(
  from: string,
  to: string,
  format: string = "DD/MM/YYYY"
): string {
  const inputFrom = dayjs(from, format);
  const inputTo = dayjs(to, format);

  const diff = inputTo.from(inputFrom);

  return diff;
}
