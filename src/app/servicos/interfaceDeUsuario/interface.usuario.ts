import { Node } from "@angular/compiler";

export class Ui {
    lock(element) {        
        document.getElementById(element).setAttribute('disabled', 'disabled');
        let node = document.createElement('i');
        node.className="fa fa-spinner fa-pulse fa-1x fa-fw";
        document.getElementById(element).appendChild(node);
    }

    unlock(element) {        
        document.getElementById(element).removeAttribute('disabled');
        let nodeList = document.getElementById(element).getElementsByTagName('i');
        if (nodeList.length>0)
            document.getElementById(element).removeChild(nodeList[0]);
    }

    setActive(element) {
        document.getElementById(element).setAttribute("disabled", "true");        
    }
    
    setInactive(element) {
        document.getElementById(element).removeAttribute("disabled");
    }

    setVisible(element){
        document.getElementById(element).style.visibility='visible';
    }

    setHidden(element){
        document.getElementById(element).style.visibility='hidden';
    }
}