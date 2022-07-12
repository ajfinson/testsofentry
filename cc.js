function check16dig(cc_num) {
  let counter = ("" + cc_num).length;
  let flag1 = false;
  if (counter === 16) {
    flag1 = true;
  }
  return flag1;
}

function different2Numbers(cc_num) {
  let num1 = "" + cc_num;
  let num2 = num1[0];
  let flag2 = false;
  for (let i = 1; i < 16; i++) {
    if (num2 != num1[i]) {
      flag2 = true;
    }
  }
  return flag2;
}

function isEven(cc_num) {
  let checker = "" + cc_num;
  let flag3 = false;
  if (parseInt(checker[15]) % 2 == 0) {
    flag3 = true;
  }
  return flag3;
}

function sumCheck(cc_num) {
  let ccString = "" + cc_num;
  let sum = 0;
  let flag4 = false;
  for (let i = 0; i < 16; i++) {
    sum += parseInt(ccString[i]);
  }
  if (sum > 16) {
    flag4 = true;
  }
  return flag4;
}

function cc_Check(cc_num) {
  let f1 = check16dig(cc_num);
  let f2 = different2Numbers(cc_num);
  let f3 = isEven(cc_num);
  let f4 = sumCheck(cc_num);
  if (f1 && f2 && f3 && f4 === true) {
    return true;
  } else return false;
}
console.log(cc_Check(1234567891234562));
