function keyValue(object) {
  let keys = Object.keys(object);
  let values = Object.values(object);
  var k_p = [];
  for (let i = 0; i < keys.length; i++) {
    k_p[i] = [keys[i], values[i]];
  }

  return k_p;
}
console.log(keyValue({ nane: "tomer", unit: 99 }));
