//linear search
function autocomplete(input, dictionary){
    var input = input.replace(/[^a-z]/gi, '');
    var completions = [];
  
      for (var i = 0; i < dictionary.length; ++i){
        if (completions.length === 5){
          return completions;
        }
        if (dictionary[i].toLowerCase().startsWith(input.toLowerCase())){
          completions.push(dictionary[i]);
        }
      }
    
    
  console.log("input: " + input)
  console.log(completions)
    return completions;
}
  
