import { Link } from "react-router-dom"
export  default  function Bottom({label,bottomText,to}){
    return (
        <div className=" flex justify-centre py-2 text-sm">
            <div>{label}</div>
            <Link  className="pointer underline pl-1 cursor-pointer"to={to}>{bottomText}</Link>
        </div>
    )
}