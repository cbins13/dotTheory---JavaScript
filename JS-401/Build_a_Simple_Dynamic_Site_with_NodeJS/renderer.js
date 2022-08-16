var fs = require("fs");

function mergeValues(values, content){
    //Cycle over keys
    for(var key in values){
        //Replace all keys with value from the values object
        content = content.replace("{{" + key + "}}", values[key]);
    }
    //Return merged content
    return content;
}

function view(templateName, values, response) {
  //Read from the template file
  var fileContents = fs.readFileSync(
    `./views/${templateName}.html`, 'utf-8');
    //Insert values into the content
    fileContents = mergeValues(values, fileContents);
    //Write out the contents to the response
      response.write(fileContents);
    }

module.exports.view = view;
