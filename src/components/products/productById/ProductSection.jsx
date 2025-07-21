import { useParams } from "react-router";

export default function ProductSection() {
    const {id} = useParams();
    
    console.log(id);

  return (
    <div>ProductSection {id}</div>
  )
}
