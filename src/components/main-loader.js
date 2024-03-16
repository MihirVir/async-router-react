import delay from "../util/delay";
import { defer } from "react-router";

export function loader() {
  return defer({ promise: delay("Fecthed Data", 1000) });
}
