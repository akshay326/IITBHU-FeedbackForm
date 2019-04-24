// AKS1996

function autoFill () {
    for (i = 0; i < document.forms.length ;i++) {
        for (j = 0; j < document.forms[i].length ;j++) {
            if (document.forms[i].elements[j].type == "radio") {
    			start = j;
    			lastName = document.forms[i].elements[j].name;
    			
    			while (j < document.forms[i].length - 1 && lastName == document.forms[i].elements[j+1].name) {
    				j++;
    			}
                var min=0; 
    	        var max=4; // Let's not give `poor` feedback to anyone
	            var ran = Math.floor(Math.random() * (+max - +min)) + +min;
    			document.forms[i].elements[start + ran].checked = true; // in case, you want to give Excellent feedback, remove `ran`
    		}
    	}
    }
}

autoFill();
