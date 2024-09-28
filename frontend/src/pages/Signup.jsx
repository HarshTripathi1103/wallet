
import { Bottom } from "../component/Bottom"
import { Button } from "../component/Button"
import { Header } from "../component/Heading"
import { InputBox } from "../component/InputBox"
import { SubHeading } from "../component/SubHeading"

export function Signup()
{   
    return (
        <div className="flex justify-center bg-slate-300 h-screen">
        <div className="flex flex-col justify-center">
        <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
            <Header label={"Sign up"}></Header>
            <SubHeading label={"Enter your infromation to create an account"} ></SubHeading>
            <InputBox placeholder="John" label={"First Name"}></InputBox>
            <InputBox placeholder="Doe" label={"Last Name"}></InputBox>
            <InputBox placeholder="nitinwalia@gmail.com" label={"Email"}></InputBox>
            <InputBox placeholder="123456" label={"Password"} ></InputBox>
            <div className="pt-4">
          <Button label={"Sign up"} />
          </div>
        <Bottom label={"Already have an account?"} buttonText={"Sign in"} to={"/signin"}></Bottom>    
        </div>
        </div>
        </div>
    )

}