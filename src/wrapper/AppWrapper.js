import { NavigationDots } from "../components"

const AppWrapper =(Components, idName, classNames)=>function HOC(){
    return(
        <div id ={idName}className={`app__container ${classNames}`}>
            {/* giving it an id and able to pass classes */}
            <div className="app__wrapper app__flex">
                <Components/>
            </div>
            <NavigationDots active={idName}/>
        </div>
    )
}
export default AppWrapper 