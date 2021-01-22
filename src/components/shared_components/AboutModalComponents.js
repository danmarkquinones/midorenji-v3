import { Dialog, DialogContent, DialogTitle } from "@material-ui/core"
import React , {useState} from "react"

const AboutModalComponents = (props) => {

    const {isModalVisible , handleCancel , type} = props
    return (
        <div>
            <Dialog
                onClose={handleCancel}
                open={isModalVisible}
            >
                <DialogTitle>{type}</DialogTitle>
                <DialogContent>
                    HELLO
                </DialogContent>
            </Dialog>
        </div>
    )
}

export default AboutModalComponents