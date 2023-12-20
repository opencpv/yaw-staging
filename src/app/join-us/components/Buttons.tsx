import { Button } from "@nextui-org/react";

type Props = {
    variant: ""
    content: string
}

function JoinUsButtons({variant, content} : Props) {
    const buttonClasses : any = {
        "F" :""
    }
    return ( 
        <Button className={`${buttonClasses[variant]}`}>
            {content}
        </Button>
     );
}

export default JoinUsButtons;