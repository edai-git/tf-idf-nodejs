
function tf(term: string, document: string): number {
    let count = 0;
    const words = document.split(' ');

    for (let word of words) {
        if (word === term) {
            count++;
        }
    }

    return count / words.length;
}

function idf(term: string, documents: string[]): number {
    let count = 0;

    for (let document of documents) {
        if (document.includes(term)) {
            count++;
        }
    }

    return Math.log(documents.length / count);
}

function tfIdf(term: string, document: string, documents: string[]): number {
    return tf(term, document) * idf(term, documents);
}

// export
module.exports = {tf, idf, tfIdf};
export {tf, idf, tfIdf};