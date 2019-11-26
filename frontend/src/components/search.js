import axios from "axios";

export default function initialize(query, db) {
  return new Promise(function(resolve, reject) {
    let x;
    !!db ? (x = "search1") : (x = "search2");
    {
      axios
        .get(`http://localhost:8888/${x}`, {
          params: {
            query
          }
        })
        .then(res => {
          resolve(res.data);
        });
    }
  });
}
