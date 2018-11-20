import React from "react";
import { Button, Breadcrumb} from "semantic-ui-react";

const Progresses = ({
    sections = ["Progresses"],
    size = "tiny",
    onClick = () => { console.log("New MOFO"); }
}) => {
    return (
        <div>
            <Breadcrumb size={size} sections={sections}/>

            <p>In this page you can edit an old record, or add new ones</p>
            <Button>Edit</Button>
            <Button onClick={onClick}> New</Button>
        </div>
    );
};

export default Progresses;
