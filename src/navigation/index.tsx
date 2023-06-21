/* 
This file holds the root navigation of everything and would include the auth switch
*/
import AuthStack from "./authStack";
import { useAuthentication } from "../hooks/useAuthentication";
import UserStack from "./userStack";

export default function RootNavigation(){
    const { user } = useAuthentication();
    return user ? <UserStack/> : <AuthStack /> 
    //i'll call between authstack and the other stack
}