import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function Detail() {
  const location = useLocation();
  const navigate = useNavigate();
  console.log(location.state);

  useEffect(() => {
    if (!location.state) {
      navigate("/", { replace: true });
    }
  }, [location, navigate]);

  const { year, title, summary, poster, genres } = location.state || {};

  return <span>{year}</span>;
}

export default Detail;
