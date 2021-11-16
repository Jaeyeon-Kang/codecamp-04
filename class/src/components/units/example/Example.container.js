import ExampleUI from "./Example.presenter";

export default function Example(props){

    return(
        <ExampleUI isEdit={props.isEdit}/>

    )
}