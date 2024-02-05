import { useParams } from "react-router-dom";

export function WelcomePage() {
  const params = useParams();
  const { prenom } = params;
  return <h1>Hello {prenom}</h1>;
}
