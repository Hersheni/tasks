function sayHello() {
    let promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        reject("An error has occurred");
      }, 1000);
    });
  
    return promise;
  }
  
  async function run() {
    try {
      const result = await sayHello();
      console.log("Promise resolved:", result);
    } catch (error) {
      console.error("Promise rejected:", error);
    }
  }
  
  run();
  
