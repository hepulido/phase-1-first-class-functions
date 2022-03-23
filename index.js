function receivesAFunction(callback) {
return callback();
}

function returnsANamedFunction(){
    function receivesAFunction(){
      return "say hi";
    }
    return receivesAFunction;
};


function returnsAnAnonymousFunction(){
     return () => {};
};
