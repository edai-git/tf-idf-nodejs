import { tfIdf } from "../src";

const documents = ['the cat is out of the bag', 'the cat sat on the mat', 'dogs are the best'];

console.log(tfIdf('cat', documents[0], documents));  // Output: 0.27031007207210955
console.log(tfIdf('the', documents[0], documents));  // Output: 0
console.log(tfIdf('dogs', documents[2], documents)); // Output: 0.4054651081081644