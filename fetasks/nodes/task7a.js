let r = new Promise((resolve) => {
    resolve("Completed");
  });
  
  r.then((result) => {
    console.log("Promise resolved:", result);
  }).catch((error) => {
    console.error("Promise rejected:", error);
  });
  