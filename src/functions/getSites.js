import { db } from '@/config';
export const getSites = ip => {
  return new Promise(sites => {
    const tests = [];
    if (ip) {
      db.collection('installs')

        .where('sid', '==', ip)
        .get()
        .then(function(querySnapshot) {
          querySnapshot.forEach(function(doc) {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, ' => ', doc.data());
            tests.push(doc.id);
            sites(tests);
          });
        })
        .catch(function(error) {
          console.log('Error getting documents: ', error);
        });
    } else {
      db.collection('installs')
        .get()
        .then(function(querySnapshot) {
          querySnapshot.forEach(function(doc) {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, ' => ', doc.data());
            tests.push(doc.id);
            sites(tests);
          });
        })
        .catch(function(error) {
          console.log('Error getting documents: ', error);
        });
    }
  });
};
